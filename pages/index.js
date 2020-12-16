import React from 'react'
import HomeLayout from '../hoc/HomeLayout'
import Home from '../components/Home/Home'

const homePage = () => {
    return (
            <HomeLayout>
                <Home/>
            </HomeLayout>
    )
}

export default homePage
