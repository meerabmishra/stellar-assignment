import React from 'react'
import logo from '../asset/logo.png'
import './Header.css'
function Header({setToggle}) {

  return (
    <div className='header'>
      <div className='left'>
      <img src={logo} alt="" className='logo' />
      <ul className='unorderedList1'>
        <li className='list' >Products<i className="arrow-down"></i></li>
        <li className='list'>Pricing</li>
        <li className='list'>Support</li>
      </ul>
      </div>
      <div class="right">
        <button className='btn noborder'>Sign In</button>
        <button className='btn' onClick={() => setToggle(true)} >Sign Up</button>
      </div>

    </div>
  )
}

export default Header