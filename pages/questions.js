import React from 'react'
import QuestionsTabs from '../components/Questions/QuestionsTabs'
import DrawerLayout from '../hoc/DrawerLayout'

const questionsPage = () => {
    return (
            <DrawerLayout>
                <QuestionsTabs />
            </DrawerLayout>
    )
}
export default questionsPage