import Chart from "../Chart/Chart";

const ExpensesChart = ({ expenses }) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Fev", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Avr", value: 0 },
    { label: "Mai", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aou", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth(); //starting at 0 and january is also starting at 0 in the chartDataPoints,

    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};
export default ExpensesChart;
