import './ExpenseItem.css'

const ExpenseItem = (props) => {

  const {title, amount, date} = props

  return (
    <div className='expense-item'>
      <div>{date.toISOString()}</div>
      <div className='expense-item_description'>
        <h2>{title}</h2>
        <div className='expense-item_price'>${amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;