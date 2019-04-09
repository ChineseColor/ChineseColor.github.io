import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import data from '../../data';
import './main.css';

class Circle extends Component {
  static defaultProps = {
    number: 0,
    max_number: 255,
    animate: true,
    animationDuration: '1s',
    showPercentage: true,
    showPercentageSymbol: true,
    progressColor: 'rgb(76, 154, 255)',
    bgColor: '#ecedf0',
    textColor: '#6b778c',
    size: '60',
    lineWidth: '25',
    percentSpacing: 10,
    textStyle: { font: 'bold 8rem Helvetica, Arial, sans-serif' }
  }

  render() {
    const { number, max_number, size, bgColor, progressColor, lineWidth, animate, animationDuration, roundedStroke, responsive, onAnimationEnd, textColor, textStyle, percentSpacing, showPercentageSymbol } = this.props;
    const radius = 175;
    const diameter = Math.round(Math.PI * radius * 2);
    const getOffset = (val = 0) => Math.round((100 - Math.min(val, 100)) / 100 * diameter);
    const progress = parseInt(number * 100 / max_number);
    const strokeDashoffset = getOffset(progress);
    const transition = animate ? `stroke-dashoffset ${animationDuration} ease-out` : undefined;
    const strokeLinecap = roundedStroke ? 'round' : 'butt';
    const svgSize = responsive ? '100%' : size;
    return (
      <svg width={svgSize} height={svgSize} viewBox="-25 -25 400 400">
        <circle stroke={bgColor} cx="175" cy="175" r="175" strokeWidth={lineWidth} fill="none" />
        <circle stroke={progressColor} transform="rotate(-90 175 175)" cx="175" cy="175" r="175" strokeDasharray="1100" strokeWidth={lineWidth} strokeDashoffset="1100" strokeLinecap={strokeLinecap} fill="none" style={{ strokeDashoffset, transition }} onTransitionEnd={onAnimationEnd} />
        <text style={textStyle} fill={textColor} x={radius} y={radius} textAnchor="middle" dominantBaseline="central">
          {number}{showPercentageSymbol && <tspan dx={percentSpacing}>%</tspan>}
        </text>
      </svg>
    );
  }
}

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
                        <h1 className="font-kai">{color.name}</h1>
                        <p><code>{color.code.toUpperCase()}</code></p>
                        {/*
                          <div className="split">
                            <span>
                              <Circle
                                number={color.RGB.R}
                                progressColor='rgb(255, 0, 0)'
                                textColor={color.gray < 126 ? "#FFF" : "#000"}
                                showPercentageSymbol={false}
                              />
                            </span>
                            <span>
                              <Circle
                                number={color.RGB.G}
                                progressColor='rgb(0, 255, 0)'
                                textColor={color.gray < 126 ? "#FFF" : "#000"}
                                showPercentageSymbol={false}
                              />
                            </span>
                            <span>
                              <Circle
                                number={color.RGB.B}
                                progressColor='rgb(0, 0, 255)'
                                textColor={color.gray < 126 ? "#FFF" : "#000"}
                                showPercentageSymbol={false}
                              />
                            </span>
                          </div>
                          <p className="split">
                            <span>C: {color.CMYK[0]}</span>
                            <span>M: {color.CMYK[1]}</span>
                            <span>Y: {color.CMYK[2]}</span>
                            <span>K: {color.CMYK[3]}</span>
                          </p>
                        */}
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