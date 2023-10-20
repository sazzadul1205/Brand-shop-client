import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Offers = () => {
    const loadedProduct = useLoaderData();
    const [products, setProducts] = useState(loadedProduct);
    const offer1 = products[2];
    const offer2 = products[7];
    const offer3 = products[10];
    const offer4 = products[12];
    const offer5 = products[16];

    return (

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mx-10 text-white">
                {/* Offer 1 */}
                <div className="card bg-green-700 shadow-xl">
                    <figure>
                        <img className="mt-5" src={offer1.photo} alt="Offer 1" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-between">
                            {offer1.name}
                            <div className="badge badge-secondary">Offer</div>
                        </h2>
                        <p>
                            price: <span style={{ textDecoration: 'line-through' }}>{offer1.price}</span> <span className="text-orange-500 font-bold text-xl">$ {offer1.price - 100}</span>
                        </p>
                        <p>New Price: $ {offer1.price - 100}</p>
                        <div className="card-actions justify-end">
                            <button className="w-full bg-green-800 hover:bg-green-300 text-white font-bold py-2 px-4 rounded" type="submit" >Buy Now</button>

                        </div>
                    </div>
                </div>

                {/* Offer 2 */}
                <div className="card bg-green-700 shadow-xl">
                    <figure>
                        <img className="mt-5"src={offer2.photo} alt="Offer 1" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-between">
                            {offer2.name}
                            <div className="badge badge-secondary">Offer</div>
                        </h2>
                        <p>
                            price: <span style={{ textDecoration: 'line-through' }}>{offer2.price}</span> <span className="text-orange-500 font-bold text-xl">$ {offer2.price - 100}</span>
                        </p>
                        <div className="card-actions justify-end">
                            <button className="w-full bg-green-800 hover:bg-green-300 text-white font-bold py-2 px-4 rounded" type="submit" >Buy Now</button>

                        </div>
                    </div>
                </div>

                {/* Offer 3 */}
                <div className="card bg-green-700 shadow-xl">
                    <figure>
                        <img className="mt-5"src={offer3.photo} alt="Offer 1" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-between">
                            {offer3.name}
                            <div className="badge badge-secondary">Offer</div>
                        </h2>
                        <p>
                            price: <span style={{ textDecoration: 'line-through' }}>{offer3.price}</span> <span className="text-orange-500 font-bold text-xl">$ {offer3.price - 100}</span>
                        </p>
                        <p>New Price: $ {offer3.price - 100}</p>
                        <div className="card-actions justify-end">
                            <button className="w-full bg-green-800 hover:bg-green-300 text-white font-bold py-2 px-4 rounded" type="submit" >Buy Now</button>

                        </div>
                    </div>
                </div>

                {/* Offer 4 */}
                <div className="card bg-green-700 shadow-xl">
                    <figure>
                        <img className="mt-5"src={offer4.photo} alt="Offer 1" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-between">
                            {offer4.name}
                            <div className="badge badge-secondary">Offer</div>
                        </h2>
                        <p>
                            price: <span style={{ textDecoration: 'line-through' }}>{offer4.price}</span> <span className="text-orange-500 font-bold text-xl">$ {offer4.price - 100}</span>
                        </p>
                        <div className="card-actions justify-end">
                            <button className="w-full bg-green-800 hover:bg-green-300 text-white font-bold py-2 px-4 rounded" type="submit" >Buy Now</button>

                        </div>
                    </div>
                </div>

                {/* Offer 5 */}
                <div className="card bg-green-700 shadow-xl">
                    <figure>
                        <img className="mt-5"src={offer5.photo} alt="Offer 1" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-between">
                            {offer5.name}
                            <div className="badge badge-secondary">Offer</div>
                        </h2>
                        <p>
                            price: <span style={{ textDecoration: 'line-through' }}>{offer5.price}</span> <span className="text-orange-500 font-bold text-xl">$ {offer5.price - 100}</span>
                        </p>
                        <div className="card-actions justify-end">
                            <button className="w-full bg-green-800 hover:bg-green-300 text-white font-bold py-2 px-4 rounded" type="submit" >Buy Now</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;
