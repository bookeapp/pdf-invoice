import { dirname } from "path";
import { fileURLToPath as fileUrlToPath } from "url";

export const DIR_NAME = dirname(fileUrlToPath(import.meta.url));

export const DEFAULT_LANGUAGE = "en";

export const DEFAULT_INVOICE_NUMBER_FORMAT = "MMDDHHmmSS";

export const DATE_FORMAT = "DD.MM.YYYY";

export const DEFAULT_DUE_DATE_DAYS_OFFSET = 14;

export const MONEY_STRING_PRECISION = 2;

export const LOCALES_PATH = `${DIR_NAME}/../static/locales`;

export const TEMPLATES_PATH = `${DIR_NAME}/../static/templates`;

export const TEMPLATES = {
  SELL_INVOICE_PATH: `${TEMPLATES_PATH}/sell-invoice.pug`,
  BUY_INVOICE_PATH: `${TEMPLATES_PATH}/buy-invoice.pug`
};

export default {
  DIR_NAME,
  DEFAULT_LANGUAGE,
  DEFAULT_INVOICE_NUMBER_FORMAT,
  DATE_FORMAT,
  MONEY_STRING_PRECISION,
  LOCALES_PATH,
  TEMPLATES_PATH,
  TEMPLATES
};
