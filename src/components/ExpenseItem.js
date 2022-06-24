import "./ExpenseItem.css";
import OutputExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <OutputExpenseDate />
      <div className="expense-item__card">
        <h2 className="expense-item__description"></h2>
        <span className="expense-item__price">€</span>
      </div>
    </div>
  );
}

export default ExpenseItem;
