import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {

  return (
    <div className="App">
      <NewExpense />
      <Expenses />
    </div>
  );
}

export default App;
