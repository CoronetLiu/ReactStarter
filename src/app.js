import { addLocaleData, IntlProvider } from 'react-intl';
import { LocaleProvider } from 'antd';
import { Provider } from 'mobx-react';
import intl from 'intl';
import promis from 'es6-promise';
import React from 'react';

import cnLocale from './local/zh-CN';
import appstore from './stores/AppStore';
import Routes from './router/routes';

// import './util/amfe.js'

import './style/app.less';
import './style/magic.css';

// import 'antd/dist/antd.css';  //babelrc中已配置，无需引入

global.Intl = intl; //解决react intl的ie问题
promis.polyfill(); //
addLocaleData(cnLocale.data);
module.exports = (
  <IntlProvider locale={cnLocale.locale} messages={cnLocale.messages}>
    <LocaleProvider>
      <Provider {...appstore}>
        <Routes/>
      </Provider>
    </LocaleProvider>
  </IntlProvider>
);
