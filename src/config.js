import { dirname } from "path";
import { fileURLToPath as fileUrlToPath } from "url";

export const DIR_NAME = dirname(fileUrlToPath(import.meta.url));

export const DEFAULT_LANGUAGE = "en";

export const DEFAULT_INVOICE_NUMBER_FORMAT = "YYYYMMDDHHmmSS";

export const DATE_FORMAT = "DD.MM.YYYY";

export const MONEY_STRING_PRECISION = 2;

export const LOCALES_PATH = `${DIR_NAME}/../static/locales`;

export const TEMPLATES_PATH = `${DIR_NAME}/../static/templates`;

export const TEMPLATES = {
  SELL_INVOICE_PATH: `${TEMPLATES_PATH}/sellInvoice.pug`,
  BUY_INVOICE_PATH: `${TEMPLATES_PATH}/buyInvoice.pug`
};

export default {
  DEFAULT_LANGUAGE,
  DEFAULT_INVOICE_NUMBER_FORMAT,
  DATE_FORMAT,
  MONEY_STRING_PRECISION,
  LOCALES_PATH,
  TEMPLATES_PATH,
  TEMPLATES
};
