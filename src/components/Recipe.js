import React,{Component} from 'react';
import {Link} from "react-router-dom"
const Api_Key='Ur API Key';
class Recipe extends Component{

    state={activeRecipe:[]}

    componentDidMount=async()=>{
            const recipeid=this.props.location.state.recipes;
            console.log(recipeid)
        
        const requestApi=await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/get?key=${Api_Key}&rId=${recipeid}`);
        const stats=await requestApi.json();
        
        this.setState({activeRecipe:stats.recipe})
        console.log(this.state.activeRecipe)    
    }
    

render(){
    const currentrecipe=this.state.activeRecipe;
            console.log(currentrecipe)  
    return(
        <div className="container">
            {this.state.activeRecipe.length!==0&&
            <div className="active-recipe">
            <img className="active-recipe__img"src={currentrecipe.image_url}/>
            
                <h3 className="active-recipe__titile">{currentrecipe.title}</h3>
            
            
                <h4 className="active-recipe__publisher">Publisher: <span> {currentrecipe.publisher}</span></h4>
                
                <p className="active-recipe__website">Website:<span><a href={currentrecipe.source_url}>{currentrecipe.source_url}</a></span>
                    </p>
                  
                    <button className="active-recipe__button">
                        <Link to='/'>Home</Link>
                    </button></div>}
         </div>
    )
}

}

export default Recipe
