import React, { Suspense, lazy } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './pages/styles/styles.scss'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoadingScreen from './pages/components/LoadingScreen.jsx'
const Home = lazy(() => import("./pages/Home.jsx"));
const Research = lazy(() => import("./pages/Research.jsx"));
const Team = lazy(() => import("./pages/Team.jsx"));
const About = lazy(() => import("./pages/About.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/research",
    element: <Research />
  },
  {
    path: "/team",
    element: <Team />
  },
  {
    path: "/about",
    element: <About />
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<LoadingScreen/>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
)
