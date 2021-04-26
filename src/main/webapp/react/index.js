import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";
import RecipeList from "./recipes/recipe-list";
import RecipeFormEditor from "./recipes/recipe-form-editor";
import IngredientList from "./ingredient/ingredient-list";
import IngredientFormEditor from "./ingredient/ingredient-form-editor";
import LandingPage from "./landing_page";

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={"/"} exact={true}>
                    <LandingPage/>
                </Route>
                <Route path={"/users"} exact={true}>
                    <UserList/>
                </Route>
                <Route path={"/users/:id"} exact={true}>
                    <UserFormEditor/>
                </Route>
                <Route path={"/recipes"} exact={true}>
                    <RecipeList/>
                </Route>
                <Route path="/recipes/:id" exact={true}>
                    <RecipeFormEditor/>
                </Route>
                <Route path={"/ingredients"} exact={true}>
                    <IngredientList/>
                </Route>
                <Route path="/ingredients/:id" exact={true}>
                    <IngredientFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
