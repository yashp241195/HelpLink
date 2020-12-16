import React from 'react'
import DrawerLayout from '../hoc/DrawerLayout'
import Counselling from '../components/Counselling/Counselling'

const counsellingPage = () => {
    return (
        <DrawerLayout>
            <Counselling />
        </DrawerLayout>
    )
}

export default counsellingPage
