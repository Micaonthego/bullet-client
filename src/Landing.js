import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div className="Landing">
            <header className="header">
                <div class="logo-box">
                    <img src="./whitebullet.png" alt="Logo" class="logo" />
        </div>
                <div className='text-box'>
                    <h1 className='heading-primary'>
                        <span className='heading-primary-main'>BULLET.</span>
                        <span className='heading-primary-sub'>you don't have to slow down to get in touch with yourself</span>
                    </h1>
                    <button class="ghost">
                        <Link to='/signin'>
                            Get Started
    </Link>
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Landing;
