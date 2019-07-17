import React from 'react';
import Recipe from "./component/Recipe";
import './App.css';

const App = () => {

const API_ID = '2ba38d6f';
const APP_KEY='2f41b528be9fa32eddae086148b251bd';
const exampleReq ='https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free'

const [counter , setCounter] = useState(0);

useEffect( () => {


}, []);


const getRecipes = async () => {
  const response = await fetch('https://api.edamam.comsearch?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}'
);
const data = await response.json();
console.log(data);

setRecipes(data.hits);
};

return (
      <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button className="search-button" type="submit">
            search
          </button>
        </form>
        {recipe.map(recipe => (
          <Recipe />
        ))}
        ;
      </div>
);
};




export default App;
