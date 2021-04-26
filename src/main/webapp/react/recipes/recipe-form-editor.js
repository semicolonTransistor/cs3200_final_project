import recipeService from "./recipe-service"
import userService from "../users/user-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const RecipeFormEditor = () => {
    const {id} = useParams()
    const [recipe, setRecipe] = useState({})
    const [users, setUsers] = useState([])
    useEffect(() => {
        if(id !== "new") {
            findRecipeById(id)
        }
        findAllUsers()
    }, []);
    const findRecipeById = (id) =>
        recipeService.findRecipeById(id)
            .then(recipe => setRecipe(recipe))
    const findAllUsers = () =>
        userService.findAllUsers()
            .then(users => setUsers(users))
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
    if(recipe === undefined || recipe.author === undefined){
        return (<div>
            loading...
        </div>)
    }
    return (
        <div>
            <h2>Recipe Editor</h2>
            <label>Id</label>
            <input disabled value={recipe.id} className="form-control"/>
            <label>Title</label>
            <input onChange={(e) =>
                setRecipe(recipe =>
                    ({...recipe, title: e.target.value}))}
                   value={recipe.title} className="form-control"/>
            <br/>
            <label>Author</label>
            <select className = "form-select" onChange={(e) =>
                setRecipe(recipe =>
                    ({...recipe, author: users.find(user => user.id === parseInt(e.target.value))}))}
            value = {recipe.author.id }>
                {
                    users.map(user =>
                        <option value = {user.id}> {user.username} </option>)
                }
            </select>

            <button className="btn btn-warning" onClick={() => {history.goBack()}}>Cancel</button>
            <button className="btn btn-danger" onClick={() => deleteRecipe(recipe.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => updateRecipe(recipe.id, recipe)}>Save</button>
            <button className="btn btn-success" onClick={() => createRecipe(recipe)}>Create</button>
        </div>
    )
}

export default RecipeFormEditor
