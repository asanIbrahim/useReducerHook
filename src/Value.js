import React, { useReducer } from 'react'

function initialState(state,action){
 switch(action.type){
    case "increment":
    return { count: state.count+1}
 
  case "decrement":
  if(state.count > 0){
    return {count:state.count-1}
  }
  return state 
  default :
   return state
}
}

const Value = () => {
const [state,dispatch] = useReducer(initialState,{count:0})
function increment(){
    return dispatch({type:"increment"})
}

function decrement(){
    return dispatch({type:"decrement"})
}
  return (
    <>
     <div>{state.count}</div>
     <button onClick={increment}>+</button>
     <button onClick = {decrement}>-</button>
     <button>*</button>
    </>
   
  )
}

export default Value