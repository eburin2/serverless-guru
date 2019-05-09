import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
      <header>
        <img alt="logo" className="logo" src='https://media.licdn.com/dms/image/C560BAQHoPwd6kJCrGg/company-logo_200_200/0?e=2159024400&v=beta&t=kdtbL0qyZTqi1hxX6e0huRiKVvVSt_okB_Jm9qTTDsc'/>
        <h1 className="header-serverless-guru">Serverless Guru</h1>
        <div className="flex">
          <NavLink exact to="/" className="main-nav" activeClassName="main-nav-active">
            Home
          </NavLink>
          <NavLink exact to="/blog" className="main-nav" activeClassName="main-nav-active">
            Blog
          </NavLink>
          <NavLink exact to="/videos" className="main-nav" activeClassName="main-nav-active">
            Videos
          </NavLink>
        </div>
      </header>
  )
}

export default Header;
