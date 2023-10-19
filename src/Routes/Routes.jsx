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
import ApplePage from "../pages/productsPage/ApplePage/ApplePage";
import AsusPages from "../pages/productsPage/AusuPage/AsusPages";
import OppoPages from "../pages/productsPage/OppoPage/OppoPages";
import NokiaPages from "../pages/productsPage/NokiaPage/NokiaPages";
import IntelPages from "../pages/productsPage/IntelPage/IntelPages";
import ProductDetails from "../pages/ProductDetails/ProductDetails";




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
                path: '/samsung/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/product/samsung/${params.id}`)
            },
            {
                path: '/apple',
                element: <PrivateRoutes><ApplePage></ApplePage></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/product/apple')
            },
            {
                path: '/apple/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/product/apple/${params.id}`)
            },
            {
                path: '/asus',
                element: <PrivateRoutes><AsusPages></AsusPages></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/product/asus')
            },
            {
                path: 'asus/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/product/asus/${params.id}`)
            },
            {
                path: '/oppo',
                element: <PrivateRoutes><OppoPages></OppoPages></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/product/oppo')
            },
            {
                path: '/oppo/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/product/oppo/${params.id}`)
            },
            {
                path: '/nokia',
                element: <PrivateRoutes><NokiaPages></NokiaPages></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/product/nokia')
            },
            {
                path: '/nokia/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/product/nokia/${params.id}`)
            },
            {
                path: '/intel',
                element: <PrivateRoutes><IntelPages></IntelPages></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/product/intel')
            },
            {
                path: '/intel/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/product/intel/${params.id}`)
            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            },
            
        ]

    }
]) 

export default routes