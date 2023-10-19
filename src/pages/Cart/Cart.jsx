import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Cart = () => {
    const loadedProduct = useLoaderData()
    const [products, setProduct] = useState(loadedProduct);
    const {_id, email} = products;
    return (
        <div>
            <h1>Cart Items:{email}</h1>

            <div>
                
                
            </div>
        </div>
    );
};

export default Cart;