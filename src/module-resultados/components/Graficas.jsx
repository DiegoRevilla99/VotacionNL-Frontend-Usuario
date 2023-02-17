import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRef } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Graficas({ titulo, resultados, etiquetas, img }) {
  const navigate = useNavigate();
  let location = useLocation();
  const theme = useTheme();
  const xssize = useMediaQuery(theme.breakpoints.only("xs"));
  const smsize = useMediaQuery(theme.breakpoints.only("sm"));
  const mdsize = useMediaQuery(theme.breakpoints.only("md"));
  const lgsize = useMediaQuery(theme.breakpoints.only("lg"));

  const options = {
    indexAxis: "x",
    maintainAspectRatio: false,
    responsive: false,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },

    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "",
      },
      tooltip: {
        filter: function (tooltipItem) {
          // console.log("TOOLTIPITEM", tooltipItem);
          return tooltipItem.datasetIndex === 0;
        },
        usePointStyle: true,
        callbacks: {
          labelPointStyle: (context) => {
            // console.log(context);
            // console.log("Imagen", context.dataset.image[context.dataIndex]);
            if (img.length > 0) {
              const image = new Image(15, 15);
              image.src = context.dataset.image[context.dataIndex];
              return {
                pointStyle: image,
              };
            }
          },
          beforeTitle: (context) => {
            return context[0].dataset.labels[context[0].dataIndex];
          },
        },
      },
    },
  };

  const [data, setData] = useState({
    // labels: chartData.map((data) => data.nombre),
    labels: etiquetas.map((data) => "                   " + data + ""),
    datasets: [
      {
        label: "Votos",
        data: resultados.map((data) => data),
        backgroundColor: ["#D6B1F7"],
        color: ["#fff"],
        image: img,
        labels: etiquetas.map((data) => ""),
      },
    ],
  });

  const imageItems = {
    id: "imageItems",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        options,
        data,
        scales: { x, y },
      } = chart;
      ctx.save();
      const imageSize = options.layout.padding.bottom;
      data.datasets[0].image.forEach((imageLink, index) => {
        const logo = new Image();
        logo.src = imageLink;
        ctx.drawImage(
          logo,
          // x.getPixelForValue(0) - 40,
          // y.getPixelForValue(index) - 40,
          x.getPixelForValue(index) - 40 / 2,
          y.getPixelForValue(0) + 5,
          25,
          25
        );
      });
    },
  };
  return (
    <Bar
      className="canvas-continer"
      width={
        xssize
          ? "300px"
          : smsize
          ? "550px"
          : mdsize
          ? "750px"
          : lgsize
          ? "1100px"
          : "1100px"
      }
      height={600}
      plugins={[ChartDataLabels, imageItems]}
      options={options}
      data={data}
    />
  );
}
