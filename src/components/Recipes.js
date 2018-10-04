import React, {Component} from 'react';
import {Link} from 'react-router-dom';


const Recipes=(props)=>(
    <div className="container">
    <div className="row">
    {console.log(props)}
    {
        props.Recipe.map((recipe)=>{
          return( 
     <div key={recipe.recipe_id} className="col-md-4" style={{marginBottom:"25px"}}>
     <div className="recipes__box">
     <img className="recipe__box-img" 
     src={recipe.image_url} alt={recipe.title}/>
     <div className="recipe__text">
     <h5 className="recipes__title">      
     {recipe.title.length<20?`${recipe.title}`:
     `${recipe.title.substring(0,25)}...`}</h5>
     <p className="recipes__subtitle">Publisher:<span>{recipe.publisher}</span></p>
     </div>
     
     <button className="recipe_buttons">
     <Link to={{pathname:`/recipe:${recipe.recipe_id}`, state:{recipes:recipe.recipe_id}}}>Click to View Recipe
     </Link>
     </button>
     
     </div>
     </div>

        
         ) })
        }
        </div>
    </div>  
)

export default Recipes