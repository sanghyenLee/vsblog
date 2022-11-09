import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Main from './pages/Main'
import AppContext from './context/Appcontext'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './style/theme'
import { GlobalStyle } from './style/GlobalStyle'

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
  const [Theme, setTheme] = useState('dark')

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
            path: '/Tech/Tech1',
          },
          {
            type: 'post',
            title: 'Tech2',
            path: '/Tech/Tech2',
          },
          {
            type: 'directory',
            title: 'Tech3',
            children: [
              {
                type: 'post',
                title: 'Tech31',
                path: '/Tech/Tech3/Tech31',
              },
              {
                type: 'post',
                title: 'Tech32',
                path: '/Tech/Tech3/Tech32',
              },
              {
                type: 'post',
                title: 'Tech33',
                path: '/Tech/Tech3/Tech34',
              },
              {
                type: 'post',
                title: 'Tech34',
                path: '/Tech/Tech3/Tech34',
              },
              {
                type: 'post',
                title: 'Tech35',
                path: '/Tech/Tech3/Tech35',
              },
              {
                type: 'post',
                title: 'Tech36',
                path: '/Tech/Tech3/Tech36',
              },
              {
                type: 'post',
                title: 'Tech37',
                path: '/Tech/Tech3/Tech37',
              },
              {
                type: 'post',
                title: 'Tech38',
                path: '/Tech/Tech3/Tech38',
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

        Theme,
        setTheme,
      }}
    >
      <ThemeProvider theme={Theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AppContext.Provider>
  )
}
export default App
