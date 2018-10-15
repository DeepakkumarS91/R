import React, {Component} from 'react';
import Form from './components/Form';
import Recipes from './components/Recipes';


class App extends Component{

  state={
    Recipe:[]
  }
  getRecipe=async(e)=>{
    e.preventDefault();
    const search=e.target.searched.value;
const Api_Key='Ur API Key';
const Api_Call=await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${Api_Key}&q=${search}&count=9`);
const data=await Api_Call.json();
console.log(data);
this.setState({
  Recipe:data.recipes
})
console.log(this.state.Recipe);
 }

 componentDidMount=()=>{
  const jsonrecipe=localStorage.getItem("recipes");
  const converted=JSON.parse(jsonrecipe);
  this.setState({Recipe:converted})
}

  
componentDidUpdate=()=>{
    
  const storages=JSON.stringify(this.state.Recipe);
localStorage.setItem("recipes",storages);
console.log(storages)
console.log('abc');
}





render(){
  return(
    <div className="App">
     <header className="App-header">
     <h1 className="App-title">RECIPE SEARCH</h1>
     <h2 className="App-subtitle">search recipes for all</h2></header>
     <Form getRecipe={this.getRecipe}/>
     <Recipes Recipe={this.state.Recipe} />
     </div>
  )
}


}
export default App
