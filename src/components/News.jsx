import React, { useEffect, useState } from "react";
import "./news.css";

function News() {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch("http://localhost:4000/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      })
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div></div>;
}

export default News;
