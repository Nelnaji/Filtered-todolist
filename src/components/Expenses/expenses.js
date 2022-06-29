import React, { useState } from "react";
import "./expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter.js";

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

      {filterDate.map((individualDepense) => {
        return (
          <ExpenseItem
            key={individualDepense.id}
            depenseItem={individualDepense}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
