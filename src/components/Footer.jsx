import React from 'react'
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div>
                <Link to='/about'>About</Link>
                <Link to='/careers'>Careers</Link>
                <Link to='/termsandconditions'>Terms and Conditions</Link>
            
        </div>
    )
}

export default Footer
