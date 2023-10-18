
const AboutUs = () => {
    return (
        <div className=" py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base  font-semibold tracking-wide uppercase">About Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Welcome to our Tech World
                    </p>
                    <p className="mt-4 max-w-2xl text-xl  lg:mx-auto">
                        At Tech World, we are passionate about delivering the latest tech news, product reviews, and insightful articles to keep you updated with the ever-evolving world of technology.
                    </p>
                </div>
                <div className="mt-20">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium ">
                                    Our Mission
                                </dt>
                                <dd className="mt-2 text-base ">
                                    To provide our readers with the most comprehensive and engaging content related to the tech world and its dynamic advancements.
                                </dd>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h12v2H3V4zM3 10h9v2H3v-2zM3 16h5v2H3v-2zM14 10h7v2h-7v-2zM14 16h7v2h-7v-2z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium ">
                                    Our Values
                                </dt>
                                <dd className="mt-2 text-base ">
                                    We are committed to integrity, quality, and innovation, ensuring that our readers receive accurate and insightful information every time.
                                </dd>
                            </div>
                        </div>  
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h12v2H3V4zM3 10h9v2H3v-2zM3 16h5v2H3v-2zM14 10h7v2h-7v-2zM14 16h7v2h-7v-2z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium ">
                                    Our Team
                                </dt>
                                <dd className="mt-2 text-base ">
                                    Comprised of dedicated and passionate individuals, our diverse team brings together expertise from various tech disciplines, ensuring comprehensive and reliable coverage of the tech industry.
                                </dd>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h12v2H3V4zM3 10h9v2H3v-2zM3 16h5v2H3v-2zM14 10h7v2h-7v-2zM14 16h7v2h-7v-2z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium ">
                                    Our Commitment
                                </dt>
                                <dd className="mt-2 text-base ">
                                    Committed to providing accurate, unbiased, and insightful tech content, we strive to be a trusted source of information for tech enthusiasts, businesses, and professionals alike.
                                </dd>
                            </div>
                        </div>

                    </dl>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;