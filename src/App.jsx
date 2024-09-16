import React from 'react';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/blog",
      element: <Blog/>
    },
    {
      path: "/blogdetails",
      element: <BlogDetails/>
    },

  ]);

  return (
    <>
       <RouterProvider router={router} />
    </>
  );
}

export default App;
