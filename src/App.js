import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Main from './pages/Main'
import AppContext from './context/Appcontext'
import { useEffect, useState } from 'react'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>,
  ),
)

function App() {
  const [selectedPost, setSelectedPost] = useState('')
  const [postData, setPostData] = useState([])
  const [openPost, setOpenPost] = useState([])

  useEffect(() => {
    setPostData([
      {
        type: 'directory',
        title: '일상',
      },
      {
        type: 'directory',
        title: 'Tech',
        children: [
          {
            type: 'post',
            title: 'Tech1',
          },
          {
            type: 'post',
            title: 'Tech2',
          },
          {
            type: 'directory',
            title: 'Tech3',
            children: [
              {
                type: 'post',
                title: 'Tech31',
              },
              {
                type: 'post',
                title: 'Tech32',
              },
            ],
          },
        ],
      },
    ])
  }, [])

  return (
    <AppContext.Provider
      value={{
        selectedPost,
        setSelectedPost,

        openPost,
        setOpenPost,

        postData,
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}
export default App
