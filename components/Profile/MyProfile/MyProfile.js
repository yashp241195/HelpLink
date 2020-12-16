import React from 'react'
import MyProfileCardSwiper from '../MyProfileCardSwiper/MyProfileCardSwiper'

const MyProfile = () => {

    const li = {
        swipeSuggestions:[
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
            <MyProfileCardSwiper />
            <pre>
                { JSON.stringify(li,null,2) }
            </pre>
        </div>
    )
}

export default MyProfile
