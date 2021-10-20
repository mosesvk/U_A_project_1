import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const {title, amount, date} = props

  const month = date.toLocaleString('en-US', {month: 'long'})
  const day = date.toLocaleString('en-US', {day: '2-digit'})
  const year = date.getFullYear();

  return (
    <div className='expense-item'>
      <div className>
        <p>{month}</p>
        <p>{day}</p>
        <p>{year}</p>
      </div>
      <div>{date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;