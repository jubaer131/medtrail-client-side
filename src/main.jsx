import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './assets/Router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import Authprovider from './assets/Provider/Authprovider.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
