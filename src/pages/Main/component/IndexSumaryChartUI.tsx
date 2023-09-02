import * as React from 'react'
// import Echarts from 'echarts'
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react'  //用这个插件解决
 
let echartsOption = {
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
} // 配置项
export interface IProps {
 
}
 
interface IState {
    myEchart?: any
     
}
 
class SummaryStatistics extends React.Component<IProps, IState> {
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

       echartsOption = {
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
      }


    //    echartsOption = {
 
    //     tooltip: {
    //         trigger: 'item',
    //         formatter: '{a} <br/>{b} : {c} ({d}%)'
    //     },
    //     grid: {
    //         left: '0',
    //         right: '0%',
    //         top: '1%',
    //         containLabel: true
    //     },
    //     legend: {
    //         orient: 'vertical',
    //         left: 'left',
    //         data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    //     },
    //     series: [
    //         {
    //             name: '访问来源',
    //             type: 'pie',
    //             radius: ['50%', '70%'],
    //             center: ['50%', '50%'],
    //             data: [
    //                 { value: 32, name: '水库' },
    //                 { value: 42, name: '河道断面' },
    //                 { value: 32, name: '水文测站' },
    //                 { value: 32, name: '灌区' },
    //                 { value: 32, name: '水土保存工程' }
    //             ],
    //             itemStyle: {
    //                 emphasis: {
    //                     shadowBlur: 10,
    //                     shadowOffsetX: 0,
    //                     shadowColor: 'rgba(0, 0, 0, 0.5)'
    //                 }
    //             }
    //         }
    //     ]
    // }
         
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
        const option = {
 
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            grid: {
                left: '0',
                right: '0%',
                top: '1%',
                containLabel: true
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '60%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 32, name: '水库' },
                        { value: 42, name: '河道断面' },
                        { value: 32, name: '水文测站' },
                        { value: 32, name: '灌区' },
                        { value: 32, name: '水土保存工程' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        
        const myEchart = echarts.init(document.getElementById('echarts-pie'))
        myEchart.setOption(echartsOption)
 
       this.setState({
           myEchart
        })
      
    }
    componentDidUpdate() {
       setTimeout(() => {
            this.getEchartWidth()
        }, 20)
    }
    resized = () => { 
        const { myEchart } = this.state
         myEchart.resize()
    }
    render() {
        return (
            <React.Fragment>
                    <div ref={this.echartRef} id='echarts-pie' style={{ height: '238px' }} />
                    {/* <ReactEcharts
                        option={echartsOption}
                        theme='clear'
                        style={{width: '100%', height: '238px'}}
                    /> */}
            </React.Fragment>
             
        )
    }
 
}
 
export default SummaryStatistics