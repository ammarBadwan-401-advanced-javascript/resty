import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss'

const Header = () =>{
  return(
    <header>
        <h1>RESTY PROJECT</h1>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/history">History</NavLink>
            </li>
        </ul>
    </header>
  )
}

export default Header;
