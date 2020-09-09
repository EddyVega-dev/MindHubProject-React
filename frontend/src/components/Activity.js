import React from 'react'

const Activity = (props) => {

    console.log(props);

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
                minWidth: '5vh',
                textAlign: 'center',
                }}>
                {props.activity.title}
            </div>
        </>
    )
}

export default Activity