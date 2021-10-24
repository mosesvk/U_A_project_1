import {useState} from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.scss'

const Expenses = (props) => {
  const {expenses} = props;
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <Card className='expenses'> 

      <ExpenseFilter 
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
        />

      {
        props.expenses.map((expense) => (
          <ExpenseItem 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }

    </Card>
  )
}

export default Expenses;