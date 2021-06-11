import { DATE_FORMAT, DEFAULT_LANGUAGE, LOCALES_PATH, MONEY_STRING_PRECISION } from "../config.js";
import fs from "fs/promises";
import moment from "moment";
import path from "path";

export default class Utils {
  static getTotalAmounts(vatRates, precision = MONEY_STRING_PRECISION) {
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

  static getVatRates(vatRates, precision = MONEY_STRING_PRECISION) {
    return vatRates.map(({ rate, base, value }) => {
      return {
        rate,
        base: base.toFixed(precision),
        value: value.toFixed(precision),
        total: (base + value).toFixed(precision)
      };
    });
  }

  static async loadLangFile(lang) {
    const langFile = path.join(LOCALES_PATH, `${lang}.json`);

    try {
      await fs.access(langFile);

      return fs.readFile(langFile);
    } catch (error) {
      return Utils.loadLangFile(DEFAULT_LANGUAGE);
    }
  }
  
  static formatDate(date) {
    return date && moment.utc(date).format(DATE_FORMAT);
  }
}
