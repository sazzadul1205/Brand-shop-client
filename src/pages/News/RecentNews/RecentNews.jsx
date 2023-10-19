import  { useState } from 'react';

const RecentNews = ({ recentNews }) => {
    const { title, author, date, image } = recentNews;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const underlineStyle = {
        textDecoration: isHovered ? 'underline' : 'none',
    };

    return (
        <div>
            <div className="w-1/4 my-4 ml-5">
                <div className="card w-72 md:w-96 bg-green-700 shadow-xl">
                    <figure>
                        <img className="w-full" src={image} alt={title} />
                    </figure>
                    <div className="card-actions">
                        <div className="ml-2 mt-2 text-orange-500 ">{date}</div>
                    </div>
                    <div className="card-body">
                        <h2
                            className="card-title text-xl"
                            style={underlineStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {title}
                            <div className="badge badge-secondary  border-none">NEW</div>
                        </h2>
                        <p className='text-'>{author}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentNews;
