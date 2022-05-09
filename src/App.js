import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
// import IncomeExpense from './Components/IncomeExpense';
// import Transaction from './Components/Transaction';
import AddTransaction from './Components/AddTranscation';
import TransactionList from './Components/TransactionList';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (

    <GlobalProvider>
       <div >
         <Header title="Expense Tracker"/>
         <Balance />
         {/* <IncomeExpense/> */}
         <TransactionList/>
         {/* <Transaction/> */}
         <AddTransaction/>
      
       </div>
    </GlobalProvider>
   
  );
}

export default App;
