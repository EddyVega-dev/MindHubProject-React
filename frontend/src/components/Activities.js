import React, { useEffect, useState } from 'react'
import {Preloader, Row, Col} from "react-materialize";
import Axios from 'axios'
import Activity from './Activity'
import '../styles/activities.css'

const Activities = (props) => {
    
    const [activities, setActivities] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const responseActivity = await Axios.get(`http://127.0.0.1:4000/api/activities/${props.idItinerary}`)
        setTimeout(() => {
            setActivities(responseActivity.data.searchActivity)
            setLoading(false)
        }, 500)
    }

    useEffect(() => {
       fetchData()
    }, [])

    return (
        <>
            <div className='wrapperActivities'>
                
                    { (loading) ? <div className='center'><Preloader active color="blue" flashing={false} size="big" /></div> :
                        activities.map((activity, index) => {
                        return (
                            
                            <Activity  key={index} activity={activity}/>
                            
                        )
                    })}
                
            </div>
        </>
    )
}

export default Activities