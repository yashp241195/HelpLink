import React from 'react'
import Questions from '../components/Questions/Questions'
import Layout from '../hoc/Layout'

const questionsPage = () => {
    return (
        <div>
            <Layout>
                <Questions />
            </Layout>
        </div>
    )
}
export default questionsPage