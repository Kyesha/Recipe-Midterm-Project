import React ,{useEffect, useState,  } from 'react';
import './App.css';
import Recipe from './components/Recipe';
import Navbar from './components/Navbar';

const App = () => {
  const APP_ID = '400795d8';
  const APP_KEY='2d12d5547c7a80dd232839b408b95f37';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(

    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

    return (
      <div className="App">
       <form onSubmit={getSearch} className="search-form" >
         <input
           className="search-bar"
           type="text"
           value={search}
           onChange={updateSearch}
           />
          <button className="search-button" type="submit">Search</button>
       </form>
       <div>
       {recipes.map(recipe =>(
          <Recipe
           key={recipe.recipe.label}
           title={recipe.recipe.label}
           calories={recipe.recipe.calories}
           image={recipe.recipe.image}
           ingredients={recipe.recipe.ingredients}
           />
       ))}
    </div>
  </div>
    )
  }
  // this is giving me an error
 // <Navbar />

export default App;
