import React from 'react'
import Topicwisequestionslist from './TopicwiseQuestionsList/Topicwisequestionslist'
import Suitablequestionslist from './SuitableQuestionsList/Suitablequestionslist'

const Questions = () => {
    return (
        <div>
            <h2>Questions</h2>
            <br/><br/>
            ..... List of more suitable questions answers .....
            <br/>
            <Suitablequestionslist />
            <br/>
            ..... List of topic-wise/ tag-wise questions answers .....
            <br/>
            <Topicwisequestionslist />
            <br/>
            *** List of answered questions .....
            <br/><br/>
            *** List of asked questions .....
            <br/><br/>
        </div>
    )
}

export default Questions

