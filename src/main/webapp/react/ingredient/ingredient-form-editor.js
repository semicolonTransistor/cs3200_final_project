import ingredientService from "./ingredient-service"

const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const IngredientFormEditor = () => {
    const {id} = useParams()
    const [ingredient, setIngredient] = useState({})
    const [recipesUsing, setRecipesUsing] = useState([])
    useEffect(() => {
        if (id !== "new") {
            findIngredientById(id)
        }
    }, []);
    useEffect(() => {
        if (id !== "new") {
            findRecipesUsingIngredient(id)
        }
    }, []);
    const findIngredientById = (id) =>
        ingredientService.findIngredientById(id)
            .then(ingredient => setIngredient(ingredient))
    const findRecipesUsingIngredient = (id) =>
        ingredientService.findRecipesUsingIngredient(id)
            .then(recipes => setRecipesUsing(recipes))
    const history = useHistory()
    const deleteIngredient = (id) =>
        ingredientService.deleteIngredient(id)
            .then(() => history.goBack())
    const createIngredient = (ingredient) =>
        ingredientService.createIngredient(ingredient)
            .then(() => history.goBack())
    const updateIngredient = (id, newIngredient) =>
        ingredientService.updateIngredient(id, newIngredient)
            .then(() => history.goBack())
    return (
        <div>
            <h2>Ingredient Editor</h2>
            <label>Id</label>
            <input disabled value={ingredient.id} className="form-control"/>
            <label>Name</label>
            <input onChange={(e) =>
                setIngredient(ingredient =>
                    ({...ingredient, name: e.target.value}))}
                   value={ingredient.name} className="form-control"/>
            <label>{
                recipesUsing.length > 0 ?
                    `Recipes using ${ingredient.name}` :
                    ingredient.name === undefined || ingredient.name.length < 1 ?
                        'No Recipe Uses this Ingredient' :
                        `No Recipe Uses ${ingredient.name}`
            }</label>
            <ul className={"list-group"}>
                {
                    recipesUsing.map(recipe => {
                            if (recipe === undefined || recipe.author === undefined) {
                                return (
                                    <li key={recipe.id} className={"list-group-item"}>
                                        loading...
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={recipe.id} className={"list-group-item"}>
                                        <Link to={`/recipes/${recipe.id}`}>
                                            {recipe.title} by {recipe.author.username}
                                        </Link>
                                    </li>
                                )
                            }
                        }
                    )
                }
            </ul>
            <br/>
            <Link to={"/ingredients"}> Back to Ingredients </Link>
            <br/>
            <br/>
            <button className="btn btn-warning" onClick={() => {
                history.goBack()
            }}>Cancel
            </button>
            <button className="btn btn-danger" onClick={() => deleteIngredient(ingredient.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => {
                if (id !== "new") {
                    updateIngredient(ingredient.id, ingredient)
                } else {
                    createIngredient(ingredient)
                }

            }}>Save
            </button>

        </div>
    )
}

export default IngredientFormEditor
