import React, { useState } from 'react';

const FoodItem = (props) => {
    const [qty, setQty] = useState(props.quantity) ; 

    const Qtyhandler = (amnt) => {
        setQty(qty+1) ;
        props.incrFun();
        props.amtFun(amnt);
    }

    const Qtyhandler1 = (amnt) => {
        if(qty === 0) return
        setQty(qty-1) ;
        props.decrFun();
        props.amtFun1(amnt);
    }

    return(
        <h3> {props.title} {"@ Rs."}  {props.amount}  {", "}
            Quantity = {qty} {"  "} 
            <button onClick={() => Qtyhandler1(props.amount)}> - </button> {"  "}
            <button onClick={() => Qtyhandler(props.amount)}> + </button>
            {",  Amount = "} {qty*props.amount} </h3>
    );
}

export default FoodItem ;