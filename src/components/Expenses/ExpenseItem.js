import React, { useState } from "react";
import "./ExpenseItem.css";
import OutputExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({ depenseItem }) {
  const [title, setTitle] = useState(depenseItem.title);

  const titleChange = () => {
    setTitle("changed");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <OutputExpenseDate depenseDate={depenseItem} />
      <div className="expense-item__card">
        <h2 className="expense-item__description">{title}</h2>
        <span className="expense-item__price">{depenseItem.amount}€</span>
      </div>
      <button onClick={titleChange}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
