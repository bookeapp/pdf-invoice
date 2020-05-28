const DEFAULT_LANGUAGE = 'en';

const DEFAULT_INVOICE_NUMBER_FORMAT = 'YYYYMMDDHHmmSS';

const DATE_FORMAT = 'DD.MM.YYYY';

const MONEY_STRING_PRECISION = 2;

const LOCALES_PATH = `${__dirname}/../static/locales`;

const TEMPLATES_PATH = `${__dirname}/../static/templates`;

const TEMPLATES = {
  SELL_INVOICE_PATH: `${TEMPLATES_PATH}/sellInvoice.pug`,
  BUY_INVOICE_PATH: `${TEMPLATES_PATH}/buyInvoice.pug`,
};

module.exports = {
  DEFAULT_LANGUAGE,
  DEFAULT_INVOICE_NUMBER_FORMAT,
  DATE_FORMAT,
  MONEY_STRING_PRECISION,
  LOCALES_PATH,
  TEMPLATES_PATH,
  TEMPLATES,
};