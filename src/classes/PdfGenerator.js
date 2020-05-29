import { DEFAULT_INVOICE_NUMBER_FORMAT, DEFAULT_LANGUAGE, TEMPLATES } from "../config.js";
import Utils from "./Utils.js";
import htmlToPdf from "html-pdf";
import moment from "moment";
import pug from "pug";

export default class PdfGenerator {
  static createSellInvoice({ fileName, ...restParams }) {
    return (new PdfGenerator(restParams)).getSellInvoice(fileName);
  }
  
  static createBuyInvoice({ fileName, ...restParams }) {
    return (new PdfGenerator(restParams)).getBuyInvoice(fileName);
  }

  constructor({ sender, recipient, global, lang = DEFAULT_LANGUAGE }) {
    this.sender = sender;
    this.recipient = recipient;
    this.global = global;
    this.texts = JSON.parse(Utils.loadLangFile(lang));
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
      globalDescription: this.global.description,
      globalIssueDate: Utils.formatDate(this.global.issueDate),
      globalTaxDate: Utils.formatDate(this.global.taxDate),
      globalAmountVatRates: Utils.getVatRates(this.global.amountVatRates),
      globalTotalAmounts: Utils.getTotalAmounts(this.global.amountVatRates)
    });
    return this.getDocument(fileName, invoiceHtml);
  }

  getDocument(fileName, invoiceHtml) {
    return new Promise((resolve, reject) => {
      const pdf = htmlToPdf.create(invoiceHtml);
      const callback = (error, result) => {
        if (error) reject(error);
        else resolve(result);
      };
      if (fileName) pdf.toFile(fileName, callback);
      else pdf.toBuffer(callback);
    });
  }
}
