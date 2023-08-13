import React, { useState } from "react";
import "./App.css";
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 'e1', title: "Car Insurance", amount: 259.5, date: new Date(2023, 4, 24) },
  { id: 'e2', title: "Books", amount: 140.7, date: new Date(2022, 1, 9) },
  { id: 'e3', title: "Food", amount: 29.5, date: new Date(2023, 9, 14) },
  { id: 'e4', title: "Clothes", amount: 129.5, date: new Date(2023, 9, 14) },
];

const App = () => {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler=(expense)=>{
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses];
    });
  };

  return (
    <div>
      {/* <div className="First">Hello</div> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  // --> Alternative return code of above code in JSX:
  // Syntax: return React.createElement(element_tag, {Object_that_specifies_the_attributes}, content_inside_tag);
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('div',{className: 'First'},'Hello'),
  //   React.createElement(Expenses,{item: expenses})
  // );
}

export default App;
