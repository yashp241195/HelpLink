import React from 'react'

const Topicwisequestionslist = () => {
    

    const li = {listOftopicwisequestionsanswers:[
        {   
            topicName:"relationship",
            questionsList:         
                [
                    {
                        question : "What is ..",
                        answer: "This is ...",
                        hashtags:["love", "life"]
                    },
                    {
                        question : "What is ..",
                        answer: "This is ...",
                        hashtags:["trust", "question"]
                    }
            
                ]
        },
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
