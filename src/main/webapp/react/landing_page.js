const {Link, useHistory} = window.ReactRouterDOM;

const { useState, useEffect } = React;
const LandingPage = () => {

    return(
        <div>
            <h2>Landing Page</h2>
             <ul className="list-group">
                 <li key="users" className={'list-group-item'}>
                     <Link to={`/users`}>
                         User List
                     </Link>
                 </li>
                 <li key="recipes" className={'list-group-item'}>
                     <Link to={`/recipes`}>
                         Recipes List
                     </Link>
                 </li>
                 <li key="ingredients" className={'list-group-item'}>
                     <Link to={`/ingredients`}>
                         Ingredient List
                     </Link>
                 </li>
            </ul>
        </div>
    )
}

export default LandingPage;
