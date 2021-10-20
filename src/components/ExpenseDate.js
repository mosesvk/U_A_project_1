
const ExpenseDate = (props) => {
  const {date} = props

  const month = date.toLocaleString('en-US', {month: 'long'})
  const day = date.toLocaleString('en-US', {day: '2-digit'})
  const year = date.getFullYear();

  return (
    <div>
      <p>{month}</p>
      <p>{day}</p>
      <p>{year}</p>
    </div>
  )
}

export default ExpenseDate;