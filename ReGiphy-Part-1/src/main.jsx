import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Search from '../Pages/Search'
import Random from '../Pages/Random'
import Trending from '../Pages/Trending'
import Layout from "../Components/Layout"
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "trending",
      element: <Trending />
    },
    {
      path: "random",
      element: <Random />
    },
    {
      path: "search",
      element: <Search />
    }],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)