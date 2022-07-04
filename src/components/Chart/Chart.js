import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <section className="chart">
      {/* nous utiliseront un array, avec une method map. en gros nous allons maper l'array passer en prop. et pour chaque element nous lanceront une fonction qui vas créee un element ChartBar : */}
      {dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </section>
  );
};

export default Chart;
