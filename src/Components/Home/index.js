import React, { Fragment, useEffect } from 'react'
import Header from '../Header'
import { Card, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'


const Home = () => {

  const { user, balance } = useSelector((state) => state.bank)


  return (
    <Fragment>
      <Header />
      <div className='d-flex justify-content-center mt-5'>
        <Card style={{ width: '50vw' }}>
          <ListGroup variant="flush">
            <ListGroup.Item className='fw-bolder px-3 py-2 my-2 fs-3 text-uppercase'>Welcome {user?.name}</ListGroup.Item>
            <ListGroup.Item>
              <div className='d-flex '>
                <div className='text-secondary'>Your ID</div>
                <div className='fw-bolder ms-5'>{user?.email}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className='d-flex '>
                <div className='text-secondary'>Your Balance</div>
                <div className='fw-bolder ms-5'>{balance}</div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </Fragment>
  )
}

export default Home