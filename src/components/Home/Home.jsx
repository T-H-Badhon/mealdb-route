import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Home = () => {
    const data=useLoaderData();
    const meals=data.categories;
    return (
        <div>
            <div>
                <h1 className=' text-7xl text-slate-600'>HI, What's you?</h1>
            </div>   
            <div className='grid grid-cols-4 gap-4 mt-8'>
                {
                    meals.map(meal=> <Card key={meal.idCategory} meal={meal}></Card>)
                }
             </div>
        </div>
    );
};

export default Home;