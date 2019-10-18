import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import axios from 'axios';

import './home.less';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios({
      url: '/proxy/sug',
      method: 'get',
      params: {
        code: 'utf-8',
        q: '手机'
      },
      headers: {
        'Authorization': 'CL',
        'token':'00000000'
      }
    }).then(function(res) {
      console.log('模拟请求->',res);
    }, function() {
      console.log('API请求失败...');
    });
  }

  render() {
    return (
      <div className="main-home">
        <p><FormattedMessage id="hello"/>-Home</p>
      </div>
    );
  }
}
