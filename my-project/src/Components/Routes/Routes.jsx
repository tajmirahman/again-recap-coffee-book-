import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Error from "../Error/Error";
import Home from "../Home";
import Dashboard from "../pages/Dashboard";
import AllCoffee from "../pages/AllCoffee";
import CoffeeCard from "../CoffeeCard";


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
                element:<AllCoffee></AllCoffee>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            }
        ]
    }
])

export default routes;