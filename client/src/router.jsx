import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import LandingPage from "./page/Landingpage";
import MainPage from "./page/MainPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />

    },
    {
        path:'/landingpage',
        element: <LandingPage />
    },
    {
        path:'/testing',
        element: <MainPage />
    }
])

export default router