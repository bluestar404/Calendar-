// =============================================================
// 🌳 Tree Map Visualization (using ApexCharts, multi-colored)
// =============================================================

// Make sure you include this in your HTML head before this file:
// <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

function renderTreeMap(data, subjectDisplayName) {
  const chartDom = document.getElementById("treeChart");
  if (!chartDom) return;

  // ✅ Clear previous chart if any
  chartDom.innerHTML = "";

  const options = {
    chart: {
      type: "treemap",
      height: 500,
      toolbar: { show: false },
    },
    title: {
      text: `${subjectDisplayName} — PYQ Topic Tree`,
      align: "center",
      style: {
        color: "#ff6f61",
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: "Poppins, sans-serif",
      },
    },
    legend: { show: false },
    series: [
      {
        data: data.map(item => ({
          x: item.topic,
          y: item.pyq,
        })),
      },
    ],
    // 🎨 Multi-colored palette with soft coral tones
    colors: [
      "#ff6f61",
      "#ff9671",
      "#ffc75f",
      "#f9f871",
      "#9ad0ec",
      "#845ec2",
      "#00c9a7",
      "#f78fb3"
    ],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
        fontFamily: "Poppins, sans-serif",
        colors: ["#fff"],
      },
      formatter: function (text, opts) {
        const value = opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex];
        return `${text}\n(${value})`;
      },
    },
    plotOptions: {
      treemap: {
        distributed: true, // 🌈 Multi-color boxes
        enableShades: true,
        shadeIntensity: 0.15,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val} PYQs`;
        },
      },
      style: {
        fontSize: "13px",
        fontFamily: "Poppins, sans-serif",
      },
    },
  };

  const chart = new ApexCharts(chartDom, options);
  chart.render();
}
