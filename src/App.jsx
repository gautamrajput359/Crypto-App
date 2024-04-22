import Slider from "./components/Slider"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./components/CoinPage";
import { CurrencyState } from "./components/CurrencyContext";

export const InfoContext = createContext()

function App() {
  const { currency } = CurrencyState();
  const [coins, setCoins] = useState([]);

  async function coinsData() {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
    const data = await response.json()
    setCoins(data)
  }
  useEffect(() => {
    coinsData()
}, [currency])
  return (
    <>
    <InfoContext.Provider value={coins}>
    <Slider />
    <Navbar />
    <Main />
    </InfoContext.Provider>
    {/* <CoinPage /> */}
    </>
  )
}

export default App
