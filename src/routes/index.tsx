import React, { lazy, Suspense } from "react"
import { Switch, Redirect, Route } from "react-router-dom"
import { useAuth } from "../context/hooks/auth"
import PrivateRoute from "./private"

const SignIn = lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "lazySignIn" */ "../pages/SignIn"
    )
)

const Books = lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "lazyBooks" */ "../pages/Books"
    )
)

export const Routes = (): React.ReactElement => {
  const { authorized } = useAuth()
  return (
    <Suspense
      fallback={
        <div className="justify-content text-center fade-in">Loading</div>
      }
    >
      <Switch>
        <Route exact path="/signIn" component={SignIn} />
        <PrivateRoute
          component={Books}
          exact
          path="/books"
          isAuth={authorized}
        />
        <Redirect from="*" to="/signIn" />
      </Switch>
    </Suspense>
  )
}

export default Routes
