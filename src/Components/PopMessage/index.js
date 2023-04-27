import React from 'react'
import { Modal } from 'react-bootstrap'

const PopMessage = ({ show,message }) => {
    return (
        <React.Fragment>
            <Modal show={show} >
                <Modal.Header closeButton>
                    <Modal.Title >Success!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {message}
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default PopMessage