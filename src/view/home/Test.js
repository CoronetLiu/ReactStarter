import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // TODO : There is something to do.
  }

  render() {
    return (
      <div className="main-home">
        <p>TEST</p>
        <p><Link to={'/home'}>toHome</Link></p>
      </div>
    );
  }
}
