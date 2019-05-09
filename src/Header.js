import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
  return (
      <header>
        <img alt="logo" className="logo" src='https://media.licdn.com/dms/image/C560BAQHoPwd6kJCrGg/company-logo_200_200/0?e=2159024400&v=beta&t=kdtbL0qyZTqi1hxX6e0huRiKVvVSt_okB_Jm9qTTDsc'/>
        <h1 className="header-name">Serverless Guru</h1>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/videos">
            <li>Videos</li>
          </Link>
        </ul>
      </header>
  )
}

export default Header;
