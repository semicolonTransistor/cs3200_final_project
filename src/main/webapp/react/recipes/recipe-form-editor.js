import recipeService from "./recipe-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const RecipeFormEditor = () => {
        const {id} = useParams()
        const [recipe, setRecipe] = useState({})
        useEffect(() => {
                if(id !== "new") {
                        findRecipeById(id)
                }
        }, []);
        const findRecipeById = (id) =>
          recipeService.findRecipeById(id)
            .then(recipe => setRecipe(recipe))
        const history = useHistory()
        const deleteRecipe = (id) =>
          recipeService.deleteRecipe(id)
            .then(() => history.goBack())
        const createRecipe = (recipe) =>
          recipeService.createRecipe(recipe)
            .then(() => history.goBack())
        const updateRecipe = (id, newRecipe) =>
          recipeService.updateRecipe(id, newRecipe)
            .then(() => history.goBack())
        return (
        <div>
          <h2>Recipe Editor</h2>
          <label>Id</label>
          <input disabled value={recipe.id} className="form-control"/>
          <label>Title</label>
          {/*<input onChange={(e) =>*/}
          {/*  setRecipe(recipe =>*/}
          {/*    ({...recipe, title: e.target.value}))}*/}
          {/*       value={recipe.title} className="form-control"/>*/}
          {/*<br/>*/}
        </div>
    )
}

export default RecipeFormEditor
