import React, { useState } from 'react';
import Home from './components/Home';

function App() {


const foods = [
  {
     id : 0 ,
     title : 'Pizza' ,
     amount : 15,
     quantity:0 
  },
  {
    id : 1 ,
    title : 'Burger' ,
    amount : 10,
    quantity:0 
 },
 {
  id : 3 ,
  title : 'Sandwich' ,
  amount : 5 ,
  quantity:0
},
{
  id : 4 ,
  title : 'Dosa' ,
  amount : 25,
  quantity:0 
}, 
]

  const [cnt, setCnt] = useState(0); 
  const [amt, setAmt] = useState(0) ;

  const increaseCntHandler = () => {
    setCnt(cnt+1); 
  };

  const decreaseCntHandler = () => { 
    setCnt(cnt-1); 
  };

  const incrAmtHandler = (event) => { 
    setAmt(amt+event); 
  };

  const decrAmtHandler = (event) => { 
    setAmt(amt-event); 
  };

  return (
    <div>
      <h1> Total Count = {cnt} {"  "} Total Amount = {amt} </h1> 
      <Home foods={foods} incrFun={increaseCntHandler} decrFun={decreaseCntHandler} 
      amtFun={incrAmtHandler} amtFun1={decrAmtHandler} /> 
    </div>
  );
}

export default App;
