import React from 'react';

const MealCard = (props) => {
    const {strMealThumb,strMeal}=props.meal;
    return (
        <div>
            <img className=' w-80 h-auto' src={strMealThumb} alt="" />
            <h1>{strMeal}</h1>
        </div>
    );
};

export default MealCard;