import React from "react";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";

// import pages
import Dashboard, {budgetAction} from "../pages/Dashboard";
import Budget from "../pages/Budget";

// import Layouts
import LayoutRoot from "./LayoutRoot";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<LayoutRoot />}>
            <Route 
                path="dashboard" 
                element={<Dashboard />} 
                action={budgetAction}>

                    {/*  To Create a dynamic budget category Route  */}
            </Route>
            <Route path="budget" element={<Budget />} />
        </Route>
    )
)

const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Router;