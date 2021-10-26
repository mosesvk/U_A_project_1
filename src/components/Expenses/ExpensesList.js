import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.scss'

const ExpensesList = (props) => {
  const {filteredExpenses} = props

  // Reusable variable to input into the component...
  let expensesContent = <p>No Expenses Found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      
    </div>
  )
}

export default ExpensesList
