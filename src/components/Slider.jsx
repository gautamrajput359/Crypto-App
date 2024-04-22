import React, { useContext } from 'react'
import Marquee from 'react-fast-marquee'
import { InfoContext } from '../App'
import { CurrencyState } from './CurrencyContext';
import { Link } from 'react-router-dom';

const Slider = () => {
  const coins = useContext(InfoContext);
  const { symbol } = CurrencyState();
  return (
    <div>
      <Marquee className='text-white font-semibold bg-blue-800 h-10 w-full fixed top-0' pauseOnHover={true} speed={40}>
        {coins.map((item) => {
        return <Link to={`/${item.id}`} className='flex gap-1 items-center cursor-pointer mr-20' key={item.id}>
        <div className='flex items-center'>
          <img src={item.image} alt="logo" className='h-5' />
          <p>{item.symbol.toUpperCase()}</p>
          </div>
        <div>{symbol}{item.current_price}</div>
        {item.price_change_percentage_24h>=0?
      <div className='text-green-500'>+{parseFloat(item.price_change_percentage_24h).toFixed(2)}%</div>:
      <div className='text-red-500'>{parseFloat(item.price_change_percentage_24h).toFixed(2)}%</div>
      }
        </Link>
        })}
      </Marquee>
    </div>
  )
}

export default Slider
