import React from 'react'
import style from './recipe.module.css'

function Recipe({title, calories, image, ingredients}) {
  return (
    <div className={style.recipe}>
      <h1> {title} </h1>
      <ol>
        {
          ingredients.map((ingredient,index) => (
            <li key={index}> {ingredient.text} </li>
          ))
        }
      </ol>
      <p> { calories} </p>
      <img className={style.image} src={image} alt="decorative graphics" />

    </div>
  )
}

export default Recipe
