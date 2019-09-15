/* eslint-disable no-mixed-operators */
import React from "react";
import { Bar } from "react-chartjs-2";

const getRGBString = (rgb, a) =>
    "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + a + ")";

const getRandomRGB = () => {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = (num >> 8) & 255;
    var b = num & 255;

    return { r, g, b };
};

const options = {
    events: false,
    tooltips: {
        enabled: false
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    maxTicksLimit: 11
                }
            }
        ]
    },
    maintainAspectRatio: true,
    hover: {
        animationDuration: 0
    },
    animation: {
        duration: 500,
        easing: "easeOutQuart",
        onComplete: function() {
            var ctx = this.chart.ctx;
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";

            this.data.datasets.forEach(function(dataset) {
                for (var i = 0; i < dataset.data.length; i++) {
                    var model =
                            dataset._meta[Object.keys(dataset._meta)[0]].data[i]
                                ._model,
                        scale_max =
                            dataset._meta[Object.keys(dataset._meta)[0]].data[i]
                                ._yScale.maxHeight;
                    ctx.fillStyle = "#444";
                    var y_pos = model.y - 10;
                    // Make sure data value does not get overflown and hidden
                    // when the bar's value is too close to max value of scale
                    // Note: The y value is reverse, it counts from top down
                    if ((scale_max - model.y) / scale_max >= 0.85)
                        y_pos = model.y + 20;
                    ctx.fillText(dataset.data[i], model.x, y_pos);
                }
            });
        }
    }
};

class Chart extends React.PureComponent {
    render() {
        const { chartData } = this.props;

        if (!chartData || Object.keys(chartData) < 1) return null;

        const chartObj = {
            datasets: Object.keys(chartData).map(k => {
                const randomColor = getRandomRGB();

                return {
                    label: k,
                    backgroundColor: getRGBString(randomColor, 0.2),
                    borderColor: getRGBString(randomColor, 1),
                    borderWidth: 1,
                    hoverBackgroundColor: getRGBString(randomColor, 0.4),
                    hoverBorderColor: getRGBString(randomColor, 1),
                    data: [chartData[k]]
                };
            })
        };

        return <Bar data={chartObj} options={options} />;
    }
}

export default Chart;
