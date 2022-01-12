import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { default as Routes } from "./routes"

import "./styles/common.css"

const App = (): React.ReactElement => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default App
