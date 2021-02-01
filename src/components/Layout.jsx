import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import "./Layout.css"

function Layout(props) {
    const { children } = props
    return (
        <div className="layout">
            <Header/>
            <Link to='/'>Home</Link>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout
