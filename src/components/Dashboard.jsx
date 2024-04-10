import React, { useEffect, useState } from "react";
import "./dashboard.css";

function Dashboard() {
  const [cards, setCards] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:4000/cards")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div></div>;
}

export default Dashboard;
