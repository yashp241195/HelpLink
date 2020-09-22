import React from 'react'

const Nearbypartnerslist = () => {

    const li = {
        swipeSuggestions:[
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

export default Nearbypartnerslist
