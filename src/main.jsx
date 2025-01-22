import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Login from './components/login.jsx';
import Home from './components/home.jsx';
import Alldata from './components/alldata.jsx';
import Alldata2 from './components/alldata2.jsx';
import { Provider
  
 } from 'react-redux';
 import store from './components/store/store.js';
 import Signup from './components/Signup.jsx';
// Define the routes
const router = createBrowserRouter([
  {
    path: '/login', // Changed to /login
    element: <Login />,
  },
  {
    path: '/home', // Changed to /home
    element: <Home />,
  },
  {
    path: '/', // Set default route to /login
    element: <Login />,
  },
  {
    path:"/alldata",
    element:<Alldata/>
  },
  {
    path:"/alldata2",
    element:<Alldata2/>
  },
  {
    path:"/signup",
    element:<Signup/>
  }

]);

createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
);
