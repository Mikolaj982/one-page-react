import React from 'react'

export default function Box({isNew, label}) {

    return (
        <div>
            {isNew ? <div className='isNew'></div> : ''}
            <div>{label}{isNew ? <p>Nowość!</p> : ''}</div>
            
        </div>
    )
}