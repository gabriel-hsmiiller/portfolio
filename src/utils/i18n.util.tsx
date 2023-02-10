import { LanguageModeContext, LanguageModeEnum } from "../components/header/components/language-mode";
import en from '../../assets/i18n/en.json';
import es from '../../assets/i18n/es.json';
import pt from '../../assets/i18n/pt.json';
import React from "react";

export function translate(key: string) {
    const languageContext = React.useContext(LanguageModeContext)

    let value = "";
    let obj: Object | string;
    const propertyTree = key.split('.');

    switch(languageContext.mode) {
        case LanguageModeEnum.ENGLISH:
            obj = en;
            break;
        case LanguageModeEnum.ESPANOL:
            obj = es;
            break;
        case LanguageModeEnum.PORTUGUES:
            obj = pt;
            break;
        default:
            obj = en;
            break;
    }

    for (let keyTree of propertyTree) {
        if (!obj) break;

        obj = obj[keyTree];

        if (typeof obj !== 'string') continue;

        value = obj;
    }

    if (!value) value = key;

    return value;
}