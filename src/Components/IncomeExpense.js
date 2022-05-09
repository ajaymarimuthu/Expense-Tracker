  
import React from 'react'

const IncomeExpense = () => {
  return (

    <div>
     
      <ul id="list" className="list">
        <li>
          Cash <span>$400</span><button className="delete-btn">x</button>
        </li>
        <li>
          Additional Income <span>$400</span><button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
    
  )
}

export default IncomeExpense