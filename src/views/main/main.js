import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import data from '../../data';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <ReactFullpage
          // anchors={data.map(color => { return color.name; })} // 设置锚点
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                {data.map(color => {
                  return (
                    <div key={color.name} className="pure-g section">
                      <div
                        className="pure-u-1"
                        style={{
                          backgroundColor: color.code,
                          height: '100%',
                          color: color.gray < 126 ? "#FFF" : "#000"
                        }}>
                        <h1>{color.name}</h1>
                        <p className="split">
                          <span>R: {color.RGB.R}</span>
                          <span>G: {color.RGB.G}</span>
                          <span>B: {color.RGB.B}</span>
                        </p>
                        <p className="split">
                          <span>C: {color.CMYK[0]}</span>
                          <span>M: {color.CMYK[1]}</span>
                          <span>Y: {color.CMYK[2]}</span>
                          <span>K: {color.CMYK[3]}</span>
                        </p>
                        <p><code>{color.code.toUpperCase()}</code></p>
                      </div>
                    </div>
                  );
                })}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default Main;