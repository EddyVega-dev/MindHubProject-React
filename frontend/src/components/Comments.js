import React from 'react'
import { Button, Icon, Row, Col} from 'react-materialize'

const Comments = () => {
    return (
        <>
            <div>
                <Row>
                    <Col m={10} s={10}>
                        <input style= {{backgroundColor: 'white'}} className='center' id="comment" label="Your comment" /* onChange={readInput} *//>
                    </Col>
                    <Col m={2} s={2}>
                        <Button
                            node="button"
                            type="submit"
                            waves="light"
                            /* onClick={sendInfo} */
                            >
                            <Icon right>
                                send
                            </Icon>
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Comments