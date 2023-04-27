import React, { useState } from 'react'
import Header from '../Header'
import { Card, Form, ListGroup } from 'react-bootstrap'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { transferMoney, withdrawAmount } from '../../redux/bank/bankReducer'
import PopMessage from '../PopMessage'

const TransferMoney = () => {

    const [amount, setAmount] = useState(0);
    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false);
    const { balance } = useSelector((state) => state.bank)

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount < balance && amount > 0) {
            dispatch(transferMoney({ amount, email }))
            setAmount(0);
            setEmail("")
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 2000);
        } else {
            alert("You Don't have enough funds to complete this transaction")
        }
    };
    return (
        <div>
            <Header />
            <div className='d-flex justify-content-center mt-5'>

                <Card style={{ width: '50vw' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item className='fw-bolder px-3 py-2 my-2 fs-3 text-uppercase'>Transfer Money</ListGroup.Item>
                        <ListGroup.Item>
                            <Form onSubmit={(e) => handleSubmit(e)}>
                                <div className='mb-3'>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            required
                                            value={email}
                                            placeholder="Enter User Email"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>
                                </div>
                                <div className='mb-3'>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Amount</Form.Label>
                                        <Form.Control
                                            type="number"
                                            required
                                            value={amount}
                                            placeholder="Enter Amount to Transfer"
                                            onChange={(e) => setAmount(e.target.value)}
                                        />
                                    </Form.Group>
                                </div>

                                <Button content="Transfer" />
                            </Form>

                        </ListGroup.Item>

                    </ListGroup>
                </Card>
            </div>
            <PopMessage show={show} message="Amount Transfered Successfully" />
        </div>
    )
}

export default TransferMoney