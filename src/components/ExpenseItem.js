import "./ExpenseItem.css";
import OutputExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <OutputExpenseDate date={props.date} />
      <div className="expense-item__card">
        <h2 className="expense-item__description">{props.title}</h2>
        <span className="expense-item__price">{props.price} €</span>
      </div>
    </div>
  );
}

export default ExpenseItem;
