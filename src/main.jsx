import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Counter } from './features/counter/Counter'

import App from './App'

// Since React apps are single page applications (SPA), we cannot use normal page routing to navigate the pages of our application. The browser router provides page routing functionality to a react app, but we still need to create a navigation component to provide navigation funcitonality to the user
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/counter",
        element: <Counter />,
      }
    ],
  },
])

// Store provider wraps the router, which wraps the application. This allows the store to have access to the entire application, including the router.
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)