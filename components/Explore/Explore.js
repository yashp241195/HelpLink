import React from 'react'
import Dailypartnerslist from './DailyPartnerList/Dailypartnerslist'
import Nearbypartnerslist from './NearbyPartnersList/Nearbypartnerslist'

const Explore = () => {
    return (
        <div>
            <h2>Explore Partners</h2>
            <br/><br/>
            ..... List of potential partners available nearby (Swipe left/right) .....
            <br/>
            {/* <Nearbypartnerslist /> */}
            <br/>
            ..... List of more suitable potential partners (daily recommendations) .....
            <br/>
            <Dailypartnerslist />
            <br/>
            *** List of matched partners (message+)
            <br/><br/>

        </div>
    )
}

export default Explore
