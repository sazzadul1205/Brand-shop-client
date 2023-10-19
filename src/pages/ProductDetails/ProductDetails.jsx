import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const loaderData = useLoaderData()
    const [data, setData] = useState(loaderData)

    const { __id, name, brand, type, price, rating, supply, description, photo, ram, rom, battery, display  } = data;


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
                        <h2>Price: $ {price}</h2>
                        <button className="btn btn-primary w-full bg-green-800 hover:bg-green-900">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;