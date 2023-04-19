import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login/Login';
import Home from './pages/home/Home';
import ProductInformation from './pages/ProductInformation/ProductInformation'
import "./index.scss"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PRODUCTS_MOCK } from './mock/ProductMock'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/home",
    element: <Home data={PRODUCTS_MOCK} />
  },
  {
    path: "/info/:productId",
    element: <ProductInformation data={PRODUCTS_MOCK} />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)