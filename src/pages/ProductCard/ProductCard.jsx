import { BiDollar } from "react-icons/bi";
const ProductCard = ({ product }) => {
    const {name, brand, type, price, rating, supply, description, photo, ram, rom, battery, display} = product;

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
                    <button className="btn w-full bg-green-700 hover:bg-green-400">Details</button>
                </div>
                
            </div>
        </div>
    );
};

export default ProductCard;