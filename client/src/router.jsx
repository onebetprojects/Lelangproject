import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./page/HomePage";

const router = createBrowserRouter([
    {
        
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            }
        ]
        
    }
])

export default router