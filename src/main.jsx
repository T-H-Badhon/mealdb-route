import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Meals from './components/Meals/Meals.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header> ,
    children: [
      {
        path: '/',
        element: <Home></Home> ,
        loader: ()=>fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      },
      {
        path: 'restuarents',
        element: <h1>this is restuarent</h1>,
        // loader: 
      },
      {
        path: 'category',
        element: <h1>this is category</h1>,
        // loader: 
      },
      {
        path: 'login',
        element: <h1>this is login</h1> ,
        // loader: 
      },
      {
        path:'categories/:category',
        element: <Meals></Meals> ,
        loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
