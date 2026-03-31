import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Detail from "../views/Detail";
import Home from "../views/Home";
import Error404 from "../views/Error404";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error404/>
    },
    {
        path:'/detail/:eventId',
        element: <Detail/>
    }
]);

const MyRoutes = () => {

return(
    <RouterProvider router={router}/>
)
};

export default MyRoutes;