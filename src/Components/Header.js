import React from 'react'
import globe from './globe.png'

export default function Header(){
    return (
        <div className='Header'>
            <img src={globe} alt="" className="globe-sym" />
            <p>My Travel Journel</p>
        </div>
    )
}