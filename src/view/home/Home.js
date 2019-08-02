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
      url: '/proxy/v2/movie/in_theaters',
      method: 'get',
      params: {
        city: '北京',
        start: 0,
        count: 10,
      },
    }).then(function(res) {
      console.log(res);
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
