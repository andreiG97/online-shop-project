import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "./Layout.css"

function Layout(props) {
    const { children } = props
    return (
        <div className="layout">
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout
