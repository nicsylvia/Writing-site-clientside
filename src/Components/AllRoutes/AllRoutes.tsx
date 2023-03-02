import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import HomeScreen from '../HomeScreen/HomeScreen'

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
        }
    ])

  return element

}
export default AllRoutes