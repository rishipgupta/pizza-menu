import React from 'react'

const PizzaComponent = (props) => {
  console.log(props);
  const { name, photoName, ingredients, price, soldOut } = props.pizza;

  // let className = soldOut ? 'pizza sold-out' : 'pizza'

  // if (soldOut) {
  //   return (
  //     <li className='pizza sold-out'>
  //       {/* images are placed in public folder so that we can dynamically reference the path easily */}
  //       <img src={photoName} alt={`${name}`} />
  //       <div>
  //         <h3>{name}</h3>
  //         <p>{ingredients}</p>
  //         <span>{price}</span>
  //       </div>
  //     </li>
  //   )
  // }

  return (
    <li className={`${soldOut ? 'pizza sold-out' : 'pizza'}`}>
      {/* images are placed in public folder so that we can dynamically reference the path easily */}
      <img src={photoName} alt={`${name}`} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{`${soldOut ? 'Sold Out' : price}`}</span>
      </div>
    </li>
  )
}

export default PizzaComponent;
