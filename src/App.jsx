import logo from './logo.svg';
import './App.css';
import {RouterProvider, createBrowserRouter, createHashRouter, useNavigate} from 'react-router-dom'
import Layout from './Layout/Layout';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Noutfound from './Notfound/Noutfound';
import Form from './Form/Form';
import { AuthContextProvider } from './AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import LoginForm from './LoginForm/LoginForm';
function App() {

 

  let routes=createHashRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'contact',element:<Contact/>},
      {path:'form',element:<Form/>},
      {path:'loginform',element:<LoginForm/>},
      {path:'*',element:<Noutfound/>}
    ]}
  ])
  
  return <>

  <AuthContextProvider>

  <RouterProvider router={routes}/>
  <Toaster />
  </AuthContextProvider>


  
  </>
}

export default App;
