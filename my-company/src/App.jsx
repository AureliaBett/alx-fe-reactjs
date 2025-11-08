import { StrictMode, useState } from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import './App.css'

const router = createBrowserRouter([
 
   { path: "/", element: <Home /> },    
   { path: "/about", element: <About /> },
   { path: "/services", element: <Services /> },
    { path: "/contact", element: <Contact /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider   router ={router}/>

  </StrictMode>
)