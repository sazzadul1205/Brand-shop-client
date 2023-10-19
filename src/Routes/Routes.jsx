import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../Auth/Login/Login"
import SignUp from "../Auth/SignUp/SignUp";
import AddProducts from "../pages/AddProducts/AddProducts";
import News from "../pages/News/News";
import PrivateRoutes from "./PrivateRoutes";
import PageNotFound from "../PageNotFound/PageNotFound";
import SamsungPage from "../pages/productsPage/SamsungPage/SamsungPage";




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
                element: <PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
            },
            {
                path: '/news',
                element: <PrivateRoutes><News></News></PrivateRoutes>
            },
            // product pages
            {
                path: '/samsung',
                element: <PrivateRoutes><SamsungPage></SamsungPage></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/product/samsung')
            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            },
            
        ]

    }
]) 

export default routes