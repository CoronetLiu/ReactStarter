import React from 'react';
import { Row, Col, Progress, Button, Radio } from 'antd';
import { Link } from 'react-router';
import ReactEcharts from 'echarts-for-react';
import '../../util/china';

var geoCoordMap = {
  '黑龙江': [127.9688, 45.368],
  '内蒙古': [110.3467, 41.4899],
  '吉林': [125.8154, 44.2584],
  '北京': [116.4551, 40.2539],
  '辽宁': [123.1238, 42.1216],
  '河北': [114.4995, 38.1006],
  '天津': [117.4219, 39.4189],
  '山西': [112.3352, 37.9413],
  '陕西': [109.1162, 34.2004],
  '甘肃': [103.5901, 36.3043],
  '宁夏': [106.3586, 38.1775],
  '青海': [101.4038, 36.8207],
  '新疆': [87.9236, 43.5883],
  '西藏': [91.11, 29.97],
  '四川': [103.9526, 30.7617],
  '重庆': [108.384366, 30.439702],
  '山东': [117.1582, 36.8701],
  '河南': [113.4668, 34.6234],
  '江苏': [118.8062, 31.9208],
  '安徽': [117.29, 32.0581],
  '湖北': [114.3896, 30.6628],
  '浙江': [119.5313, 29.8773],
  '福建': [119.4543, 25.9222],
  '江西': [116.0046, 28.6633],
  '湖南': [113.0823, 28.2568],
  '贵州': [106.6992, 26.7682],
  '云南': [102.9199, 25.4663],
  '广东': [113.12244, 23.009505],
  '广西': [108.479, 23.1152],
  '海南': [110.3893, 19.8516],
  '上海': [121.4648, 31.2891],
};

var convertData = function(data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  return res;
};

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      MapOption: this.getMapOption(),
    };
  }

  componentDidMount() {

  }

  getMapOption = () => {
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}',
      },
      visualMap: {
        left: 30,
        bottom: 20,
        //backgroundColor:'#ffffff',
        categories: ['严重', '一般', '正常'],
        inRange: {
          color: ['#FF6E71', '#FFD426', '#62E298'],
          symbol: 'circle',
        },
        textStyle: {
          color: '#333',
        },
      },
      geo: {
        map: 'china',
        top: 10,
        bottom: 10,
        roam: false,
        silent: false,
        zoom: 1,
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
            color: 'white',
          },
        },
        itemStyle: {
          normal: {
            areaColor: '#DCF3FF',
            borderColor: '#111',
          },
          emphasis: {
            areaColor: '#ACE3FF',
          },
        },
      },
      series: [
        {
          name: 'pm2.5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertData([
            { name: '黑龙江', value: '严重' },
            { name: '北京', value: '正常' },
            { name: '湖南', value: '一般' },
            { name: '青海', value: '正常' },
          ]),
          symbolSize: 12,
          label: {
            normal: {
              show: true,
              formatter: '{b}',
              position: 'bottom',

            },
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              show: true,
            },
            emphasis: {
              borderColor: '#fff',
              borderWidth: 1,
            },
          },
        },
      ],
    };
    return option;
  };

  render() {

    return (

      <Row gutter={12}>
        <Col span={3}></Col>
        <Col span={21}>
          <Row gutter={12}>
            <Col span={20} className="map">
              <div className="title">
                <span>MAP</span>
              </div>
              <ReactEcharts ref='echarts_react1'
                            option={this.state.MapOption}
                            style={{ height: '600px', width: '100%' }}/>
            </Col>
            <Col span={4}></Col>
          </Row>
        </Col>
      </Row>

    );
  }
}
