const {Link, useHistory} = window.ReactRouterDOM;

import userService from "./user-service"
const { useState, useEffect } = React;
const UserList = () => {
  const history = useHistory()
  const [users, setUsers] = useState([])
  useEffect(() => {
    findAllUsers()
  }, [])
  const findAllUsers = () =>
    userService.findAllUsers()
      .then(users => setUsers(users))

  return(
    <div>
      <h2>Users</h2>
      <button className={'btn btn-primary'} onClick={() => history.push("/users/new")}>
        Add User
      </button>
      <ul className="list-group">
        {
          users.map(user =>
            <li key={user.id} className={'list-group-item'}>
              <Link to={`/users/${user.id}`}>
                {user.firstName} {user.lastName}: {user.username}
              </Link>
            </li>)
        }
      </ul>
      <br/>
      <Link to={"/"}>Back to Landing Page</Link>


    </div>

  )
}

export default UserList;
