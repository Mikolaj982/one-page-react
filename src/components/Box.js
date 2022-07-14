import React from 'react'

export default function Box({isNew, label}) {

    return (
        <div>
            {isNew ? <div className='isNew'></div> : ''}
            <p>{label}{isNew ? <p>Nowość!</p> : ''}</p>
            
        </div>
    )
}