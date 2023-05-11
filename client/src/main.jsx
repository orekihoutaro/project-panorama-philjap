import React from 'react'
import ReactDOM from 'react-dom/client'


import App from './App.jsx'
import ContactUsPage from './pages/ContactUsPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/AdminDashboard'


import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/aboutus',
    element: <ContactUsPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
