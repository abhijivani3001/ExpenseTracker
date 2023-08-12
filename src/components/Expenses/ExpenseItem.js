import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let [newTitle, setTitle] = useState(props.title);

  const clickHandler = () => {
    // console.log(newTitle);
    setTitle('Updated');
  };

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">${props.amt}</div>
      </div>
      <button style={{ margin: "5px" }} onClick={clickHandler}>
        Click Me
      </button>
    </Card>
  );
};
export default ExpenseItem;
