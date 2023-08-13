import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle,setEnteredTitle]=useState('');
  const [enteredAmount,setEnteredAmount]=useState('');
  const [enteredDate,setEnteredDate]=useState('');
  
  // Alternative approach:
  // const [userInput,setUserInput]=useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })

    // This approach is safer than prev one, 
    // Because React schedules state updates, it doesn't perform them instantly.
    // So if you schedule lot of state updates at the same time, you could be depending on an outdated or incorrect state snapshot (if you use prev approach).
    // If you use this approach, React will guarantee that the state snapshot it gives you here will always be the latest state snapshot.
    // setUserInput((prevState)=>{
    //   return {...prevState, enteredTitle: event.target.value};
    // })
  };
  const amountChangeHandler=(event)=>{
    setEnteredAmount(event.target.value);
    
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })
  };
  const dateChangeHandler=(event)=>{
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    console.log(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
          </div>
        </div>
        <div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
