import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './sections/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TodaysDeal from './sections/TodaysDeal.jsx'
import CustomerService from './sections/CustomerService.jsx'
import GiftCards from './sections/GiftCards.jsx'
import Electronics from './sections/Electronics.jsx'
import WelcomePage from './sections/WelcomePage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/todays-deal',
        element: <TodaysDeal/>
      },
      {
        path: '/customer-service',
        element: <CustomerService/>
      },
      {
        path: '/gift-cards',
        element: <GiftCards/>
      },
      {
        path: '/electronics',
        element:<Electronics/>
      },
      {
        path: '/welcome-page',
        element: <WelcomePage/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
