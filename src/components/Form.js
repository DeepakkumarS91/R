import React, {Component} from 'react';


const Form=(props)=>{
    return(
    <form onSubmit={props.getRecipe} style={{marginBottom:"20px"}}>
        <input type="text" name="searched"  className="form__input"/>
        <button className="form__button">Search</button>
        
    </form>)
}
export default Form
