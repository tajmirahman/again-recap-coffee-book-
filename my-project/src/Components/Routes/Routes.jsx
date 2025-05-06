import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Error from "../Error/Error";
import Home from "../Home";
import Dashboard from "../pages/Dashboard";
import AllCoffee from "../pages/AllCoffee";
import CoffeeCard from "../CoffeeCard";
import CoffeeDetails from "../pages/CoffeeDetails";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('../categories.json'),
                children:[
                    {
                        path:'/',
                        element:<CoffeeCard></CoffeeCard>,
                        loader: ()=> fetch('../coffees.json'),
                    },
                    {
                        path:'/category/:category',
                        element:<CoffeeCard></CoffeeCard>,
                        loader: ()=> fetch('../coffees.json'),
                    }
                    
                ]
            },
            
            {
                path:'/coffee',
                element:<AllCoffee></AllCoffee>,
                loader: ()=> fetch('../coffees.json'),
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/coffee/:id',
                element:<CoffeeDetails></CoffeeDetails>,
                loader: ()=> fetch('../coffees.json'),
            }
        ]
    }
])

export default routes;