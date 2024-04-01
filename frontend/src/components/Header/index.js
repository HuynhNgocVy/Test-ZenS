import React from 'react'
import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avatar.png'

function Header() {
  return (
    <header id='header'>
        <div className='header-container'>
            <div className='header-logo'>
                <img src={logo} />
            </div>
            <div className='heaader-user'>
                <div className='info'>
                    <p className='by'>Handicrafted by</p>
                    <p className='name'>Jim HLS</p>
                </div>
                <div className='avatar'>
                    <img src={avatar} />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header