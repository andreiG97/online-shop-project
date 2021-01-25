import React from 'react';
import {Link} from 'react-router-dom';

function HomeCategory(props) {
    const { image, title, descript, routeParam } = props
    return (
        <div className='col-6'>
            <Link to={`/category/${routeParam}`}>
                 <img src={image} alt="" className="w-100"/>
                 <h2 className="mt-3">{title}</h2>
                 <p>{descript}</p>
            </Link>
        </div>
    )
}

export default HomeCategory
