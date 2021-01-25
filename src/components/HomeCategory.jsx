import React from 'react'

function HomeCategory(props) {
    const { image, title, descript } = props
    return (
        <div className='col-6'>
            <img src={image} alt="" className="w-100"/>
            <h2 className="mt-3">{title}</h2>
            <p>{descript}</p>
        </div>
    )
}

export default HomeCategory
