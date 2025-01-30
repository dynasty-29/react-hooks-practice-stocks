import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function StockContainer({ onBuyStock }) {
  const [stocks, setStocks] = useState([]);
  const [sortType, setSortType] = useState("");
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/stocks") 
      .then((res) => res.json())
      .then((data) => setStocks(data));
  }, []);

  let filteredStocks = [...stocks];

  // Apply filtering
  if (filterType) {
    filteredStocks = filteredStocks.filter(stock => stock.type === filterType);
  }

  // Apply sorting
  if (sortType === "Alphabetically") {
    filteredStocks.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortType === "Price") {
    filteredStocks.sort((a, b) => a.price - b.price);
  }

  return (
    <div>
      <h2>Available Stocks</h2>
      {filteredStocks.map((stock) => (
        <Stock key={stock.id} stock={stock} onBuyStock={onBuyStock} />
      ))}
    </div>
  );
}

export default StockContainer;
