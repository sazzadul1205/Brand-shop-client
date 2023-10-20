import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";


const ProductDetails = () => {
    const loaderData = useLoaderData()
    const [data, setData] = useState(loaderData)
    const { user } = useContext(AuthContext)

    const { _id, name, brand, type, price, rating, description, photo, ram, rom, battery, display, supply } = data;


    const handleAddToCart = () => {
        const AddProduct = _id;
        console.log(AddProduct);

        fetch(`https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//user/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ updatedProduct: AddProduct })
        })
            .then(res => res.json())
            .then(data => {
                if (data.updatedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product has been added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            });
    };


    return (
        <div>
            <div className="hero bg-green-500">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <img className="mx-auto mb-5" src={photo} alt={name} />
                        <h1 className="text-blue-900 font-bold text-xl">{brand}</h1>
                        <h1 className="text-4xl font-bold">{name}</h1>
                        <p className="py-6 ">{description}</p>
                        <div className="flex justify-center gap-5 mb-5">
                            <p className="p-2 bg-green-700 rounded-2xl">Type: {type}</p>
                            <p className="p-2 bg-green-700 rounded-2xl">RAM: {ram}</p>
                            <p className="p-2 bg-green-700 rounded-2xl">Memory: {rom}</p>
                        </div>
                        <div className="flex justify-center gap-5 mb-5">
                            <p className="p-2 bg-green-700 rounded-2xl">Battery: {battery}</p>
                            <p className="p-2 bg-green-700 rounded-2xl">Rating: {rating}</p>
                            <p className="p-2 bg-green-700 rounded-2xl">display: {display}</p>
                        </div>
                        <h2 className="text-3xl my-5">Price: $ {price}</h2>
                        <button onClick={() => handleAddToCart(brand, _id)} className="btn btn-primary w-full bg-green-800 hover:bg-green-900 mb-10">Add To Cart</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;