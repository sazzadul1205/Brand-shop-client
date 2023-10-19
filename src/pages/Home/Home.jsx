import { Link } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import HelpCenter from "./HelpCenter/HelpCenter";

const Home = () => {
    return (
        <div className="bg-green-400">
            {/* banner */}
            <div className="mx-10 py-2">
                <img className="w-full" src={'https://i.ibb.co/jgx1CrT/banner-home.png'} alt="https://i.ibb.co/jgx1CrT/banner-home.png" />
            </div>
            {/* Brands */}
            <div>
                <h2 className="text-5xl font-semibold text-center py-5 ">~ Brands ~</h2>
            </div>
            <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center py-10">
                {/* brand-1 */}
                <div className="card bg-green-800 hover:bg-green-700 shadow-xl w-full">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co/dQwr2p2/apple.png"
                            alt="Shoes"
                            className="rounded-xl "
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-5xl font-bold">Apple Products</h2>

                        <div className="card-actions"></div>
                    </div>
                </div>
                {/* brand-2 */}
                <div className="card bg-green-800 hover:bg-green-700 shadow-xl w-full">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co/mtz4ZPy/asus.png"
                            alt="Shoes"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-5xl font-bold">Asus Products</h2>

                        <div className="card-actions"></div>
                    </div>
                </div>
                {/* brand-3 */}
                <div className="card bg-green-800 hover:bg-green-700 shadow-xl w-full">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co/pjxH8Hp/intel.png"
                            alt="Shoes"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-5xl font-bold">Intel Products</h2>

                        <div className="card-actions"></div>
                    </div>
                </div>
                {/* brand-4 */}
                <div className="card bg-green-800 hover:bg-green-700 shadow-xl w-full">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co/mFBRHNZ/nokia.png"
                            alt="Shoes"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-5xl font-bold">Nokia Products</h2>

                        <div className="card-actions"></div>
                    </div>
                </div>
                {/* brand-5 */}
                <div className="card bg-green-800 hover:bg-green-700 shadow-xl w-full">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co/K29d9Zb/oppo.png"
                            alt="Shoes"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-5xl font-bold">Oppo Products</h2>

                        <div className="card-actions"></div>
                    </div>
                </div>
                {/* brand-6 */}
                <Link className="card bg-green-800 hover:bg-green-700 shadow-xl w-full" to={'/samsung'}>
                    <div>
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.ibb.co/vqm0J76/samsung.png"
                                alt="Shoes"
                                className="rounded-xl"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-5xl font-bold">Samsung Products</h2>

                            <div className="card-actions"></div>
                        </div>
                    </div>
                </Link>
            </div>
            <div>
                <HelpCenter></HelpCenter>
            </div>
            <div>
                <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Home;