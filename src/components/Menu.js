import React from 'react'
import { pizzaData } from '../data'
import PizzaComponent from './PizzaComponent';
const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <p>Authentic Italian cuisine. Multiple dishes to chose from. All from stone oven, all organic, all delicious.</p>
      <ul className='pizzas'>
        {pizzaData.length > 0 && pizzaData.map((pizza) => {
          return (
            {/* <PizzaComponent name={pizza.name} ingredient={pizza.ingredients} price={pizza.price} photoName={pizza.photoName} /> */ },
            <>
              <PizzaComponent pizza={pizza} />
            </>
          )
        })}
      </ul>
    </main>
  )
}

export default Menu;
