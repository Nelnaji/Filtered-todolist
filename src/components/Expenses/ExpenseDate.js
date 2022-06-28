function OutputExpenseDate({ depenseDate }) {
  const day = depenseDate.date.toLocaleDateString("en-US", { day: "numeric" });
  const month = depenseDate.date.toLocaleDateString("en-US", { month: "long" });
  const year = depenseDate.date.toLocaleDateString("en-US", {
    year: "numeric",
  });
  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default OutputExpenseDate;
