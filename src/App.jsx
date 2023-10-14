import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './routes/Layout'

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
    },
  ],
  {
    // Set the basename to the base path value from vite.config.js
    basename: import.meta.env.DEV ? '/' : '/gh-pages-react/',
  }
)

function App() {
  return <RouterProvider router={router} />
}

export default App
