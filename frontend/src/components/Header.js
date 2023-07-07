import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row bg-dark'>
                    <div className='col-sm-5 text-light r ps-5'>
                        <h1>SIPL<b className='text-danger'> TASK</b></h1>
                    </div>
                    <div className='col-sm-7'>
                        <ul>
                            <Link to='/'><li>Home</li></Link>
                            <Link to='/register'><li>Register</li></Link>
                            <Link to='/show'><li>Show Records</li></Link>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;