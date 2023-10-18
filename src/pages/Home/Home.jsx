
const Home = () => {
    return (
        <div className="bg-green-400">
            {/* banner */}
            <div className="mx-10 py-2">
                <img className="w-full" src={'https://i.ibb.co/jgx1CrT/banner-home.png'} alt="https://i.ibb.co/jgx1CrT/banner-home.png" />
            </div>
            <div>
                <h2 className="text-5xl font-semibold  text-center py-5 ">~ Brands ~</h2>
                <div></div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;