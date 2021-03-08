import React from 'react';
import Header from '../header/Header';
import Footer from '../Footer';
import "./Layout.css"

function Layout(props) {
    const { children, user } = props
    return (
        <div className="layout">
            <Header 
                user={user} 
                />
                {children}
            <Footer/>
        </div>
    )
}

export default Layout
