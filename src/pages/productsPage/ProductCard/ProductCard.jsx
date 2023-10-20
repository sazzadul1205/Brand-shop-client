import { BiDollar } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const ProductCard = ({ product, products, setProducts }) => {

    const { _id, name, brand, type, price, rating, supply, description, photo, ram, rom, battery, display } = product;

    const handleDelete = (_id) => {
        console.log(_id);
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

                fetch(`https://brand-shop-server-8aw35uazt-sazzadul-islams-projects.vercel.app//product/${_id}`, {
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
                            const remaining = products.filter(cof => cof._id !== _id );
                            setProducts(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full max-h-48" src={photo} alt={name} />
                <div className="px-6 py-4 bg-green-800 ">
                    <div className="font-bold text-xl mb-2 flex justify-between">{name}
                        <p className="text-white text-base mb-2 p-1 md:bg-green-500 rounded-2xl">{brand}</p>
                    </div>
                    <p className="text-white text-lg mb-2">Device: {type}</p>
                    <p className="text-white text-base mb-2 flex"><BiDollar className="mt-1"></BiDollar>{price}</p>
                    <p className="text-white text-base mb-2">Rating: {rating}</p>

                    <Link to={`/${brand}/${_id}`}>
                        <button className="btn w-full bg-green-700 hover:bg-green-400">Details</button>
                    </Link>
                    <div>
                        <Link to={`/update/${brand}/${_id}`}>
                            <button className="w-1/2 bg-yellow-500 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">Update Product</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="w-1/2 bg-red-500 hover:bg-red-300 text-black font-bold py-2 px-4 rounded">Delete Product</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;