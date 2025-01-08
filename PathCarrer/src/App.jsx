import { useState } from 'react'
import './App.css'

//=-=-=-=-=-=- Pages imports =-=-=-=-=-=-=-//

import Createpath from './Pages/CreatePath/Createpath'
import CreateModulo from './Pages/CreateModulo/Createmodulo'
import CreateAulas from './Pages/CreateAulas/CreateAulas'
import Loby from './Pages/Loby/Loby'


import {createBrowserRouter,createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'

const browserRouter = createBrowserRouter(createRoutesFromElements(
<Route path="/">
 <Route index element={<Createpath/>}/>
 <Route path="/loby" element={<Loby/>}/>
 <Route path="/createpath" element={<Createpath/>}/>
 <Route path="/createmodulo" element={<CreateModulo/>}/>
 <Route path="/createaulas" element={<CreateAulas/>}/>
</Route>
))


function App() {
  
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default App
