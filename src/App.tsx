import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from 'react-router-dom'
import { RootLayout } from './components/layout/RootLayout'
import { HomePage } from './pages/HomePage'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/portfolio' element={<RootLayout/>}>
        <Route index element={<HomePage/>}/>
      </Route>

    )
  )

  return <RouterProvider router={router}/>

}

export default App