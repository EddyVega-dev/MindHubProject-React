import React from 'react'

const Activity = (props) => {

    return (
        <>
            
            <div style={{
                backgroundImage: `url(${props.activity.imageActivity})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPositionY: '50%',
                fontSize: '5vh',
                padding: '8vh 0vh',
                marginTop: '1vh',
                minWidth: '25vw',
                margin: '0vw 1vw',
                textAlign: 'center',
                borderRadius: '2vw',
                }}>
                {props.activity.title}
            </div>
            
        </>
    )
}

export default Activity