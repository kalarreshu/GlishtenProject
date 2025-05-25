"use client"
// import React from 'react'
// import Divide from '../LifeCycleComponent/Divide'
// const App = () => {
//   return (
//    <Divide/>
//   )
// }

// export default App

//import React from 'react'
// import Login from '../LoginPage/Login'
//import "./index.css";
// import { createBrowserRouter,RouterProvider  } from 'react-router-dom';
// import P1About from '../ReactRouter/P1About' 
// import P1Home from '../ReactRouter/P1Home';
// import P1Contact from '../ReactRouter/P1Contact';

// const page = () => {
//  const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <P1Home />,
//     },
//      {
//         path: "/about",
//         element: <P1About />,
//     },
//      {
//         path: "/contact",
//         element: <P1Contact />,
//     },
//  ]);
//  return <RouterProvider router={router} />;
// };

// // export default page;
// import Login from '../LoginPage/Login'
// // import Navbar from '../Header/Navbar'

// const App = () => {
//   return (
//     <Login/>
//     // <Navbar/>
//   )
// }

// export default App

import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from '../Home/Home'
import Cart from '../Home/Cart'
import AppLayout from '../Home/AppLayout'
import Login from '../LoginPage/Login'
import ProtectedRoute from '../Home/ProtectedRoute'
const App = () => {
  const root=createBrowserRouter(
    createRoutesFromElements(
      <Route>
       <Route path='/Login' element={<Login/>}/>
      <Route path='/' element={<AppLayout/>}>
      <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      </Route>
      </Route>
    )
  );
  return <RouterProvider router={root}/>;
  
};

export default App