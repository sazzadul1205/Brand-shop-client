import { FcBiotech } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="py-10">
            <section className="bg-green-500 md:py-20 lg:py-0">
                <div className="flex flex-col items-center justify-center px-6 py-5 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white">
                        <FcBiotech className="mr-5"></FcBiotech>
                        MoBo Tech
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border mt-10 md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                                Login to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <div>
                                    <input
                                        type="text"
                                        name="displayName"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                        placeholder="name@mail.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Number</label>
                                    <input
                                        type="phone"
                                        name="phoneNumber"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                        placeholder="+880**********"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                                    <input
                                        type="url"
                                        name="photoURL"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                        placeholder="https://i.ibb.co/p3HZ1Kb/ubisoft.png"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="********"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                                        required
                                    />
                                </div>
                                {/* {passwordError && (
                                    <div className="text-red-500">
                                        {passwordError}
                                    </div>
                                )} */}

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-green-500 text-white hover:text-black font-bold py-2 px-4 rounded"
                                >
                                    Create Account
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to={'/login'}><a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a></Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;