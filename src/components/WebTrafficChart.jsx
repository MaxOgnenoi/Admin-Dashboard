import React, { useEffect } from "react";
import * as echarts from "echarts";

function WebTrafficChart() {
  useEffect(() => {
    echarts.init(document.querySelector("#trafficChart")).setOption({
      tooltop: "item",
    });
  });
  return <div></div>;
}

export default WebTrafficChart;
