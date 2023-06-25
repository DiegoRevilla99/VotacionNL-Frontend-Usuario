import React, { useEffect, useRef, useState } from "react";
import { Bar, Chart } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useParams } from "react-router-dom";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
const patronURL = /^(ftp|http|https):\/\/[^ "]+$/;
export const ChartJFormales = ({ candidatos = [], totalV = 1 }) => {
  const total = 50;
  const chartRef = useRef(null);
  const params = useParams();
  const [result, setresult] = useState(candidatos);
  const [totalS, setTotalS] = useState(totalV);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    setresult(candidatos);
  }, [candidatos]);

  useEffect(() => {
    setTotalS(totalV);
  }, [totalV]);

  const [data, setData] = useState(() => {
    try {
      return {
        labels: result.map((data) => {
          let nl = data.nombre.split(" ");
          return nl;
        }),
        datasets: [
          {
            label: "Votos",
            data: result.map((data) => data.candidad),
            backgroundColor: [
              "#8B3232",
              "#8B5232",
              "#8B7D32",
              "#598B32",
              "#328B70",
              "#32768B",
              "#32468B",
              "#59328B",
              "#89328B",
              "#8B3252",
            ],

            image: result.map((data) => {
              const imgs = data.partidos.map((part) => part.logo || "none");

              return imgs;
            }),

            /* labels: result.map((data) => {
              let nl = data.nombre.split(" ");
              return nl;
            }), */
          },
          {
            label: "Votos",

            data: result.map((data) => totalS),
            backgroundColor: ["#ededed"],
            grouped: false,
            order: 1,
            hoverBackgroundColor: "#ededed",
          },
        ],
      };
    } catch (error) {
      console.error("Error al inicializar el estado 'data':", error);
      return null;
    }
  });

  /* useEffect(() => {
    console.log("data", data);
    setImageItems({
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
          try {
            // Dentro del useEffect:
            imageLink.forEach((imagen, index2) => {
              const logo = new Image();
              logo.onload = () => {
                ctx.drawImage(
                  logo,
                  x.getPixelForValue(index) -
                    90 +
                    (75 /
                      (imageLink.length === 1
                        ? 1
                        : imageLink.length === 2
                        ? 1.5
                        : imageLink.length === 3
                        ? 2
                        : imageLink.length === 4
                        ? 2.5
                        : imageLink.length === 5
                        ? 3
                        : 1)) *
                      (index2 + 1),
                  y.getPixelForValue(0) + 100,
                  30,
                  30
                );
              };
              logo.onerror = () => {
                console.error("Error al cargar la imagen:", imagen);
              };
              logo.src = imagen;
            });
          } catch (error) {
            console.log("errorPPPPP", error);
          }
        });
      },
    });
  }, [data]);
 */
  const [imageItems, setImageItems] = useState({
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
        imageLink.forEach((imagen, index2) => {
          const logo = new Image();
          logo.onload = () => {
            try {
              ctx.drawImage(
                logo,
                x.getPixelForValue(index) -
                  90 +
                  (75 /
                    (imageLink.length === 1
                      ? 1
                      : imageLink.length === 2
                      ? 1.9
                      : imageLink.length === 3
                      ? 2.5
                      : imageLink.length === 4
                      ? 2.5
                      : imageLink.length === 5
                      ? 3
                      : 1)) *
                    (index2 + 1),
                y.getPixelForValue(0) + 100,
                30,
                30
              );
            } catch (error) {
              console.error("Error al dibujar la imagen:", error);
            }
          };
          logo.onerror = () => {
            console.error("Error al cargar la imagen:", imagen);
            logo.src = "";
          };
          logo.src = imagen;
        });
      });
    },
  });

  /*  useEffect(() => {
    console.log("REF", chartRef);
    console.log("data_", data);
    console.log("array", [ChartDataLabels, imageItems]);
  }, []); */

  try {
    return (
      <>
        <Chart
          type="bar"
          height={500}
          ref={chartRef}
          data={data}
          plugins={[ChartDataLabels, imageItems]}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            layout: {
              padding: {
                bottom: 80,
              },
            },

            interaction: {
              intersect: false,
              mode: "index",
            },
            indexAxis: "x",

            plugins: {
              title: {
                display: true,
                padding: {
                  top: 10,
                  bottom: 30,
                },
                text: "Porcentaje de votos",
              },
              tooltip: {
                filter: function (tooltipItem) {
                  // console.log("TOOLTIPITEM", tooltipItem);
                  return tooltipItem.datasetIndex === 0;
                },
                /* usePointStyle: true,
                callbacks: {
                  labelPointStyle: (context) => {
                    // console.log(context);
                    // console.log("Imagen", context.dataset.image[context.dataIndex]);
                    const image = new Image(15, 15);
                    image.src = context.dataset.image[context.dataIndex];
                    return {
                      pointStyle: image,
                    };
                  },
                  beforeTitle: (context) => {
                    if (context[0].dataset.labels) {
                      return context[0].dataset.labels[context[0].dataIndex];
                    }
                    return ""; // Handle the case when dataset.labels is undefined
                  },
                }, */
              },
              legend: {
                display: false,
              },
              datalabels: {
                display: function (data) {
                  return data.datasetIndex === 0;
                },
                labels: {
                  // events: ["mousemove"],
                  title: {
                    display: function (data) {
                      return data.datasetIndex === 0;
                    },
                    formatter: function (value, context) {
                      return value + "\nvotos";
                    },
                    textAlign: "center",
                    color: "white",
                  },
                  value: {
                    // display: function (data) {
                    // 	return data.datasetIndex === 0;
                    // },
                    formatter: function (value, context) {
                      return totalS == 0
                        ? 0
                        : ((value * 100) / totalS).toFixed(2) + "%";
                    },
                    anchor: "end",
                    align: "top",
                    color: "black",
                  },
                },
              },
            },

            aspectRatio: 3,
            scales: {
              y: {
                grid: {
                  display: false,
                },
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
          }}
        />
      </>
    );
  } catch (error) {
    console.log("ERROR", error);
    return (
      <div>Error al cargar la gráfica. Por favor, inténtalo nuevamente.</div>
    );
  }
};
