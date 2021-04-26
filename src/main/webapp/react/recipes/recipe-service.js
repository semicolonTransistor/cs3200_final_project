// declare URL where server listens for HTTP requests
const RECIPES_URL = "http://104.236.92.64/api/recipes"

// retrieve all users from the server
export const findAllRecipes = () =>
  fetch(RECIPES_URL)
    .then(response => response.json())

// retrieve a single user by their ID
export const findRecipeById = (id) =>
  fetch(`${RECIPES_URL}/${id}`)
    .then(response => response.json())


// delete a user by their ID
export const deleteRecipe = (id) =>
  fetch(`${RECIPES_URL}/${id}`, {
    method: "DELETE"
  })


// create a new user
export const createRecipe = (recipe) =>
  fetch(RECIPES_URL, {
    method: 'POST',
    body: JSON.stringify(recipe),
    headers: {'content-type': 'application/json'}
  })
    .then(response => response.json())


// update a user by their ID
export const updateRecipe = (id, recipe) =>
  fetch(`${RECIPES_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(recipe),
    headers: {'content-type': 'application/json'}
  })
    .then(response => response.json())


// export all functions as the API to this service
export default {
  findAllRecipes,
  findRecipeById,
  deleteRecipe,
  createRecipe,
  updateRecipe
}
