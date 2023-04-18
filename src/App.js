import React from 'react';
import ReactEcharts from 'echarts-for-react';
const wineData = [
  {
    Alcohol: 14.23,
    Flavanoids: 3.06,
    Ash: 2.43,
    Magnesium: 127
  },
  {
    Alcohol: 13.2,
    Flavanoids: 2.76,
    Ash: 2.14,
    Magnesium: 100
  },
  {
    Alcohol: 13.16,
    Flavanoids: 3.24,
    Ash: 2.67,
    Magnesium: 101
  },
  {
    Alcohol: 14.37,
    Flavanoids: 3.49,
    Ash: 2.5,
    Magnesium: 128
  },
  {
    Alcohol: 13.24,
    Flavanoids: 2.69,
    Ash: 2.87,
    Magnesium: 112
  }
];

const lineChartOptions = {
  xAxis: {
    type: 'value',
    name: 'Flavanoids'
  },
  yAxis: {
    type: 'value',
    name: 'Ash'
  },
  series: [
    {
      type: 'line',
      data: wineData.map(dataPoint => [dataPoint.Flavanoids, dataPoint.Ash])
    }
  ]
};

const barChartOptions = {
  xAxis: {
    type: 'category',
    data: wineData.map(dataPoint => dataPoint.Alcohol),
    name: 'Alcohol'
  },
  yAxis: {
    type: 'value',
    name: 'Magnesium'
  },
  series: [
    {
      type: 'bar',
      data: wineData.map(dataPoint => dataPoint.Magnesium)
    }
  ]
};

function App() {
  return (
    <div style={{padding: "5px 10px"}}>
      <h1>Line Chart</h1>
      <ReactEcharts option={lineChartOptions} />
      <h1>Bar Chart</h1>
      <ReactEcharts option={barChartOptions} />
    </div>
  );
}

export default App;
