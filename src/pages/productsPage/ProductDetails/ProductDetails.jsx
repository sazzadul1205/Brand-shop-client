import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const loaderData = useLoaderData()
    const [data, setData] = useState(loaderData)

    const { _id, name, brand, type, price, rating, description, photo, ram, rom, battery, display } = data;

    const handleDelete = (brand, _id) => {
        console.log(brand, _id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                fetch(`http://localhost:5000/product/${brand}/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )

                        }
                    })
            }
        })
    }


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
                        <button className="btn btn-primary w-full bg-green-800 hover:bg-green-900 mb-10">Add To Cart</button>
                        <div>
                            <Link to={`/update/${brand}/${_id}`}>
                                <button className="w-1/2 bg-yellow-500 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">Update Product</button>
                            </Link>
                            <button onClick={() => handleDelete(brand, _id)} className="w-1/2 bg-red-500 hover:bg-red-300 text-black font-bold py-2 px-4 rounded">Delete Product</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;