import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../Auth/Login/Login"
import SignUp from "../Auth/SignUp/SignUp";
import AddProducts from "../pages/AddProducts/AddProducts";
import News from "../pages/News/News";




const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>,
            },
            {
                path: '/addProducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/news',
                element: <News></News>
            },
        ]

    }
]) 

export default routes