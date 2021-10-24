import {useState} from 'react'
import './ExpenseItem.scss'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
  const {title, amount, date} = props
  const [dateTitle, setDateTitle] = useState(title)
  
  const clickHandler = () => {
    setDateTitle('Updated!')
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date}/>
      <div className='expense-item__description'>
        <h2>{dateTitle}</h2>
        <div 
          className='expense-item__price'
        >
          ${amount}
        </div>
        <button
          onClick={clickHandler}
        >Change Title</button>
      </div>
    </Card>
  )
}

export default ExpenseItem;