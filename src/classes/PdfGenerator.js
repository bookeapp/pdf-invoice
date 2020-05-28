const {
  DEFAULT_LANGUAGE,
  DEFAULT_INVOICE_NUMBER_FORMAT,
  DATE_FORMAT,
  MONEY_STRING_PRECISION,
  LOCALES_PATH,
  TEMPLATES
} = require('../config');
const path = require('path');
const fs = require('fs');
const moment = require('moment');
const htmlToPdf = require('html-pdf');
const pug = require('pug');


class PdfGenerator {
  constructor({ sender, recipient, global, lang = DEFAULT_LANGUAGE }) {
    this.sender = sender;
    this.recipient = recipient;
    this.global = global;
    this.texts = JSON.parse(this.loadLangFile(lang));
  }

  loadLangFile(lang) {
    const langFile = path.join(LOCALES_PATH, `${lang}.json`);
    if (fs.existsSync(langFile)) return fs.readFileSync(langFile);
    else return this.loadLangFile(DEFAULT_LANGUAGE);
  }

  formatDate(date) {
    return date && moment(date).format(DATE_FORMAT);
  }

  normalizeVatRates(vatRates, precision = MONEY_STRING_PRECISION) {
    return vatRates.map(({ rate, base, value }) => {
      return {
        rate,
        base: base.toFixed(precision),
        value: value.toFixed(precision),
        total: (base + value).toFixed(precision)
      };
    });
  }

  getTotalAmounts(vatRates, precision = MONEY_STRING_PRECISION) {
    const values = vatRates.reduce(
      (prevValue, currentValue) => {
        const base = prevValue.base + currentValue.base;
        const value = prevValue.value + currentValue.value;
        const total = base + value;
        return { base, value, total };
      },
      { base: 0, value: 0, total: 0 }
    );
    return {
      base: values.base.toFixed(precision),
      vat: values.value.toFixed(precision),
      total: values.total.toFixed(precision)
    };
  }

  getSellInvoice(fileName = null) {
    return this.getInvoice(fileName, TEMPLATES.SELL_INVOICE_PATH);
  }

  getBuyInvoice(fileName = null) {
    return this.getInvoice(fileName, TEMPLATES.BUY_INVOICE_PATH);
  }

  getInvoice(fileName, template) {
    const currentDate = new Date();
    const compiledInvoice = pug.compileFile(template);
    const invoiceHtml = compiledInvoice({
      ...this.texts,
      recipientBusinessName: this.recipient.businessName,
      recipientBusinessAddress: this.recipient.businessAddress,
      recipientBusinessId: this.recipient.businessId,
      recipientVatId: this.recipient.vatId,
      recipientBankAccount: this.recipient.bankAccount,
      recipientBankCode: this.recipient.bankCode,
      senderBusinessName: this.sender.businessName,
      senderBusinessAddress: this.sender.businessAddress,
      senderBusinessId: this.sender.businessId,
      senderVatId: this.sender.vatId,
      senderBankAccount: this.sender.bankAccount,
      senderBankCode: this.sender.bankCode,
      globalInvoiceNumber: this.global.vsValue || moment(currentDate).format(DEFAULT_INVOICE_NUMBER_FORMAT),
      globalVsValue: this.global.vsValue,
      globalKsValue: this.global.ksValue,
      globalSsValue: this.global.ssValue,
      globalCurrency: this.global.currency,
      globalIssueDate: this.formatDate(this.global.issueDate),
      globalTaxDate: this.formatDate(this.global.taxDate),
      globalDescription: this.global.description,
      globalAmountVatRates: this.normalizeVatRates(this.global.amountVatRates),
      globalTotalAmounts: this.getTotalAmounts(this.global.amountVatRates)
    });
    return this.getDocument(fileName, invoiceHtml);
  }

  async getDocument(fileName, html) {
    return new Promise((resolve, reject) => {
      const pdf = htmlToPdf.create(html);
      const callback = (error, result) => {
        if (error) reject(error);
        else resolve(result);
      };
      if (fileName) pdf.toFile(fileName, callback);
      else pdf.toBuffer(callback);
    });
  }
}

PdfGenerator.createSellInvoice = ({ fileName, ...restParams }) => {
  return (new PdfGenerator(restParams)).getSellInvoice(fileName);
};

PdfGenerator.createBuyInvoice = ({ fileName, ...restParams }) => {
  return (new PdfGenerator(restParams)).getBuyInvoice(fileName);
};


module.exports = PdfGenerator;