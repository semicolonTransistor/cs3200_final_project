import recipeService from "./recipe-service"
import userService from "../users/user-service"
// import ingredientService from "../ingredient/ingredient-service"

const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const RecipeFormEditor = () => {
    const {id} = useParams()
    const [recipe, setRecipe] = useState()
    const [users, setUsers] = useState()
    const [ingredients, setIngredients] = useState()
    const [newIngredientId, setNewIngredientId] = useState()
    useEffect(() => {
        if (id !== "new") {
            findRecipeById(id)
        } else {
            setRecipe({
                ingredientsMapping:[]
            })
        }
    }, []);
    useEffect(() => {
        findAllUsers()
    }, []);
    useEffect(() => {
        findAllIngredients()
    }, []);
    const findRecipeById = (id) =>
        recipeService.findRecipeById(id)
            .then(recipe => setRecipe(recipe))
    const findAllUsers = () =>
        userService.findAllUsers()
            .then(users => setUsers(users))
    const findAllIngredients = () => {
        ingredientService.findAllIngredients()
            .then(ingredients => setIngredients(ingredients))
    }
    const history = useHistory()
    const deleteRecipe = (id) =>
        recipeService.deleteRecipe(id)
            .then(() => history.goBack())
    const createRecipe = (recipe) => {
        if(!checkRecipe(recipe)){
            return
        }
        recipeService.createRecipe(recipe)
            .then(() => history.goBack())
    }
    const updateRecipe = (id, newRecipe) => {
        if(!checkRecipe(recipe)){
            return
        }
        recipeService.updateRecipe(id, newRecipe)
            .then(() => history.goBack())
    }
    const checkRecipe = (recipe) => {
        if(recipe.title === undefined || recipe.title === ""){
            alert("Please input a title")
            return false;
        }

        if(recipe.instructions === undefined || recipe.instructions === ""){
            alert("Please input some instructions")
            return false;
        }

        if(recipe.author === undefined){
            alert("Please select an author");
            return false;
        }

        if(recipe.category === undefined){
            alert("Please select a category")
            return false;
        }

        return true;
    }
    if(recipe === undefined || ((recipe.author === undefined) && id !== "new") || recipe.ingredientsMapping === undefined ||
        ingredients === undefined || users === undefined){
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
                   value={recipe.title} className="form-control" placeholder="Give your recipe a name"/>
            <label> Instructions </label>
            <textarea className="form-control" onChange={(e) =>
                setRecipe(recipe =>
                    ({...recipe, instructions:e.target.value}))}
                      value={recipe.instructions} placeholder="Enter instructions here!"/>
            <label>Category</label>
            <select className = "form-select" onChange={(e) =>
                setRecipe(recipe => (
                    {...recipe, category: e.target.value}
                ))}
                    value = {recipe.category}>
                <option disabled selected value> -- select an category --- </option>
                <option value = "BREAKFAST"> Breakfast </option>
                <option value = "DINNER"> Dinner </option>
                <option value = "LUNCH"> Lunch </option>
                <option value = "SNACK"> Snack </option>
            </select>
            <label>
                <Link to={`/users/${recipe.author.id}`}>Author</Link>
            </label>
            <select className = "form-select" onChange={(e) =>
                setRecipe(recipe =>
                    ({...recipe, author: users.find(user => user.id === parseInt(e.target.value))}))}
                    value = {recipe.author === undefined ? undefined : recipe.author.id }>
                <option disabled selected value> -- select an author --- </option>
                {
                    users.map(user =>
                        <option value = {user.id}> {user.username} </option>)
                }
            </select>
            <label> Ingredients </label>
            <ul className={"list-group"}>
                <li className={"list-group-item"}>
                    <div className={"row"}>
                        <div className="col-sm">
                            <label>Name</label>
                        </div>
                        <div className="col-sm">
                            <label> Quantity </label>
                        </div>
                        <div className="col-sm">
                            <label> Unit </label>
                        </div>
                        <div className="col-sm">
                        </div>
                    </div>
                </li>
                {
                    recipe.ingredientsMapping.map(ingredientEntry =>
                        <li className={"list-group-item"}>
                            <div className={"row"}>
                                <div className="col-sm">
                                    <Link to={`/ingredients/${ingredientEntry.ingredient.id}`}>
                                        {ingredientEntry.ingredient.name}
                                    </Link>
                                </div>
                                <div className="col-sm">
                                    <input onChange={(e) =>
                                        setRecipe(recipe =>
                                            {
                                                let newIngredientsMapping = recipe.ingredientsMapping.map(
                                                    iEntry => {
                                                        if (iEntry.ingredient.id === ingredientEntry.ingredient.id){
                                                            //console.log({...iEntry, quantity: e.target.value})
                                                            return {...iEntry, quantity: e.target.value}
                                                        } else {
                                                            return {...iEntry}
                                                        }
                                                    }
                                                )
                                                return {...recipe, ingredientsMapping: newIngredientsMapping}
                                            }
                                        )
                                    }
                                           value={ingredientEntry.quantity} className="form-control"/>
                                </div>
                                <div className="col-sm">
                                    <input onChange={(e) =>
                                        setRecipe(recipe =>
                                            {
                                                let newIngredientsMapping = recipe.ingredientsMapping.map(
                                                    iEntry => {
                                                        if (iEntry.ingredient.id === ingredientEntry.ingredient.id){
                                                            return {...iEntry, unit: e.target.value}
                                                        } else {
                                                            return {...iEntry}
                                                        }
                                                    }
                                                )
                                                return {...recipe, ingredientsMapping: newIngredientsMapping}
                                            }
                                        )
                                    }
                                           value={ingredientEntry.unit} className="form-control"/>
                                </div>
                                <div className="col-sm">
                                    <button className="btn btn-danger" onClick={(e) =>
                                        setRecipe(recipe =>
                                            {
                                                let newIngredientsMapping = recipe.ingredientsMapping.filter(
                                                    iEntry => (iEntry.ingredient.id !== ingredientEntry.ingredient.id))
                                                return {...recipe, ingredientsMapping: newIngredientsMapping}
                                            }
                                        )}>Remove</button>
                                </div>
                            </div>
                        </li>

                    )
                }

                <li className={"list-group-item"}>
                    <div className={"row"}>
                        <div className="col-sm">
                            <label>New Ingredient</label>
                        </div>
                        <div className="col-sm">
                            <select className = "form-select" onChange={(e) =>
                                setNewIngredientId(e.target.value)} id="newIngredientId">
                                {
                                    ingredients
                                        .filter(ingredient => !recipe.ingredientsMapping
                                            .some(iEntry => iEntry.ingredient.id === ingredient.id))
                                        .map(ingredient =>
                                            <option value={ingredient.id}>{ingredient.name}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-success" onClick={(e) =>
                                setRecipe(recipe => {
                                        let ingredientId = parseInt(document.getElementById("newIngredientId").value)
                                        if(ingredientId !== undefined) {
                                            let newIngredientsMapping = recipe.ingredientsMapping
                                                .concat({id: ingredientId, quantity:1, unit: "ea", ingredient:
                                                        ingredients.find(i => i.id === ingredientId)})
                                            console.log({...recipe, ingredientsMapping: newIngredientsMapping})
                                            return {...recipe, ingredientsMapping: newIngredientsMapping}
                                        } else {
                                            return {...recipe}
                                        }
                                    }
                                )}>Add</button>
                        </div>
                    </div>
                </li>
            </ul>
            <br/>

            <div>
                <button className="btn btn-warning" onClick={() => {history.goBack()}}>Cancel</button>
                <button className="btn btn-danger" onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                <button className="btn btn-primary" onClick={() => {
                    if(id === "new") {
                        createRecipe(recipe)
                    } else {
                        updateRecipe(recipe.id, recipe)
                    }
                }}>Save</button>
            </div>
            <div className={'mb-4'}>
                <Link to={'/recipes'}>
                    <span>Back to Recipes List</span>
                </Link>
            </div>
        </div>
    )
}

export default RecipeFormEditor
