import * as echarts from 'echarts';
import ReactEcharts from "echarts-for-react"
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import useComponentSize from '@rehooks/component-size';

type EChartsOption = echarts.EChartsOption;

class DemoLine4 extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      },
    };
  }
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    const MyChart = echarts.init(document.getElementById("main")); // 绘制图表
    let option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      grid: {
        left: 10,
        right: 10,
        bottom: 20,
        top: 30,
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        padding: [5, 10]
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };
    MyChart.setOption(option);
  }
  render() {
    return (
      <div>
            <div id="main" style={{ width: '100%', height: '100%' }}></div>
      </div>
    );
  }
}



class DemoLine2 extends React.Component {
  echartsReactRef: any;
  echartsInstance: any;

  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  state = {
    option : {}
  } 

  componentDidMount(): void {    
      setTimeout(() => {
        this.setState({option:this.getOption()})
      }, 200)
  }

  getOption = () => {
  let option = {
    xAxis: {
      type: 'category',
      show: true,
      // boundaryGap: ['5%', '5%'],
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    grid: {
      left: 10,
      right: 10,
      bottom: 20,
      top: 30,
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      padding: [5, 10]
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };
  return option
}

  render() {
    return <ReactEcharts style={{backgroundColor: 'gray'}} option={this.state.option} />;
  }
  
}

const DemoLine: React.FC = () => {
  
  const tableSelectRef = useRef<HTMLDivElement>(null);

  const getEchartsInstance: () => echarts.ECharts = () => {
    return echarts.getInstanceByDom(tableSelectRef.current!)!;
};

const echartRef = useRef<HTMLDivElement>();  

  useLayoutEffect(() => {
      const chart = echartRef.current && echarts.getInstanceByDom(echartRef.current)
      console.log('chart----------', echartRef)
      if (chart) {
        chart.resize()
      }
      
  }, []);

  // const chartRef = useRef(HTMLDivElement);
  // const size = useComponentSize(chartRef);
   
  // useEffect(() => {
  //   const chart = chartRef.current && echarts.getInstanceByDom(chartRef.current);
  //   if (chart) {
  //     chart.resize();
  //   }
  // }, [chartRef, size]);
  
const getOption = () => {
  let option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    grid: {
      left: 10,
      right: 10,
      bottom: 20,
      top: 30,
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      padding: [5, 10]
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };
  return option
}
  return <ReactEcharts style={{backgroundColor: 'gray'}} option={getOption()} />;
  // style: https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
};

export default DemoLine;
