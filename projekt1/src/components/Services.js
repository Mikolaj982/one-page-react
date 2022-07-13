import React from 'react'
import Box from './Box'

export default function Services({}) {


  const boxes = [
    { label: 'Usługa 1', isNew : true },
    { label: 'Usługa 2', isNew : false },
    { label: 'Usługa 3', isNew : false },
    { label: 'Usługa 4', isNew : false },
    { label: 'Usługa 5', isNew : false },
    { label: 'Usługa 6', isNew : false },
  ]

    return (
    <section className="offer" id="offer">
      <div className="container">
        <h2>Czym zajmuje się nasza firma?</h2>
        <div className="offer-list">
          
          {boxes.map((box) => (
            <Box isNew={box.isNew} label={box.label} />
          ))}
          
        </div>
      </div>
    </section>
    )
}