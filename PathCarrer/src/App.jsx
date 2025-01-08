import { useState } from 'react'
import './App.css'

//=-=-=-=-=-=- Pages imports =-=-=-=-=-=-=-//

//TESTANDO GIT

import Createpath from './Pages/CreatePath/Createpath'
import CreateModulo from './Pages/CreateModulo/Createmodulo'


import {createBrowserRouter,createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'

const browserRouter = createBrowserRouter(createRoutesFromElements(
<Route path="/">
 <Route index element={<Createpath/>}/>
 <Route path="/CreatePath" element={<Createpath/>}/>
 <Route path="/CreateModulo" element={<CreateModulo/>}/>
</Route>
))


function App() {
  
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default App
