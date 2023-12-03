import React from 'react';
import { Link, Outlet } from "react-router-dom";

const LayoutRoot = () => {
    return ( 
        <header>
            <h2>Layout Root</h2>

            <Outlet />
        </header>
        
     );
}
 
export default LayoutRoot;