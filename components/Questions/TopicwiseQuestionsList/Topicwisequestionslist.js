import React from 'react'

const Topicwisequestionslist = () => {
    

    const li = {topicWiseQuestions:[
        {questions:"what is .."},
        {questions:"what is .."},
    ]}


    return (
        <div>
           <br/>
           <pre>
                { JSON.stringify(li,null,2) }
            </pre>
        </div>
    )
}

export default Topicwisequestionslist
