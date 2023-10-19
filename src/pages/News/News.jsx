import { useEffect, useState } from "react";
import RecentNews from "./RecentNews/RecentNews";
import NewsCard from "./NewsCard/NewsCard";

const News = () => {
    const [recentNews, setRecentNews] = useState([]);
    const [newsCard, setNewsCard] = useState([]);

    useEffect(() => {
        fetch('/RecentNews.json')
            .then(res => res.json())
            .then(data => setRecentNews(data.RecentNews))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        fetch('/News.json')
            .then(res => res.json())
            .then(data => setNewsCard(data.News))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="flex flex-col md:flex-col lg:flex-row md:mx-5 lg:mx-32">
            <div className="w-full md:ml-36 md:w-1/4 mb-8 md:mb-0 order-1 md:order-2">
                {recentNews.map(recentItem => (
                    <RecentNews key={recentItem.id} recentNews={recentItem}></RecentNews>
                ))}
            </div>
            <div className="w-full mx-auto md:w-3/4 order-2 md:order-1">
                {
                    newsCard.map(news => (
                        <NewsCard key={news.id} news={news}></NewsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default News;