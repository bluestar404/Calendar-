// =============================================================
// 🌳 Tree Map Visualization (using ECharts)
// =============================================================
function renderTreeMap(data, subjectDisplayName) {
  const chartDom = document.getElementById("treeChart");
  if (!chartDom) return;

  const chart = echarts.init(chartDom);

  const treeData = [
    {
      name: subjectDisplayName,
      children: data.map(item => ({
        name: item.topic,
        value: item.pyq
      }))
    }
  ];

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
      formatter: (info) =>
        `${info.name}<br/>PYQs: ${info.value}`
    },
    series: [
      {
        type: "treemap",
        roam: false, // 🚫 no zoom/pan
        nodeClick: false,
        data: treeData,
        breadcrumb: { show: false },
        label: {
          show: true,
          formatter: "{b}",
          fontSize: 12
        },
        itemStyle: {
          borderColor: "#fff"
        }
      }
    ]
  };

  chart.setOption(option);
  window.addEventListener("resize", () => chart.resize());
}
