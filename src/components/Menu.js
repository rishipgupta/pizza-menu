import React from 'react'
import { pizzaData } from '../data'

const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {pizzaData.map((pizza) => {
        return (
          <div>
            {/* images are placed in public folder so that we can dynamically reference the path easily */}
            <img src={pizza.photoName} alt={`${pizza.name}`} />
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
          </div>
        )
      })}
    </main>
  )
}

export default Menu
