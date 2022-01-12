import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, isAuth, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/signIn" />
      }
    />
  )
}

export default PrivateRoute
