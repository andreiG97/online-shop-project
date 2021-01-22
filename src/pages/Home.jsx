import React from 'react'
import {Link} from 'react-router-dom';
import Layout from '../components/Layout'

function Home() {
    return (
        <div>
            <Layout>
                 <Link to='/login'>Login</Link>
                <h1>Home</h1> 
                <button type='button' className='btn btn-primary'>Primary</button>
           </Layout>
        </div>
    )
}

export default Home
