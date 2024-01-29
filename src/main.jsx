import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider ,Routes , Route , createRoutesFromElements , createBrowserRouter} from 'react-router-dom'


const router = createRoutesFromElements(
  <Route path='/' element={<App />}>

  </Route>
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(router)}/>
  </React.StrictMode>,
)
