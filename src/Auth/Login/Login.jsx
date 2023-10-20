import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcBiotech, FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const LoginPage = () => {
    const { singIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(null);

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        singIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                const user = {
                    email: email,
                    lastLoggedAt: result.user?.metadata?.lastSignInTime,
                };
                fetch("https://brand-shop-server-theta.vercel.app/user", {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(user),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Success!",
                                text: "User has been Modified",
                                icon: "success",
                                confirmButtonText: "Cool",
                            });
                        }
                    });
            })
            .catch(error => {
                console.error(error);
                setLoginError("Invalid email or password. Please try again.");
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Invalid email or password. Please try again.'
                });

            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
                const newUser = { email, password };
                fetch("https://brand-shop-server-theta.vercel.app/user", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Success!",
                                text: "New User has been Created",
                                icon: "success",
                                confirmButtonText: "Cool",
                            });
                        }
                    });
            })
            .catch(error => {
                console.error(error);
                setLoginError("Google sign-in error. Please try again.");
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Google sign-in error. Please try again.'
                });

            });
    }


    return (
        <section className="bg-green-500 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white">
                    <FcBiotech className="mr-5"></FcBiotech>
                    MoBo Tech
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                    placeholder="name@mail.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    placeholder="********"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded">
                                LogIn
                            </button>
                            {loginError && (
                                <div className="text-red-500 mt-2 text-center">
                                    {loginError}
                                </div>
                            )}
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to={'/signUp'}><a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">SignUp</a></Link>
                            </p>
                        </form>
                        <div className="flex items-center space-x-4">
                            <hr className="flex-grow border-gray-300" />
                            <span className="text-black">or</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>
                        <h2 className="text-center font-extrabold ">Login With</h2>
                        <div className="flex justify-center">

                            <button onClick={handleGoogleSignIn} className="btn btn-outline w-1/2"><FcGoogle></FcGoogle>Google</button>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default LoginPage;
