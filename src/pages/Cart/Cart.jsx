import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Cart = () => {
    const loadedProduct = useLoaderData();
    const [products, setProducts] = useState(loadedProduct);
    const { user } = useContext(AuthContext);

    // Find products associated with the logged-in user's email
    const userProducts = products.filter((product) => product.email === user.email);
    console.log(user.email);

    return (
        <div>
            <h1>Cart Items:</h1>
            <div>
                {userProducts.map((product, index) => (
                    <div key={index}>
                        <p>{product.updatedProduct}</p>
                        {/* Render other product information here */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
