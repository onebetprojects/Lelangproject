import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />
        
    }
])

export default router