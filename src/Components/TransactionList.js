import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
    const{transactions} = useContext(GlobalContext)   
    // The Name "transactions"  in above line should be same as in Globalstate . we declare it as "transactions" in value  
 //   console.log(transactions);
  return (
    <div>
        <h3>History</h3>
        <ul id="list" className="list">
            {transactions.map( transaction => (<Transaction key={transaction.id} transaction={transaction} />) )}
        </ul>
    </div>     
  )
}

export default TransactionList

// useContext is used to extract the value from the GlobalContext 