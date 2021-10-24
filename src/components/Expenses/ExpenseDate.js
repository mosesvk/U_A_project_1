import './ExpenseDate.scss'

const ExpenseDate = (props) => {
  const {date} = props

  var start = new Date(date);
  const month = start.toLocaleString('en-US', {month: 'long'})
  const day = start.toLocaleString('en-US', {day: '2-digit'})
  const year = start.getFullYear(date);

  return (
    <div id='expense-date'>
      <p className='expense-date__month'>{month}</p>
      <p className='expense-date__day'>{day}</p>
      <p className='expense-date__year'>{year}</p>
    </div>
  )
}

export default ExpenseDate;