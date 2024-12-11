import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contactus from './components/Contactus/Contactus.jsx'
import User from './components/User/User.jsx'
import Github , {githubInfoLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/> ,
    children: [
      {
        path: '',
        element: < Home />
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path:'contactus',
        element: < Contactus />
      },
      {
        path:'User/:userid',
        element: <User/>
      },
      {
        path:'github',
        element: <Github/>,
        loader:githubInfoLoader,
      }
    ]
  }
])
//2nd of writting the router function 
/*
const router = createBrowserRouter(
  createroutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contactus' element={<Contactus/>}/>
    </Route>
  )
)
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
