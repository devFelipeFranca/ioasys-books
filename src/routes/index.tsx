import React, { lazy, Suspense } from "react"
import { Switch, Redirect, Route } from "react-router-dom"

const SignIn = lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "lazyHome" */ "../pages/SignIn"
    )
)

const Books = lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "lazyMarketplace" */ "../pages/Books"
    )
)

export const Routes = (): React.ReactElement => {
  return (
    <Suspense
      fallback={
        <div className="justify-content text-center fade-in">Loading</div>
      }
    >
      <Switch>
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/books" component={Books} />
        <Redirect from="*" to="/signIn" />
      </Switch>
    </Suspense>
  )
}

export default Routes
