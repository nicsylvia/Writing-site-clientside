import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import Blogs from '../Blogs/Blogs'
import ContactScreen from '../Contact/ContactScreen'
import HomeScreen from '../HomeScreen/HomeScreen'
import SinglePageScreen from '../SinglePageScreen/SinglePageScreen'
import UploadBlogs from '../UploadPost/UploadBlogs'

const AllRoutes = () => {

    const element = useRoutes([

        {
            path: "/",
            element: <HomeScreen />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <SignUp />
        },
        {
            path: "/send-me-a-message",
            element: <ContactScreen />
        },
        {
            path: "/single-blog-post/:id",
            element: <SinglePageScreen />
        },
        {
            path: "/all-blogs",
            element: <Blogs />
        },
        {
            path: "/upload-blog",
            element: <UploadBlogs />
        }
    ])

  return element

}
export default AllRoutes