import React from 'react'
import DrawerLayout from '../hoc/DrawerLayout'
import Notifications from '../components/Notifications/Notifications'

const notificationsPage = () => {
    return (
            <DrawerLayout>
                <Notifications />
            </DrawerLayout>
    )
}

export default notificationsPage
