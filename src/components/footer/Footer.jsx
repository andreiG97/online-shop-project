import React from 'react'
import {Link} from 'react-router-dom';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import './Footer.css';

function Footer() {
    return (
        
        <footer className="pt-3 bg-light">
      
        <div className="container-fluid container-min-max-width
                        d-flex justify-content-between">
        
            <div>
               
                <p className="m-0">
                    <Link to='/about'>About</Link>
                </p>
                <p className="my-1"><Link to='/careers'>Careers</Link></p>
                <p className="m-0">
                    <Link to='/termsandconditions'>Terms and Conditions</Link>
                </p>
            </div>
         
            <div>
                <h3 className="h5">Contact</h3>
                <p className="mb-1">
             
                    <a href="mailto:andrei.grideanu@gmail.com">
                        <Mail className="mr-1 mb-1 footer-icon"/>
                        andrei.grideanu@gmail.com
                    </a>
                </p>
                <p className="m-0"><Phone className="mr-1 footer-icon"/>+40748170280</p>
            </div>
            
            <div>
                <h3 className="h5">Search me:</h3>
                <p className="mb-1">
                    <a href="https://github.com/andreiG97">
                        <GitHub className="mr-1 mb-1 footer-icon"/>
                        andreiG97
                    </a>
                </p>
                <p className="m-0">
                    <a href="https://www.linkedin.com/in/andrei-grideanu-4234581a6/">
                        <LinkedIn className="mr-1 footer-icon"/>
                        andrei-grideanu
                    </a>
                </p>
            </div>
        </div>
        <div className="text-center py-3">
            &copy; Grideanu Andrei 2021
        </div>
    </footer>
    )
}

export default Footer
