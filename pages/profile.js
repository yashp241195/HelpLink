import React from 'react'
import ExploreTabs from '../components/Profile/ExploreTabs'
import DrawerLayout from '../hoc/DrawerLayout'

const profilePage = () => {
    return (
            <DrawerLayout>
                <ExploreTabs />
            </DrawerLayout>
    )
}

export default profilePage