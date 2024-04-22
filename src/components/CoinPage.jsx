import React, { useEffect, useState } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { Link, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { CurrencyState } from './CurrencyContext'

const CoinPage = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([])
  const [chart, setChart] = useState([])
  const [chartInfo, setChartInfo] = useState([])
  const [loading, setLoading] = useState(false)
  const [days, setDays] = useState(1)
  const SingleCoinData = async() =>{
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    const data = await res.json()
    setInfo(data)
  }
  console.log(id)
  const ChartData = async() => {
    setLoading(true)
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`)
    const data = await res.json()
    setLoading(false)
    setChart(data.prices)
  }
  const labels = chart.map((item) => {
    let date = new Date(item[0]);
    let time = `${date.getHours()}:${date.getMinutes()}`
    return days===1?time:date.toLocaleDateString()
  })
  
  useEffect(() => {
    SingleCoinData()
  }, [])
  useEffect(() => {
    ChartData()
    setChartInfo({
      labels: labels,
      datasets: [
        {
          label: "Price",
          data: chart.map((item) => {
            return item[1]
          })
        }
      ]
    })
  }, [days])
  const config = {
    type: 'line',
    data: chartInfo,
  };
  console.log(info)
  console.log(chart)
  return (
    <div>
      <header>
      <Link to={"/"} className='text-center flex justify-center items-center mt-5 gap-1'>
            <img src="/blockchain_logo.png" alt="logo" className='h-10 cursor-pointer' />
            <span className='hover:text-blue-500 font-bold text-white text-5xl cursor-pointer'>Criptik</span>
        </Link>
      </header>
      <main className='flex mt-10'>
          <div className='w-[40%] px-4'>
            <div className="flex flex-col items-center gap-4">
          {/* <img src={info.image.large} alt="logo" className='h-44 w-44' /> */}
          <div className='text-white text-4xl font-bold'>{info.name}</div>
            </div>
            {/* <div className='text-lg mt-5 font-semibold text-white'>{info?.description.en.split(". ")[0]}.</div> */}
            <div className="text-3xl mt-5 text-white">
              <span className='font-semibold'>Rank: </span>
              <span className=''>{info.market_cap_rank}</span>
            </div>
            <div className="text-3xl mt-5 text-white">
              <span className='font-semibold'>Current Price: </span>
              {/* <span className=''>${info?.market_data.current_price.usd}</span> */}
            </div>
            <div className="text-3xl mt-5 text-white">
              <span className='font-semibold'>24H High: </span>
              {/* <span className=''>${info?.market_data.high_24h.usd}</span> */}
            </div>
            <div className="text-3xl mt-5 text-white">
              <span className='font-semibold'>24H Low: </span>
              {/* <span className=''>${info?.market_data.low_24h.usd}</span> */}
            </div>
        </div>
        <div className='w-[100%] border-l-2 border-gray-200 text-white'>
          <div>
            {/* <Line data={chartInfo} /> */}
            {!loading && <div className='w-[100%] text-white flex flex-col justify-center items-center'>
            <ClipLoader color="#364ad6" size={200} />
            <div className='text-5xl'>Fetching</div>
          </div>
        }
        </div>
        <div className='flex justify-center gap-5 my-10 mx-10'>
          <button className='w-[100%] h-10 hover:bg-green-500 border border-blue-600 rounded-lg hover:font-bold font-semibold'>24 Hour</button>
          <button className='w-[100%] h-10 hover:bg-green-500 border border-blue-600 rounded-lg hover:font-bold font-semibold' onClick={() => setDays(30)}>1 Month</button>
          <button className='w-[100%] h-10 hover:bg-green-500 border border-blue-600 rounded-lg hover:font-bold font-semibold' onClick={() => setDays(90)}>3 Months</button>
          <button className='w-[100%] h-10 hover:bg-green-500 border border-blue-600 rounded-lg hover:font-bold font-semibold' onClick={() => setDays(365)}>1 Year</button>
        </div>
        </div>
      </main>
    </div>
  )
}

export default CoinPage
