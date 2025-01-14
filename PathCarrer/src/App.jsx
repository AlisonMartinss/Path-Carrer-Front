import { useState } from 'react'
import './App.css'

// =-=-=-=-= Providers =-=-=-=-= //

import { PathProvider } from '../src/Provider/Provider'

//=-=-=-=-=-=- Pages imports =-=-=-=-=-=-=-//

import Createpath from './Pages/CreatePath/Createpath'
import CreateModulo from './Pages/CreateModulo/Createmodulo'
import Explorer from './Pages/Explorer/Explorer'
import CreateAulas from './Pages/CreateAulas/CreateAulas'
import Class from './Pages/Class/Class'
import Loby from './Pages/Loby/Loby'


import {createBrowserRouter,createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'

const browserRouter = createBrowserRouter(createRoutesFromElements(
<Route path="/">
 <Route index element={<Loby/>}/>
 <Route path="/loby" element={<Loby/>}/>
 <Route path="/class" element={<Class nomeDoModulo={"Nome do Modulo"} 
 srcVideo={"https://www.youtube.com/embed/F1xZ_uK2M6c"}/>}/>
 <Route path="/explorer" element={<Explorer/>}/>

   <Route path="/createpath"   element = {
   <PathProvider>
     <Createpath />
   </PathProvider>}/>

   <Route path="/createmodulo" element = {
   <PathProvider>
     <CreateModulo/>
   </PathProvider>}/> 

   <Route path="/createaulas"  element = {
   <PathProvider>
     <CreateAulas />
   </PathProvider>}/>

</Route>
))


function App() {
  
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default App
