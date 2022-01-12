import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { AuthProvider } from "./context/hooks/auth"
import { StoreBookProvider } from "./context/hooks/books"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <StoreBookProvider>
        <App />
      </StoreBookProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
