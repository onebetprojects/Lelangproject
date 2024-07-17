import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./page/HomePage";
import LandingPage from "./page/Landingpage";
import MainPage from "./page/MainPage";
import ListProduct from "./page/LitsProduct";

const router = createBrowserRouter([
    {
        path:'/',
        element: <LandingPage />
    },
    {
        path:'/testing',
        element: <MainPage />
    },
    {   
        element: <MainLayout />,
        children: [
            {
                path:'/List',
                element:<ListProduct />
            },
            {
                path: '/home',
                element: <HomePage />
            }
        ]
        
    }
])

export default router