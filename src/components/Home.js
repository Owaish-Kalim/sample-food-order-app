// import React, { useState } from 'react';
import FoodItem from './FoodItem'

const Home = (props) => {
    return (
       props.foods.map((food)=>
            <FoodItem incrFun={props.incrFun} decrFun={props.decrFun} amtFun={props.amtFun}
            amtFun1={props.amtFun1} title={food.title} amount={food.amount} quantity={food.quantity} /> 
       )
    );
}

export default Home ;