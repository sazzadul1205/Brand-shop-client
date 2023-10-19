// import Swal from "sweetalert2";

import Swal from "sweetalert2";

const AddProducts = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const supply = form.supply.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const ram = form.ram.value;
        const rom = form.rom.value;
        const battery = form.battery.value;
        const display = form.display.value;

        const newProduct = {
            name,
            brand,
            type,
            price,
            rating,
            supply,
            description,
            ram,
            rom,
            battery,
            display,
            photo,
        };
        console.log(newProduct);

        // send data to Server
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product haze been added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        
    };

    return (
        <div className="bg-green-500 p-10 md:p-24">
            <h2 className="text-center  md:mx-auto text-3xl md:text-5xl font-semibold">Add New Products</h2>
            <form onSubmit={handleAddProduct}>
                <div className="mt-14 justify-center mx-auto text-white text-xl">
                    {/* Form Row name and brand name */}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span >Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered md:w-full mr-5" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span >Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand" placeholder="Samsung" className="input input-bordered md:w-full" />
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
                                <input type="text" name="type" placeholder="Mobile Phone" className="input input-bordered md:w-full mr-5" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span >Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="00.0 $" className="input input-bordered md:w-full" />
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
                                <input type="text" name="rating" placeholder="4.7" className="input input-bordered md:w-full mr-5" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span >Supply</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="supply" placeholder="1000" className="input input-bordered md:w-full" />
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
                                <input type="text" name="ram" className="input input-bordered md:w-full mr-5" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span >ROM</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rom" className="input input-bordered md:w-full" />
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
                                <input type="text" name="battery" className="input input-bordered md:w-full mr-5" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span >Display</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="display" className="input input-bordered md:w-full" />
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
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered md:w-full mr-5" />
                            </label>
                        </div>
                    </div>
                    <div >
                        <div className="form-control w-full mt-5">
                            <input className="w-full bg-green-800 hover:bg-green-300 text-white font-bold py-2 px-4 rounded" type="submit" value="Add Products" />

                        </div>
                    </div>

                </div>


            </form>
        </div>
    );
};

export default AddProducts;