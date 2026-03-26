import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Detail from "../views/Detail";
import Home from "../views/Home";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path:'/detail',
        element: <Detail/>
    }
]);

const MyRoutes = () => {

return(
    <RouterProvider router={router}/>
)
};

export default MyRoutes;