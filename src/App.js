import React, { useEffect, useReducer } from 'react'
import './App.css'
import axios from 'axios'
import { cartReducer } from './reducers/cartReducer'
import Products from './Components/Products'
import Cart from './Components/Cart'

function App() {
const [state,dispatch]=useReducer(cartReducer,{
    products:[],
    cart:[],
}) 
console.log(state);
const fetchproducts = async ()=>{
 const {data}=await axios.get("https://dummyjson.com/products");
 
 dispatch({
    type:"ADD_PRODUCTS",
    payload: data.products,
})

};



useEffect(()=>{
 fetchproducts();
},[]);


  return (
    <div style={{display:'flex'}}>
        <Products  state={state}  dispatch={dispatch} />
        <Cart  state={state}  dispatch={dispatch} />

    </div>
  )
}

export default App
