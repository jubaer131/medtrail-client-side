import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './assets/Router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import Authprovider from './assets/Provider/Authprovider.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
      <Authprovider>
        <RouterProvider router={router} />
        <ToastContainer />
      </Authprovider>
    </QueryClientProvider>
  </React.StrictMode>,
)
