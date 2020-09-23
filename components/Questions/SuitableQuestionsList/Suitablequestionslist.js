import React from 'react'

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
           <br/>
           <pre>
                { JSON.stringify(li,null,2) }
            </pre>
        </div>
    )
}

export default Suitablequestionslist
