import ingredientService from "./ingredient-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const IngredientFormEditor = () => {
    const {id} = useParams()
    const [ingredient, setIngredient] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findIngredientById(id)
        }
    }, []);
    const findIngredientById = (id) =>
        ingredientService.findIngredientById(id)
            .then(ingredient => setIngredient(ingredient))
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
            <br/>
            <button className="btn btn-warning" onClick={() => {history.goBack()}}>Cancel</button>
            <button className="btn btn-danger" onClick={() => deleteIngredient(ingredient.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => updateIngredient(ingredient.id, ingredient)}>Save</button>
            <button className="btn btn-success" onClick={() => createIngredient(ingredient)}>Create</button>
        </div>
    )
}

export default IngredientFormEditor
