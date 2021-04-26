const {Link, useHistory} = window.ReactRouterDOM;

import ingredientService from "./ingredient-service"
const { useState, useEffect } = React;
const IngredientList = () => {
    const history = useHistory()
    const [ingredients, setIngredients] = useState([])
    useEffect(() => {
        findAllIngredients()
    }, [])
    const findAllIngredients = () =>
        ingredientService.findAllIngredients()
            .then(ingredients => setIngredients(ingredients))

    return(
        <div>
            <h2>Ingredients</h2>
            <button className={'btn btn-primary'} onClick={() => history.push("/ingredients/new")}>
                Add Ingredient
            </button>
            <ul className="list-group">
                {
                    ingredients.map(ingredient =>
                        <li key={ingredient.id} className={'list-group-item'}>
                            <Link to={`/ingredients/${ingredient.id}`}>
                                {ingredient.name}
                            </Link>
                        </li>)
                }
            </ul>
            <br/>
            <Link to={"/"}>Back to Landing Page</Link>


        </div>

    )
}

export default IngredientList;
