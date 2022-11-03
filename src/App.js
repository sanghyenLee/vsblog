import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Main from './components/Main'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}
export default App
