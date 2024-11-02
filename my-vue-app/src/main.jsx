import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home.jsx"
import Research from "./pages/Research.jsx"
import Team from "./pages/Team.jsx"
import About from "./pages/About.jsx"
import './index.css'
import './pages/styles/styles.scss'
import {RouterProvider, createBrowserRouter} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Research",
    element: <Research/>
  },
  {
    path: "/Team",
    element: <Team/>
  },
  {
    path: "/About",
    element: <About/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
