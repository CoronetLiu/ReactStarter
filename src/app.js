import { addLocaleData, IntlProvider } from "react-intl";
import { LocaleProvider } from "antd";
import { Provider } from "mobx-react";
import intl from "intl";
import promis from "es6-promise";
import React from "react";

import "antd/dist/antd.css";
import appstore from "./stores/AppStore";
import cnLocale from "./local/zh-CN";
import Routes from "./router/routes";

import "./style/app.less";
import "./style/magic.css";

global.Intl = intl; //解决react intl的ie问题
promis.polyfill(); //
addLocaleData(cnLocale.data);
module.exports = (
    <IntlProvider locale={cnLocale.locale} messages={cnLocale.messages}>
        <LocaleProvider>
            <Provider {...appstore}>
                <Routes />
            </Provider>
        </LocaleProvider>
    </IntlProvider>
);
