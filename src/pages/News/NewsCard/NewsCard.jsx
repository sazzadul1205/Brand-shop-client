const NewsCard = ({ news }) => {
    const { title, description, image } = news;
    return (
        <div>
            <div className="hero p-10 bg-green-700 mb-2">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="max-w-sm w-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;