import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Cart = () => {
    const loadedProduct = useLoaderData();
    const [products, setProducts] = useState(loadedProduct);
    const [allProducts, setAllProducts] = useState([]);
    const { user } = useContext(AuthContext);

    const userProducts = products.filter((product) => product.email === user.email);
    console.log(user.email);

    useEffect(() => {
        fetch('https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product')
            .then(res => res.json())
            .then(data => setAllProducts(data))
            .catch(error => console.log(error));
    }, []);

    if (userProducts.length > 0 && allProducts.length > 0) {
        const matchedProducts = userProducts.map((product) =>
            allProducts.find((p) => product.updatedProduct.includes(p._id))
        );
        console.log(matchedProducts);
    }

    return (
        <div>
            <h1 className="text-white text-5xl text-center">-- My Cart -- </h1>
            <div className="mx-10">
                {userProducts.map((product, index) => (
                    <div className="my-5" key={index}>
                        {allProducts
                            .filter((p) => product.updatedProduct.includes(p._id))
                            .map((matchedProduct, idx) => (
                                <div className="flex flex-col md:flex-row gap-10 my-5 bg-green-700 p-5" key={idx}>
                                    <img src={matchedProduct.photo} alt={matchedProduct.name} />
                                    <div className="my-auto">
                                        <p className="text-blue-700 p-1 text-2xl font-bold"> {matchedProduct.brand}</p>
                                        <p className="text-white text-2xl md:text-3xl">Product Name: {matchedProduct.name}</p>
                                        <p className="text-white text-xl md:text-2xl">Product Price: $ {matchedProduct.price}</p>

                                    </div>
                                </div>
                            ))}
                    </div>
                ))}
            </div>
            <div>

            </div>
        </div>
    );
};

export default Cart;
