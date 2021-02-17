import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "./Layout.css"

function Layout(props) {
    const { children, user, signOut } = props
    return (
        <div className="layout">
            <Header 
                user={user} 
                signOut={signOut}
                />
                {children}
            <Footer/>
        </div>
    )
}

export default Layout
