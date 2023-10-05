import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const {meal}=props;
    const navigate=useNavigate();
    const goToCategory=()=>{
        navigate(`/categories/${meal.strCategory}`)
    }
    return (
        <div onClick={goToCategory} className=' border-solid border-2 border-slate-600'>
            <img className=' w-80 h-auto' src={meal.strCategoryThumb} alt="" />
            <h1 className='text-4xl text-slate-600'>{meal.strCategory}</h1>
        </div>
    );
};

export default Card;