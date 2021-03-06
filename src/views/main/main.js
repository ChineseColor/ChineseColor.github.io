import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import data from '../../data';
import './main.css';

var nzhcn = require("nzh/cn");

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
                          backgroundColor: color.code, height: '100%',
                          color: color.gray < 126 ? "#FFF" : "#000",
                          display: 'flex',
                          justifyContent: "center",
                        }}>
                        <div
                          className="font-kai rl"
                          style={{ margin: "2em auto" }}
                        >
                          <div className="font-kai" style={{ fontSize: "2em", fontWeight: 300 }}>{color.name}</div>
                          <p style={{ paddingTop: "2em" }}><code>{color.code.toUpperCase()}</code></p>
                          <div className="content">赤{nzhcn.encodeB(color.RGB.R)}</div>
                          <div className="content">绿{nzhcn.encodeB(color.RGB.G)}</div>
                          <div className="content">蓝{nzhcn.encodeB(color.RGB.B)}</div>
                        </div>
                        <div
                          className="poetry font-kai rl"
                          style={{ position: "absolute", bottom: "2em", right: "2em" }}
                        >
                          {color.poetry && color.poetry.map(sentence => {
                            return (
                              <div className="content">{sentence}</div>
                            );
                          })}
                        </div>
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