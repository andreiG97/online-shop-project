import React from 'react';
import {Link} from 'react-router-dom';

function HomeCategory(props) {
    const { image, title, descript, routeParam } = props
    return (
        <div className='col-4 mt-3'>
            <Link to={`/category/${routeParam}`}>
                 <img src={image} alt="" className="w-100 h-50 rounded"/>
                 <h2 className="h4 my-1">{title}</h2>
                 <p className="m-0">{descript}</p>
            </Link>
        </div>
    )
}

export default HomeCategory
