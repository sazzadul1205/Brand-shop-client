
const HelpCenter = () => {
    return (
        <div>
            <div className=" py-10">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-5xl leading-9 font-extrabold mt-5">
                            Customer Support
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 ">
                            Have questions? We're here to help. Check out our FAQs or reach out to our support team for assistance.
                        </p>
                    </div>
                    <div className="mt-12 mx-32">
                        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
                            <div className="p-6 bg-green-800 rounded-lg shadow">
                                <h3 className="text-lg font-medium text-gray-900 mb-10">How do I update my software?</h3>
                                <p className="mt-2 text-base text-gray-500">To update your software, check for the latest updates in the settings menu or application interface. Typically, you can find a "Check for updates" option in the settings or help section.</p>
                            </div>
                            <div className="p-6 bg-green-800 rounded-lg shadow">
                                <h3 className="text-lg font-medium text-gray-900 mb-10">How can I improve my Wi-Fi signal?</h3>
                                <p className="mt-2 text-base text-gray-500">To enhance your Wi-Fi signal, try repositioning your router to a central location, minimizing obstructions, and reducing interference from other electronic devices. Additionally, consider upgrading to a higher-quality router or using Wi-Fi signal extenders for larger spaces.</p>
                            </div>
                            <div className="p-6 bg-green-800 rounded-lg shadow">
                                <h3 className="text-lg font-medium text-gray-900 mb-10">What are the system requirements for this software?</h3>
                                <p className="mt-2 text-base text-gray-500">You can find the system requirements for our software on the product page or in the documentation provided with the software. Ensure that your device meets the minimum specifications outlined to ensure optimal performance.</p>
                            </div>
                            <div className="p-6 bg-green-800 rounded-lg shadow">
                                <h3 className="text-lg font-medium text-gray-900 mb-10">How do I track my order?</h3>
                                <p className="mt-2 text-base text-gray-500">Check your order status and tracking information through your account dashboard or contact our support team for assistance.</p>
                            </div>
                            <div className="p-6 bg-green-800 rounded-lg shadow">
                                <h3 className="text-lg font-medium text-gray-900 mb-10">What payment methods do you accept?</h3>
                                <p className="mt-2 text-base text-gray-500">We accept all major credit cards, PayPal, and other secure payment methods. Learn more about our payment options in the checkout process.</p>
                            </div>
                            <div className="p-6 bg-green-800 rounded-lg shadow">
                                <h3 className="text-lg font-medium text-gray-900 mb-10">How can I protect my device from malware?</h3>
                                <p className="mt-2 text-base text-gray-500">To safeguard your device from malware, consider installing reputable antivirus software, regularly updating your operating system and applications, avoiding suspicious links or downloads, and using secure networks when browsing.</p>
                            </div>

                            <div className="p-6 bg-green-800 rounded-lg shadow">
                                <h3 className="text-lg font-medium text-gray-900 mb-10">What should I do if my device is overheating?</h3>
                                <p className="mt-2 text-base text-gray-500">If your device is overheating, try closing any resource-intensive applications, ensuring proper ventilation around the device, and keeping it out of direct sunlight. If the issue persists, consider contacting the device manufacturer for further assistance.</p>
                            </div>

                            <div className="p-6 bg-green-800 rounded-lg shadow">
                                <h3 className="text-lg font-medium text-gray-900 mb-10">How do I improve my device's battery life?</h3>
                                <p className="mt-2 text-base text-gray-500">To extend your device's battery life, try reducing screen brightness, turning off unnecessary features like Bluetooth or Wi-Fi when not in use, and closing background applications. You can also consider using power-saving modes provided by your device.</p>
                            </div>

                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <a href="#" className="text-base font-medium text-green-600 hover:text-green-500">
                            Contact Support
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
