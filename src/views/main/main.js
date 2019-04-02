import React, { Component } from 'react';
import { FullSlip, SlipItem } from "react-fullslip";

import data from '../../data';
import './main.css';

class Main extends Component {
  render() {
    let options = {
      navigation: false, // 旁边的进度圈
      activeClass: 'active', //默认active
      duration: 500, //默认1000
      transverse: false,  //纵向 false
      navImage: [], //图片
      arrowNav: false, //无箭头
    };
    return (
      <div className="main">
        <FullSlip {...options}>
          {
            data.map((color) => {
              return (
                <SlipItem key={color.name} className="pure-g">
                  <div className="right pure-u-1" style={{ backgroundColor: color.code, height: '100%', color: color.gray < 90 ? "#FFF" : "#000" }}>
                    <h1>{color.name}</h1>
                    <p className="split">
                      <span>R: {color.RGB[0]}</span>
                      <span>G: {color.RGB[1]}</span>
                      <span>B: {color.RGB[2]}</span>
                    </p>
                    <p className="split">
                      <span>C: {color.CMYK[0]}</span>
                      <span>M: {color.CMYK[1]}</span>
                      <span>Y: {color.CMYK[2]}</span>
                      <span>K: {color.CMYK[3]}</span>
                    </p>
                    <p><code>{color.code.toUpperCase()}</code></p>
                  </div>
                </SlipItem>
              );
            })
          }
        </FullSlip>
      </div>
    );
  }
}

export default Main;