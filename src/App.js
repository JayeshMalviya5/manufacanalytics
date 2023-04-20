import React from "react";
import ReactEcharts from "echarts-for-react";
import { filterData } from "./WindDataSet";
// filtred data

const BarGraphArray = Object.values(filterData.reduce((acc, obj) => {
  if (!acc[obj.Alcohol] || obj.Magnesium < acc[obj.Alcohol].Magnesium) {
    acc[obj.Alcohol] = {Alcohol: obj.Alcohol, Magnesium: obj.Magnesium};
  }
  return acc;
}, {}));

const lineChartOptions = {
  xAxis: {
    type: "value",
    name: "Flavanoids",
  },
  yAxis: {
    type: "value",
    name: "Ash",
  },
  series: [
    {
      type: "line",
      data: filterData.map((dataPoint) => [dataPoint.Flavanoids, dataPoint.Ash]),
    },
  ],
};

const barChartOptions = {
  xAxis: {
    type: "category",
    data: BarGraphArray.map((dataPoint) => dataPoint.Alcohol),
    name: "Alcohol",
  },
  yAxis: {
    type: "value",
    name: "Magnesium",
  },
  series: [
    {
      type: "bar",
      data: BarGraphArray.map((dataPoint) => dataPoint.Magnesium),
    },
  ],
};

function App() {
  return (
    //  implementing graph
    <div style={{ padding: "5px 10px" }}>
      <h1>Line Chart</h1>
      <ReactEcharts option={lineChartOptions} />
      <h1>Bar Chart</h1>
      <ReactEcharts option={barChartOptions} />
    </div>
  );
}

export default App;
