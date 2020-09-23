import React from 'react'

const Dailypartnerslist = () => {
    
    const li = {
        dailySuggestions:[
            {
                name:"Simran",
                gender:"female",
                age:22,
                location:"Delhi",
                gps:"(123.2,77.5)",
                preferance:{
                    gender:"male",
                    ageGroup:"20-25",
                    distanceRadius:"20km"
                },
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

export default Dailypartnerslist
