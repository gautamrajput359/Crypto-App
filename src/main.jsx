import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CurrencyContext from './components/CurrencyContext.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CoinPage from './components/CoinPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <CurrencyContext>
    <App />
    </CurrencyContext>,
  },
  {
    path: `/:id`,
    element: <CurrencyContext>
    <CoinPage />
    </CurrencyContext>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CurrencyContext>
    <App />
    </CurrencyContext> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
