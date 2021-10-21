
import ExpenseForm from './ExpenseForm'
import './NewExpense.scss'

const NewExpense = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    console.log(expenseData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler} 
        
      />
    </div> 
  )
}

export default NewExpense
