import { useState } from 'react'
import './App.css'

// =-=-=-=-= Providers =-=-=-=-= //


//=-=-=-=-=-=- Pages imports =-=-=-=-=-=-=-//

import Createpath from './Pages/CreatePath/Createpath'
import CreateModulo from './Pages/CreateModulo/Createmodulo'
import Explorer from './Pages/Explorer/Explorer'
import CreateAulas from './Pages/CreateAulas/CreateAulas'
import ContentAcess from './Pages/ContentAcess/ContentAcess'
import Class from './Pages/Class/Class'
import Loby from './Pages/Loby/Loby'


import {createBrowserRouter,createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'
import { PathStepsProvider } from '../src/Provider/CreatePathSteps/CreatePathSteps'

const browserRouter = createBrowserRouter(createRoutesFromElements(
<Route path="/">
 <Route index element={<Loby/>}/>
 <Route path="/loby" element={<Loby/>}/>
 <Route path="/class" element={<Class/>}/>
 <Route path="/explorer" element={<Explorer/>}/>
 <Route path="/ContentAcess" element={<ContentAcess/>}/>

   <Route path="/createpath"   element = {
   <PathStepsProvider>
     <Createpath />
   </PathStepsProvider>}/>

   <Route path="/createmodulo" element = {
   <PathStepsProvider>
     <CreateModulo/>
   </PathStepsProvider>}/> 

   <Route path="/createclass"  element = {
   <PathStepsProvider>
     <CreateAulas />
   </PathStepsProvider>}/>

</Route>
))


function App() {
  
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default App