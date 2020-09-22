import React from 'react'

const Suitablequestionslist = () => {
    
    const li = {suitableQuestions:[
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

export default Suitablequestionslist
