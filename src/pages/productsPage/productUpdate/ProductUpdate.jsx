import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductUpdate = () => {
    const product = useLoaderData();
    const { _id, name, brand, type, price, rating, description, photo, ram, rom, battery, display, supply } = product;

    const handleAddUpdate = (e) => {
        e.preventDefault();

        const form = e.target;

        const updatedName = form.name.value;
        const updatedBrand = form.brand.value;
        const updatedType = form.type.value;
        const updatedPrice = form.price.value;
        const updatedRating = form.rating.value;
        const updatedSupply = form.supply.value;
        const updatedDescription = form.description.value;
        const updatedPhoto = form.photo.value;
        const updatedRam = form.ram.value;
        const updatedRom = form.rom.value;
        const updatedBattery = form.battery.value;
        const updatedDisplay = form.display.value;

        const updatedProduct = {
            name: updatedName,
            brand: updatedBrand,
            type: updatedType,
            price: updatedPrice,
            rating: updatedRating,
            supply: updatedSupply,
            description: updatedDescription,
            ram:  updatedRam,
            rom: updatedRom,
            battery: updatedBattery,
            display: updatedDisplay,
            photo:  updatedPhoto,
        };
        console.log(updatedProduct);

        // send data to Server
        fetch(`http://localhost:5000/product/${brand}/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product has been Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            });
    };

    return (
        <div>
            <div className="bg-green-500 p-10 md:p-24">
                <h2 className="text-center  md:mx-auto text-3xl md:text-5xl font-semibold">Update Products</h2>
                <form onSubmit={handleAddUpdate}>
                    <div className="mt-14 justify-center mx-auto text-white text-xl">
                        {/* Form Row name and brand name */}
                        <div className="md:flex">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span >Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" placeholder="Product Name"
                                        defaultValue={name} className="input input-bordered md:w-full mr-5" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span >Brand Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="brand" placeholder="Samsung" defaultValue={brand} className="input input-bordered md:w-full" />
                                </label>
                            </div>
                        </div>
                        {/* Form Row Type and price  */}
                        <div className="md:flex">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span >Type</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="type" placeholder="Mobile Phone" defaultValue={type} className="input input-bordered md:w-full mr-5" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span >Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="price" placeholder="00.0 $" defaultValue={price} className="input input-bordered md:w-full" />
                                </label>
                            </div>
                        </div>
                        {/* Form Row rating and Available Supply  */}
                        <div className="md:flex">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span >Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="rating" placeholder="4.7" defaultValue={rating} className="input input-bordered md:w-full mr-5" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span >Supply</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="supply" placeholder="1000" defaultValue={supply} className="input input-bordered md:w-full" />
                                </label>
                            </div>
                        </div>
                        {/* Form Row RAM and ROM  */}
                        <div className="md:flex">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span >RAM</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="ram" defaultValue={ram} className="input input-bordered md:w-full mr-5" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span >ROM</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="rom" defaultValue={rom} className="input input-bordered md:w-full" />
                                </label>
                            </div>
                        </div>
                        {/* Form Row Battery and Display  */}
                        <div className="md:flex">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span >Battery</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="battery"
                                        defaultValue={battery} className="input input-bordered md:w-full mr-5" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span >Display</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="display"
                                        defaultValue={display} className="input input-bordered md:w-full" />
                                </label>
                            </div>
                        </div>
                        {/* Form Row description */}
                        <div >
                            <div className="form-control w-full">
                                <label className="label">
                                    <span >Short description</span>
                                </label>
                                <label className="input-group">
                                    <textarea
                                        name="description"
                                        placeholder="Short description"
                                        defaultValue={description}
                                        className="input input-bordered w-full h-24 p-2 resize-y"
                                    />
                                </label>
                            </div>
                        </div>
                        {/* Form Row  photo url*/}
                        <div >
                            <div className="form-control w-full">
                                <label className="label">
                                    <span >Photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL"
                                        className="input input-bordered md:w-full mr-5" />
                                </label>
                            </div>
                        </div>
                        <div >
                            <div className="form-control w-full mt-5">
                                <input className="w-full bg-green-800 hover:bg-green-300 text-white font-bold py-2 px-4 rounded" type="submit" value="Update Products" />

                            </div>
                        </div>

                    </div>


                </form>
            </div>
        </div>
    );
};

export default ProductUpdate;