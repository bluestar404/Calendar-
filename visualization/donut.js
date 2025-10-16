// =============================================================
// 🍩 Donut Chart Visualization (using ECharts)
// =============================================================
function renderDonutChart(data, subjectDisplayName) {
  const chartDom = document.getElementById("donutChart");
  if (!chartDom) return;

  const chart = echarts.init(chartDom);

  const chartData = data.map(item => ({
    name: item.topic,
    value: item.pyq
  }));

  const option = {
    title: {
      text: `${subjectDisplayName}`,
      left: "center",
      top: 10,
      textStyle: {
        color: "#ff6f61",
        fontSize: 18,
        fontWeight: "bold"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}<br/>PYQs: {c} ({d}%)"
    },
    series: [
      {
        name: "PYQs",
        type: "pie",
        radius: ["45%", "70%"], // 🍩 donut size
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center"
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold"
          }
        },
        labelLine: {
          show: false
        },
        data: chartData
      }
    ]
  };

  chart.setOption(option);
  window.addEventListener("resize", () => chart.resize());
}
