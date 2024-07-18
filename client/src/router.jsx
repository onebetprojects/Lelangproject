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
        loader(){
            if (!localStorage.getItem('username')) {
                return redirect('/')
            }
            return null
        },
        children: [
            {
                path:'/list',
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