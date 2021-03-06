import React from 'react'
import ExploreTabs from '../components/Explore/ExploreTabs'
import DrawerLayout from '../hoc/DrawerLayout'

const explorePage = () => {
    return (
            <DrawerLayout>
                <ExploreTabs />
            </DrawerLayout>
    )
}

export default explorePage