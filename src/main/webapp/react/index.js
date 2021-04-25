import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";
import RecipeList from "./recipes/recipe-list";
import RecipeFormEditor from "./recipes/recipe-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                <Route path="/users/:id" exact={true}>
                    <UserFormEditor/>
                </Route>
                <Route path={"/recipes"} exact={true}>
                    <RecipeList/>
                </Route>
                <Route path="/recipes/:id" exact={true}>
                    <RecipeFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
