import userService from "./user-service"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const UserFormEditor = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        if(id !== "new") {
            findUserById(id)
        }
    }, []);
    useEffect(() => {
        if(id !== "new") {
            findRecipesByUserId()
        }
    }, []);
    const findUserById = (id) =>
        userService.findUserById(id)
            .then(user => setUser(user))
    const history = useHistory()
    const deleteUser = (id) =>
        userService.deleteUser(id)
            .then(() => history.goBack())
    const createUser = (user) =>
        userService.createUser(user)
            .then(() => history.goBack())
    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(() => history.goBack())
    const findRecipesByUserId = () =>
        userService.findRecipesByUserId(id)
            .then(recipesList => setRecipes(recipesList))
    return (
        <div>
            <h2>User Editor</h2>
            <label>Id</label>
            <input disabled value={user.id} className="form-control"/>
            <label>First Name</label>
            <input onChange={(e) =>
                setUser(user =>
                    ({...user, firstName: e.target.value}))}
                   value={user.firstName} className="form-control"/>
            <label>Last Name</label>
            <input onChange={(e) =>
                setUser(user =>
                    ({...user, lastName: e.target.value}))}
                   value={user.lastName} className="form-control"/>
            <label>Username</label>
            <input onChange={(e) =>
                setUser(user =>
                    ({...user, username: e.target.value}))}
                   value={user.username} className="form-control"/>
            <label>Password</label>
            <input onChange={(e) =>
                setUser(user =>
                    ({...user, password: e.target.value}))}
                   value={user.password} className="form-control"/>
            <label>Email</label>
            <input onChange={(e) =>
                setUser(user =>
                    ({...user, email: e.target.value}))}
                   value={user.email} className="form-control"/>
            <label>Date of Birth</label>
            <input onChange={(e) =>
                setUser(user =>
                    ({...user, dateOfBirth: e.target.value}))}
                   value={user.dateOfBirth} className="form-control" type="date" placeholder="YYYY-MM-DD"/>
            <label>{
                recipes.length > 0 ?
                    `Recipes by ${user.username}`:
                    user.username === undefined || user.username.length < 1?
                        `User Has no Recipes` :
                        `${user.username} Has no Recipes`
            }</label>
            <ul className="list-group">
                {
                    recipes.map(recipe =>
                        <li key={recipe.id} className={'list-group-item'}>
                            <Link to={`/recipes/${recipe.id}`}>
                                {recipe.title}
                            </Link>
                        </li>)
                }
            </ul>
            <br/>
            <div className={'mb-4'}>
                <Link to={'/users'}>
                    <span>Back to Users List</span>
                </Link>
            </div>
            <div>
                <button className="btn btn-warning" onClick={() => {history.goBack()}}>Cancel</button>
                <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                <button className="btn btn-primary" onClick={() => {
                    if(id === "new") {
                        createUser(user)
                    } else {
                        updateUser(user.id, user)
                    }
                }}>Save</button>
            </div>
        </div>
    )
}

export default UserFormEditor
