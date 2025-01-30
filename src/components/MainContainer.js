import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [portfolio, setPortfolio] = useState([]);

  const handleBuyStock = (stock) => {
    // Prevent duplicate purchases
    if (!portfolio.some((s) => s.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  };
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer onBuyStock={handleBuyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
