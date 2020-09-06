import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesAction'


const Activities = (props) => {
    
    const [activities, setActivities] = useState([])

    useEffect(() => {
        setActivities({
            activities: activities.push
        })
    }, [])
    
    return (
        <>
            <p></p>
        </>
    )
}

const mapStateToProps = state => {
    return {
        response: state.cities.activities,
    }
}

export default connect(mapStateToProps, null)(Activities)