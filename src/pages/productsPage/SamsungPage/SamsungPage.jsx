import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const banner1 = 'https://i.ibb.co/zXXSSMq/banner-1.jpg';
const banner2 = 'https://i.ibb.co/yqx0wVV/banner-2.jpg';
const banner3 = 'https://i.ibb.co/98KRs4Q/banner-3.jpg';

const SamsungPage = () => {
    const loadedProduct = useLoaderData();
    const [products, setProducts] = useState(loadedProduct);

    // Filter products for Samsung brand
    const samsungProducts = products.filter(product => product.brand === 'Samsung');

    return (
        <div>
            <img className="mx-auto my-5" src={'https://i.ibb.co/vqm0J76/samsung.png'} alt="https://i.ibb.co/vqm0J76/samsung.png" />
            {/* slider */}
            <div>
                <div className="carousel h-2/6 lg:w-11/12 md:mx-20">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={banner1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={banner2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={banner3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="my-5 text-5xl font-semibold text-center">Products</h3>
                {samsungProducts.length === 0 ? (
                    <p className="text-center text-blue-800 font-black text-5xl my-5">~ No Samsung products available ~</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-2 md:mx-10 mb-10">
                        {samsungProducts.map(product => (
                            <ProductCard
                                key={product._id}
                                product={product}
                                products={products}
                                setProduct={setProducts}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SamsungPage;
