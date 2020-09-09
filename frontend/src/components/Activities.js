import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Activity from './Activity'

const Activities = (props) => {
    
    const [activities, setActivities] = useState([])

    const fetchData = async () => {
        const responseActivity = await Axios.get(`http://127.0.0.1:4000/api/activities/${props.idItinerary}`)
        const activityItinerary= responseActivity.data.searchActivity
        setActivities(activityItinerary)
    }

    useEffect(() => {
       fetchData()
    }, [])

    return (
        <>
            {/* (activities.length !== 0) ?  */activities.map((activity, index) => {
                return (
                    <Activity  key={index} activity={activity}/>
                )
            }) /* : <p>nop</p> */}
        </>
    )
}

export default Activities