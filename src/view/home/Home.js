import React from "react";
import { FormattedMessage } from "react-intl";
import {Link} from 'react-router';
import axios from 'axios';

import {Row, Col} from 'antd';
import Map from './Map';

import './home.less';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        axios({
            url: "/proxy/v2/movie/in_theaters",
            method: "get",
            params: {
                city: "北京",
                start: 0,
                count: 10
            }
        }).then(function (res) {
            console.log(res)
        }, function () {
            console.log('API请求失败...')
        })
    }

    render() {

        return (
            <div className="main-home">
                <p><FormattedMessage id="hello"/>-Home</p>
                <Row gutter={12} className="home-row">
                    <Col span={3}></Col>
                    <Col span={21}>
                        <Row gutter={12}>
                            <Col span={20}>
                                <Map />
                            </Col>
                            <Col span={4}></Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}
