import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import MealCard from '../MealCard/MealCard';

const Meals = () => {
    const data=useLoaderData();
    const meals = data.meals
    console.log(meals)
    const navigate=useNavigate();
    const goBack=()=>{
        navigate(-1);
    }
    return (
        <div>
            <button className='px-3 py-2 bg-slate-600 text-white rounded-lg' onClick={goBack}>Go Back</button>
            <div className='grid grid-cols-4 gap-4 mt-8'>
                {
                    meals.map(meal=> <MealCard key={meal.idMeal} meal={meal}></MealCard> )
                }
            </div>
        </div>
    );
};

export default Meals;