import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home.jsx"
import Research from "./pages/Research.jsx"
import Team from "./pages/Team.jsx"
import About from "./pages/About.jsx"
import './index.css'
import './pages/styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {RouterProvider, createBrowserRouter} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/research",
    element: <Research/>
  },
  {
    path: "/team",
    element: <Team/>
  },
  {
    path: "/about",
    element: <About/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
