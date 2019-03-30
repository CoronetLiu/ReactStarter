import React from "react";
import { Link } from 'react-router';
import axios from 'axios';
import {Row, Col,Progress,Button,Radio,Tabs  } from 'antd';
import ReactEcharts from 'echarts-for-react';
import './home.less';
import '../../util/china';
import Map from './Map';
export default class Home extends React.Component {
    constructor() {
        super();
        this.state={

        }
    }
    componentDidMount() {
        axios({
          url:"/proxy/v2/movie/in_theaters",
          method:"get",
          params:{
              city:"北京",
              start:0,
              count:0
          }
        }).then(function(res){
          console.log(res)
        },function(){
          console.log('error')
        })
    }

    render() {

        return (
            <div className="main-home">
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
