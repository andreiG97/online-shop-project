import React from 'react'
import Layout from '../about/About';
import './About.css';


function About() {
    return (
        <div>

           <Layout>
                <div className="about-page container-min-max-width">
                    <h2> About my work </h2>
                    <p> My project is using a variety of tehnologies, such as:  </p>
                    <ul>
                        <li>React.js</li>
                        <li>React Router</li>
                        <li>Redux.js si Redux-Thunk</li>
                        <li>Bootstrap</li>
                        <li>Firebase API</li>
                    </ul>
                    <p>Functionalities</p>
                    <ul>
                        <li>Adding and deleting products from cart</li>
                        <li>Keeping track of your favourite products list</li>
                        <li>Google and Facebook login</li>
                        <li>Routing</li>
                        <li>Responsive design</li>
                    </ul>
                </div>
            </Layout>    
        </div>
    )
}

export default About
