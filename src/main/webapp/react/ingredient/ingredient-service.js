// declare URL where server listens for HTTP requests
const INGREDIENTS_URL = "http://104.236.92.64/api/ingredients"

// retrieve all ingredients from the server
export const findAllIngredients = () =>
  fetch(INGREDIENTS_URL)
    .then(response => response.json())

// retrieve a single ingredient by their ID
export const findIngredientById = (id) =>
  fetch(`${INGREDIENTS_URL}/${id}`)
    .then(response => response.json())


// delete a ingredient by their ID
export const deleteIngredient = (id) =>
  fetch(`${INGREDIENTS_URL}/${id}`, {
    method: "DELETE"
  })

// create a new ingredient
export const createIngredient = (ingredient) =>
  fetch(INGREDIENTS_URL, {
    method: 'POST',
    body: JSON.stringify(ingredient),
    headers: {'content-type': 'application/json'}
  })
    .then(response => response.json())


// update a ingredient by their ID
export const updateIngredient = (id, ingredient) =>
  fetch(`${INGREDIENTS_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(ingredient),
    headers: {'content-type': 'application/json'}
  })
    .then(response => response.json())


// export all functions as the API to this service
export default {
  findAllIngredients,
  findIngredientById,
  deleteIngredient,
  createIngredient,
  updateIngredient
}
