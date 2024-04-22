import React, { createContext, useContext, useEffect, useState } from 'react'
import { InfoContext } from '../App'
import { CurrencyState } from './CurrencyContext';
import { Link } from 'react-router-dom';

const Main = () => {
  const {symbol} = CurrencyState() 
  const coins = useContext(InfoContext);
  return (
    <>
    <div className='desc text-white mt-20'>
    <div>
      <div className='flex px-4 h-16 items-center rounded-md shadow-[0px_0px_15px] shadow-gray-500 md:mx-20 font-bold text-lg duration-200'>
        <div className="serialNo w-full">#</div>
        <div className="serialNo w-full pl-5">Coin</div>
        <div className="serialNo w-full text-center">Price</div>
        <div className="serialNo w-full text-center">Volume</div>
        <div className="serialNo w-full text-center">Market Cap</div>
        <div className="serialNo w-full text-end">24HR change</div>
      </div>
    </div>
    {coins.map((item) => {
      return <Link to={`/${item.id}`} className='flex justify-between px-4 h-16 items-center rounded-md mt-8 shadow-[0px_0px_15px] shadow-gray-500 md:mx-20 hover:mx-16 duration-200 hover:cursor-pointer text-[16px]' key={item.id}>
      <div className="serialNo w-full">{item.market_cap_rank}</div>
      <div className="serialNo flex items-center gap-1 w-full text-center">
        <img src={item.image} alt="logo" className='h-10' />
        <div>
        <p className='text-start'>{item.symbol.toUpperCase()}</p>
        <p className='text-sm text-gray-400'>{item.name}</p>
        </div>
        </div>
      <div className="serialNo w-full text-center">{symbol}{item.current_price}</div>
      <div className="serialNo w-full text-center">{item.total_volume}</div>
      <div className="serialNo w-full text-center">{item.market_cap}</div>
      {item.price_change_percentage_24h>0?
      <div className='text-green-500 w-full text-end'>{parseFloat(item.price_change_percentage_24h).toFixed(2)}%</div>:
      <div className='text-red-500 w-full text-end'>{parseFloat(item.price_change_percentage_24h).toFixed(2)}%</div>
      }
    </Link>
    })}
    </div>
    </>
  )
}

export default Main
