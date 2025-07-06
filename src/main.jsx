import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Home/Homepage.jsx';
import Login from './pages/Authentication/Login.jsx';
import Signup from './pages/Authentication/Signup.jsx';
import Error from './pages/Error.jsx';
import { store } from './store/store.js';
import {Provider} from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/*",
    element: <Error/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <RouterProvider router={router} />
  </Provider>
);
