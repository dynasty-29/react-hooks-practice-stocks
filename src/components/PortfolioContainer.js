import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
      }
      {portfolio.length > 0 ? (
        portfolio.map((stock) => (
          <Stock key={stock.id} stock={stock} onBuyStock={() => {}} />
        ))
      ) : (
        <p>No stocks bought yet.</p>
      )}
    </div>
  );
}

export default PortfolioContainer;
