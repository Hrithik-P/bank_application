import React, { Fragment, useState } from 'react'
import { Button, Modal, Nav } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiDownloadCloud, FiHome, FiLogOut, FiUploadCloud } from 'react-icons/fi';
import { FaRegShareSquare, } from 'react-icons/fa';
import { IoDocumentTextOutline, } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/bank/bankReducer';
const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [logout, setLogout] = useState(false)
    const navlinks = [
        { to: '/home', label: "Home", icon: <FiHome /> },
        { to: '/withdraw', label: "Withdraw", icon: <FiDownloadCloud /> },
        { to: '/deposit', label: "Deposit", icon: <FiUploadCloud /> },
        { to: '/transfer', label: "Transfer", icon: <FaRegShareSquare /> },
        { to: '/statement', label: "Statement", icon: <IoDocumentTextOutline /> },

    ]

    const active = {
        color: '#87CEEB',
        textDecoration: 'underline'
    };
    const notActive = {
        color: 'black',
        textDecoration: "none"
    };
    const logoutUser = () => {
        dispatch(userLogout());
        navigate('/')
    }
    return (
        <React.Fragment>
            <h1 className='text-center mt-5'>New Bank</h1>
            <div className=" d-flex justify-content-center mt-5">
                {navlinks.map((item) => (
                    <Fragment key={item.to}>
                        <Link to={item.to} onClick={() => setLogout(false)} className='d-flex align-items-center mx-2' style={location.pathname === item.to && !logout ? active : notActive}>

                            {item.icon}
                            <span>{item.label}</span>

                        </Link>
                    </Fragment>
                ))}
                <Fragment >
                    <div className='d-flex align-items-center mx-2' onClick={() => setLogout(true)} style={logout ? active : notActive}>
                        <FiLogOut />

                        <span>Logout</span>

                    </div>
                </Fragment>
            </div>
            <Modal show={logout} onHide={() => setLogout(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you Realy wish to logout from Your Account?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setLogout(false)}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => logoutUser()}>
                        Logout
                    </Button>
                </Modal.Footer>
            </Modal>

        </React.Fragment>
    )
}

export default Header