import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'

const Suitablequestionslist = () => {
    
    const li = {
        listOfsuitablequestions:[
            {
                question : "What is ..",
                answer: "This is ...",
                hashtags:["dating", "approaching"]
            },
            {
                question : "What is ..",
                answer: "This is ...",
                hashtags:["grooming", "conversation"]
            },
        ]
    }


    return (
        <div>
            <QuestionCard />
           <br/>
           <pre>
                { JSON.stringify(li,null,2) }
            </pre>
        </div>
    )
}

export default Suitablequestionslist
