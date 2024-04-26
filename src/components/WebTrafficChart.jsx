import React, { useEffect } from "react";
import * as echarts from "echarts";

function WebTrafficChart() {
  useEffect(() => {
    echarts.init(document.querySelector("#trafficChart")).setOption({
      tooltop: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "canter",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLavelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
        },
      ],
    });
  });
  return <div></div>;
}

export default WebTrafficChart;
