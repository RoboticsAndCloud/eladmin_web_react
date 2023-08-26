import * as echarts from 'echarts';
import ReactEcharts from "echarts-for-react"

type EChartsOption = echarts.EChartsOption;




const DemoPie: React.FC = () => {
  
const getOption = () => {
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      left: 'center',
      bottom: '10',
      data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
    },
    calculable: true,
    series: [
      {
        name: 'WEEKLY WRITE ARTICLES',
        type: 'pie',
        roseType: 'radius',
        radius: [15, 95],
        center: ['50%', '38%'],
        data: [
          { value: 320, name: 'Industries' },
          { value: 240, name: 'Technology' },
          { value: 149, name: 'Forex' },
          { value: 100, name: 'Gold' },
          { value: 59, name: 'Forecasts' }
        ],
        animationEasing: 'cubicInOut',
        animationDuration: 2600
      }
    ]
  };
  return option
}
  return <ReactEcharts className='panel-body' style={{backgroundColor: 'white'}} option={getOption()} />;
  // style: https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
};

export default DemoPie;
