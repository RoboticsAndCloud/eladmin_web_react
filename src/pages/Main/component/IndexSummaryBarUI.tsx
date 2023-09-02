import * as React from 'react'
// import Echarts from 'echarts'
import * as echarts from 'echarts';

const animationDuration = 6000

const getOption = () => {
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: 10,
      left: '2%',
      right: '2%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      }
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        show: false
      }
    }],
    series: [{
      name: 'pageA',
      type: 'bar',
      stack: 'vistors',
      barWidth: '60%',
      data: [79, 52, 200, 334, 390, 330, 220],
      animationDuration
    }, {
      name: 'pageB',
      type: 'bar',
      stack: 'vistors',
      barWidth: '60%',
      data: [80, 52, 200, 334, 390, 330, 220],
      animationDuration
    }, {
      name: 'pageC',
      type: 'bar',
      stack: 'vistors',
      barWidth: '60%',
      data: [30, 52, 200, 334, 390, 330, 220],
      animationDuration
    }]
  };
  return option
}

let echartsOption = getOption() // 配置项
export interface IProps {
 
}
 
interface IState {
    myEchart?: any
     
}

class SummaryBarStatistics extends React.Component<IProps, IState> {
    echartRef: any = undefined
    constructor(props: IProps) {
        super(props)
        this.state = {
            myEchart: null,
            
        }
        this.echartRef = React.createRef()
    }
    componentDidMount() {
       this.initEchart()
       echartsOption = getOption()
    } // didMount
    // 获取Echart图宽高
    getEchartWidth = () => {
        this.echartRef.current.style.width = this.echartRef.current.offsetWidth
        this.echartRef.current.style.height = this.echartRef.current.offsetHeight    
        this.resized()     
    }
    initEchart = () => {
        // window.addEventListener('resize', () => {
        //     myEchart.resize()
        // })
        
        const myEchart = echarts.init(document.getElementById('echarts-bar'))
        myEchart.setOption(echartsOption)
 
       this.setState({
           myEchart
        })
      
    }
    componentDidUpdate() {
       setTimeout(() => {
            this.getEchartWidth()
        }, 1)
    }
    resized = () => { 
        const { myEchart } = this.state
         myEchart.resize() // need to do resize due to echarts draw a line on canvas before got the accurate div width and height
    }
    render() {
        return (
            <React.Fragment>
                    <div ref={this.echartRef} id='echarts-bar' style={{ height: '238px' }} />
                    {/* <ReactEcharts
                        option={echartsOption}
                        theme='clear'
                        style={{width: '100%', height: '238px'}}
                    /> */}
            </React.Fragment>
             
        )
    }
 
}
 
export default SummaryBarStatistics