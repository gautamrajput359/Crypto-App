import React, { useState, useEffect } from 'react'
import { CurrencyState } from './CurrencyContext'

const Navbar = () => {
  const { currency, setCurrency } = CurrencyState()
  const handleChange = (e) => {
    setCurrency(e.target.value);
  }
  useEffect(() => {
    console.log(currency)
  }, [currency])
  
  const options = [
    {value:"usd", label:"USD"},
    {value:"eur", label:"EUR"},
    {value:"inr", label:"INR"},
    {value:"jpy", label:"JPY"},
    {value:"gbp", label:"GBP"},
    {value:"chf", label:"CHF"},
    {value:"aud", label:"AUD"},
    {value:"cad", label:"CAD"}
  ]
  return (
    <div>
      <nav className='flex list-none justify-between px-28 py-2 font-semibold text-white mt-10'>

        <div className='flex items-center gap-4'>
            <img src="/blockchain_logo.png" alt="logo" className='h-5 cursor-pointer' />
            <span className='hover:cursor-pointer hover:text-blue-500 font-bold'>Criptik</span>
        </div>
        <div className='flex items-center gap-4'>
            <input type="text" placeholder='Search coin' className='w-80 h-full px-2 rounded-lg outline-none text-black' />
        </div>
        <div className='flex items-center gap-4'>
            <select className='h-8 w-24 bg-sky-500 rounded-lg outline-none cursor-pointer pl-1' onChange={handleChange}>
              {options.map((item, i)=> {
                return <option value={item.value} key={i}>{item.label}</option>
              })}
            </select>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
