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
import ProductDetails from "../pages/productsPage/ProductDetails/ProductDetails";
import ProductUpdate from "../pages/productsPage/productUpdate/ProductUpdate";
import Cart from "../pages/Cart/Cart";
import Offers from "../pages/Home/Offers/Offers";




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
            {
                path: '/cart',
                element: <PrivateRoutes><Cart></Cart></PrivateRoutes>,
                loader: () => fetch('https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//user')
            },
            {
                path: '/Offers',
                element: <PrivateRoutes><Offers></Offers></PrivateRoutes>,
                loader: () => fetch('https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product')
            },

            // product pages
            {
                path: '/samsung',   
                element: <PrivateRoutes><SamsungPage></SamsungPage></PrivateRoutes>,
                loader: () => fetch('https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product')
            },
            {
                path: '/samsung/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product/${params.id}`)
            },
            {
                path: '/update/samsung/:id',
                element: <PrivateRoutes><ProductUpdate></ProductUpdate></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product/${params.id}`)
            },
            {
                path: '/apple',
                element: <PrivateRoutes><ApplePage></ApplePage></PrivateRoutes>,
                loader: () => fetch('https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product')
            },
            {
                path: '/apple/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product/${params.id}`)
            },
            {
                path: '/update/apple/:id',
                element: <PrivateRoutes><ProductUpdate></ProductUpdate></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product/${params.id}`)
            },
            {
                path: '/asus',
                element: <PrivateRoutes><AsusPages></AsusPages></PrivateRoutes>,
                loader: () => fetch('https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product')
            },
            {
                path: 'asus/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product/${params.id}`)
            },
            {
                path: '/update/asus/:id',
                element: <PrivateRoutes><ProductUpdate></ProductUpdate></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product/${params.id}`)
            },
            {
                path: '/oppo',
                element: <PrivateRoutes><OppoPages></OppoPages></PrivateRoutes>,
                loader: () => fetch('https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product')
            },
            {
                path: '/oppo/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product/${params.id}`)
            },
            {
                path: '/update/oppo/:id',
                element: <PrivateRoutes><ProductUpdate></ProductUpdate></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product/${params.id}`)
            },
            {
                path: '/nokia',
                element: <PrivateRoutes><NokiaPages></NokiaPages></PrivateRoutes>,
                loader: () => fetch('https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product')
            },
            {
                path: '/nokia/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product/${params.id}`)
            },
            {
                path: '/update/nokia/:id',
                element: <PrivateRoutes><ProductUpdate></ProductUpdate></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product/${params.id}`)
            },
            {
                path: '/intel',
                element: <PrivateRoutes><IntelPages></IntelPages></PrivateRoutes>,
                loader: () => fetch('https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product')
            },
            {
                path: '/intel/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product/${params.id}`)
            },
            {
                path: '/update/intel/:id',
                element: <PrivateRoutes><ProductUpdate></ProductUpdate></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product/${params.id}`)
            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            },

        ]

    }
])

export default routes