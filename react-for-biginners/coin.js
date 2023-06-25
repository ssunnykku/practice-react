import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div>
        <h1>The Coins! ({coin.length})</h1>
        {loading ? <strong>Loading...</strong> : null}
      </div>
      <ul>
        {coin.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}: ${coin.quotes.USD.price})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
