import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Applayout } from "../Layout/AppLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/projects",
                element: <Projects/>
            }
        ]
    },
    
]);

