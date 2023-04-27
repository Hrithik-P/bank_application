import React, { useState } from 'react'
import Register from '../Register';
import Login from '../Login';
import { Col, Container, Row } from 'react-bootstrap';

const SignUp = () => {
    const [isLogin, setIsLogin] = useState(true);
    const changeLogin = (data) => {
        setIsLogin(data);
    };
    return (
        <div>
            <Container className='mt-5'>
                <Row className="justify-content-center">
                    <Col md={6}>
                        {isLogin ? <Login /> : <Register changeLogin={changeLogin}/>}

                        <div className='text-center mt-3' >
                            {isLogin ?
                                <>
                                    <span className='bg-bg-secondary'>Don't have an Account Yet? </span>


                                    <span className='text-primary' onClick={() => setIsLogin(!isLogin)}>
                                        Sign Up
                                    </span>

                                </>
                                : <>
                                    <span className='bg-bg-secondary'>Already Have a Account </span>


                                    <span className='text-primary' onClick={() => setIsLogin(!isLogin)}>
                                        Sign In
                                    </span>
                                </>
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignUp