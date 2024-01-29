import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider ,Routes , Route , createRoutesFromElements , createBrowserRouter} from 'react-router-dom'
import {Feed ,ChannelDetail,SearchFeed,VideoDetail} from './components'


const router = createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='/' element={<Feed />} />
    <Route path='video/:id' element={<VideoDetail />} />
    <Route path='channel/:id' element={<ChannelDetail />} />
    <Route path='search/:searchTerm' element={<SearchFeed />} />
  </Route>
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(router)}/>
  </React.StrictMode>,
)
