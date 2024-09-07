import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home/Home';
import Appointment from './Components/Appointment/Appointment';
import Doctors from './Components/Doctors/Doctors';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
import Learnmore from './Components/Learnmore/Learnmore';
import Contactus from './Components/Contactus/Contactus';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/appointment',
        element: <Appointment />,
      },
      {
        path: '/doctors',
        element: <Doctors />,
      },
      {
        path: '/sign-up',
        element: <Signup />,
      },
      {
        path: '/sign-in',
        element: <Signin />
      },
      {
        path: '/learn-more',
        element: <Learnmore />
      },
      {
        path: '/contact-us',
        element: <Contactus />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
