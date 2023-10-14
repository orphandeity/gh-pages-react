import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <div>hello world!</div>,
    },
  ],
  {
    // Set the basename to the base path value from vite.config.js
    basename: import.meta.env.DEV ? '/' : '/react-vite-gh-pages/',
  }
)

function App() {
  return <RouterProvider router={router} />
}

export default App
