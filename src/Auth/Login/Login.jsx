import { FcBiotech, FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="py-10">
            <section className="bg-green-500 md:py-20 lg:py-0">
                <div className="flex flex-col items-center justify-center px-6 py-10 mx-auto md:h-screen lg:py-0">
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
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button className="w-full bg-green-600 hover:bg-green-500 text-white hover:text-black font-bold py-2 px-4 rounded">
                                    LogIn
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to={'/signUp'}>Sign Up</Link></a>
                                </p>
                            </form>
                            <div className="flex items-center space-x-4">
                                <hr className="flex-grow border-gray-300" />
                                <span className="text-black">or</span>
                                <hr className="flex-grow border-gray-300" />
                            </div>
                            <h2 className="text-center font-extrabold ">Login With</h2>
                            <div className="flex justify-center">
                                <button className="btn btn-outline w-full"><FcGoogle></FcGoogle>Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
