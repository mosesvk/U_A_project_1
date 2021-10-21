import {useState} from 'react'
import './ExpenseForm.scss'

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandler = (event) => {

  }

  return (
    <div className='new-expense__controls'>
      <div
        className='new-expense__control'
      >
        <label>Type</label>
        <input type='text' onChange={titleChangeHandler}/>
      </div>

      <div
        className='new-expense__control'
      >
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' />
      </div>

      <div
        className='new-expense__control'
      >
        <label>Date</label>
        <input type='date' min='2019-01-01' max='2022-12-31'
        />
      </div>

      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </div>
  )
}

export default ExpenseForm;