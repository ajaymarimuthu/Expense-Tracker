import React , { createContext , useReducer } from "react";
import AppReducer from "./AppReducer";
// step:1==> we need to decalre all the state here   

const initialState={
    transactions:[
        {id:1, text:'flower', amount:-20},
        {id:2, text:'Salary', amount:300},
        {id:3, text:'Book', amount:-10},
        {id:4, text:'Camera', amount:150}

    ]
}

// step 2: create a context for the app znd export it from here

export const GlobalContext = createContext(initialState)


// step 3: create a provider component and receive props in it and export it from here   and use usereducer hook ... (Hoc) <GlobalProvider>children</GlobalProvider>   

export const GlobalProvider = ({children}) =>{
    const[state,dispatch]=useReducer(AppReducer,initialState)

    // step 4 : we should define our actions

    return(
        <GlobalContext.Provider  value={{
            transactions:state.transactions
        }}>{children}</GlobalContext.Provider>
    )
}

//   value is just a Javascript object. we need to pass a value to it. that value is come from state hook const [state,dispatch] . 
//   Hence we pass our state transcations to it. By giving a name as "transactions" (like props)

//   transactions:state.transactions 




