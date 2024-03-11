import React from 'react'
import ReactDOM from 'react-dom/client'
import {HelmetProvider} from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </React.StrictMode>,
)


// import { createRoot } from "react-dom/client";
// import App from './App'
// import './index.css'


// const root = createRoot(document.querySelector("#root"))
// root.render(
//   <>
//   <App/>
//   </>
// )


