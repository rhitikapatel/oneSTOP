import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Technews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=45a1b3aa0253482d8db1f31bc7e80948`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching tech news:", error);
      }
    };

    fetchNews();

    // Optional: Refresh every 15 minutes
    const interval = setInterval(fetchNews, 1000 * 60 * 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Latest Tech News</h2>
      <div className="space-y-4">
        {articles.map((article, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
              {article.title}
            </a>
            <p className="text-sm text-gray-700 mt-2">{article.description}</p>
            <small className="text-xs text-gray-500">Source: {article.source.name}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technews;
