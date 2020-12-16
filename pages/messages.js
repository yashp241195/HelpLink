import React from 'react'
import DrawerLayout from '../hoc/DrawerLayout'
import Message from '../components/Message/Message'

const messagePage = () => {
    return (
            <DrawerLayout>
                <Message />
            </DrawerLayout>
    )
}

export default messagePage
