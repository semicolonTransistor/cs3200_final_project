const {Link, useHistory} = window.ReactRouterDOM;

import recipeService from "./recipe-service"
const { useState, useEffect } = React;
const RecipeList = () => {
  const history = useHistory()
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    findAllRecipes()
  }, [])
  const findAllRecipes = () =>
    recipeService.findAllRecipes()
      .then(recipes => setRecipes(recipes))

  return(
    <div>
      <h2>Recipes</h2>
      <button className={'btn btn-primary'} onClick={() => history.push("/recipes/new")}>
        Add Recipe
      </button>
      <ul className="list-group">
        {
          recipes.map(recipe =>
            <li key={recipe.id} className={'list-group-item'}>
              <Link to={`/recipes/${recipe.id}`}>
                {recipe.title} by {recipe['author'].username}
              </Link>
            </li>)
        }
      </ul>


    </div>

  )
}

export default RecipeList;
