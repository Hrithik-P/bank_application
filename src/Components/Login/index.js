import React, { Fragment, useState } from 'react'
import { Form, Container, Row, Card, Col } from "react-bootstrap";
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = () => {

    const [users, setUser] = useState({})

    const { user, balance } = useSelector((state) => state.bank)

    const navigate = useNavigate();

    const handleInput = (e) => {
        const data = users;
        const { name, value } = e.target;
        data[name] = value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user?.email == users?.email && user.password == users?.password) {
            navigate('/home');
        } else {
            alert("Please Check Your Password and Email Address are correct");
        }
    };
    return (
        <Fragment>
            <Container>
                <h2 className='text-center'>New Bank</h2>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card className='mt-4'>
                            <Card.Body>
                                <Card.Title className='mb-4'>Login into Your Account</Card.Title>
                                <Form onSubmit={(e) => handleSubmit(e)}>
                                    <div className='mb-3'>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                required
                                                name='email'
                                                onChange={(e) => handleInput(e)}
                                            />
                                        </Form.Group>
                                    </div>

                                    <div className='mb-3'>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                required
                                                name="password"
                                                onChange={(e) => handleInput(e)}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='mb-3'>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Remember Me" />
                                        </Form.Group>
                                    </div>


                                    <Button content="Sign In" />


                                </Form>
                            </Card.Body>
                        </Card>



                    </Col>
                </Row>
            </Container>

        </Fragment>
    )
}

export default Login