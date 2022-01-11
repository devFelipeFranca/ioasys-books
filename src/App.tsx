import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { default as Routes } from "./routes"

const App = (): React.ReactElement => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default App
