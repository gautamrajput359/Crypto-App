import React, { createContext, useContext, useEffect, useState } from 'react'

const Crypto = createContext();
const CurrencyContext = ({children}) => {
    const [currency, setCurrency] = useState("usd");
    const [symbol, setSymbol] = useState("$");
    
    useEffect(() => {
        switch (currency) {
        case "inr":
          setSymbol("₹");
          break;
        case "eur":
          setSymbol("€");
          break;
        case "jpy":
          setSymbol("¥");
          break;
        case "gbp":
          setSymbol("£");
          break;
        case "chf":
          setSymbol("₣");
          break;
        case "aud":
          setSymbol("AU$");
          break;
        case "cad":
          setSymbol("CA$");
          break;
          break;
          default:
            setSymbol("$");
      }
    }, [currency])
  return (
    <Crypto.Provider value={{currency, setCurrency, symbol}}>
      {children}
    </Crypto.Provider>
  )
}

export default CurrencyContext

export const CurrencyState = () => {
    return useContext(Crypto)
}
