import React from 'react'
import { pizzaData } from '../data'

const Menu = () => {
  return (
    <div>
      {pizzaData.map((pizza) => {
        return (
          <div>
            {/* images are placed in public folder so that we can dynamically reference the path easily */}
            <img src={pizza.photoName} alt={`${pizza.name}`} />
            <h2>{pizza.name}</h2>
            <p>{pizza.ingredients}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Menu
