import React, { useState } from "react";
import "./expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter.js";
import ExpensesList from "./ExpensesList";

function Expenses({ depense }) {
  const [selectedYear, setSelectedYear] = useState("2021");
  const filterDate = depense.filter(
    (item) =>
      item.date.toLocaleDateString("en-US", {
        year: "numeric",
      }) === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSaveExpenseFilter={setSelectedYear}
      />
      <ExpensesList dataForExpensesList={filterDate} />
    </Card>
  );
}

export default Expenses;
