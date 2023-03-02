import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import ContactScreen from '../Contact/ContactScreen'
import HomeScreen from '../HomeScreen/HomeScreen'
import SinglePageScreen from '../SinglePageScreen/SinglePageScreen'

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
            path: "/single-blog-post",
            element: <SinglePageScreen />
        }
    ])

  return element

}
export default AllRoutes