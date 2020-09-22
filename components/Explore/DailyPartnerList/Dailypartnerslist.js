import React from 'react'

const Dailypartnerslist = () => {
    
    const li = {
        dailySuggestions:[
            {name:"Simran", },
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

export default Dailypartnerslist
