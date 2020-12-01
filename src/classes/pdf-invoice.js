import { DEFAULT_DUE_DATE_DAYS_OFFSET, DEFAULT_INVOICE_NUMBER_FORMAT, DEFAULT_LANGUAGE, DIR_NAME, TEMPLATES } from "../config.js";
import Utils from "./utils.js";
import axios from "axios";
import fs from "fs/promises";
import htmlToPdf from "html-pdf";
import moment from "moment";
import path from "path";
import pug from "pug";

export default class PdfInvoice {
  static createSellInvoice({ fileName, ...restParams }) {
    return (new PdfInvoice(restParams)).getSellInvoice(fileName);
  }
  
  static createBuyInvoice({ fileName, ...restParams }) {
    return (new PdfInvoice(restParams)).getBuyInvoice(fileName);
  }

  constructor({ sender, recipient, global, lang = DEFAULT_LANGUAGE }) {
    this.sender = sender;
    this.recipient = recipient;
    this.global = global;
    this.lang = lang;
  }

  async getSellInvoice(fileName = null) {
    await this.loadTexts();

    return this.getInvoice(fileName, TEMPLATES.SELL_INVOICE_PATH);
  }

  async getBuyInvoice(fileName = null) {
    await this.loadTexts();

    return this.getInvoice(fileName, TEMPLATES.BUY_INVOICE_PATH);
  }

  async getInvoice(fileName, template) {
    const currentDate = new Date();

    const compiledInvoice = pug.compileFile(template);

    const defaultInvoiceId = moment(this.global.issueDate || currentDate).format(DEFAULT_INVOICE_NUMBER_FORMAT);

    const bookeLogoImage = await fs.readFile(path.join(DIR_NAME, "../static/images/logo.png"));

    const customLogo = this.global.logoUrl ? (await axios.get(this.global.logoUrl, { responseType: "arraybuffer" })).data : null;

    const invoiceHtml = compiledInvoice({
      ...this.texts,
      dirName: DIR_NAME,
      currentYear: moment().year(),
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
      globalInvoiceNumber: this.global.invoiceNumber || this.global.vsValue || defaultInvoiceId,
      globalVsValue: this.global.vsValue || defaultInvoiceId,
      globalKsValue: this.global.ksValue,
      globalCurrency: this.global.currency,
      globalDescription: this.global.description,
      globalLogoUrl: this.global.logoUrl === null
        ? null
        : `data:image/png;base64,${Buffer.from(customLogo || bookeLogoImage).toString("base64")}`,
      globalIssueDate: Utils.formatDate(this.global.issueDate),
      globalDueDate: Utils.formatDate(this.global.dueDate || moment().add(DEFAULT_DUE_DATE_DAYS_OFFSET, "days")),
      globalTaxDate: Utils.formatDate(this.global.taxDate),
      globalAmountVatRates: Utils.getVatRates(this.global.amountVatRates),
      globalTotalAmounts: Utils.getTotalAmounts(this.global.amountVatRates),
      globalFooterText: this.global.footerText
    });
    
    const document = this.getDocument(fileName, invoiceHtml);

    return document;
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

  async loadTexts() {
    this.texts = JSON.parse(await Utils.loadLangFile(this.lang));
  }
}
