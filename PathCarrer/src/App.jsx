import { useState } from 'react'
import './App.css'

// =-=-=-=-= Providers =-=-=-=-= //


//=-=-=-=-=-=- Pages imports =-=-=-=-=-=-=-//

import Createpath from './Pages/CreatePath/Createpath'
import CreateModulo from './Pages/CreateModulo/Createmodulo'
import Explorer from './Pages/Explorer/Explorer'
import CreateAulas from './Pages/CreateAulas/CreateAulas'
import Class from './Pages/Class/Class'
import Loby from './Pages/Loby/Loby'


import {createBrowserRouter,createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'
import { PathStepsProvider } from '../src/Provider/CreatePathSteps/CreatePathSteps'
import UpdatePath from './Pages/UpdatePath/Updatepath'
import CreatePathPre from './Pages/CreatePathpre/CreatePathPre'
import CreateClassSelection from './Pages/CreateClassSelection/CreateClassSelection'
import UpdateModulo from './Pages/ModuleInstances/UpdateModulo'
import Login from './Pages/Login/Login'
import ContentAcess from './Pages/ContentAcess/ContentAcess'

const browserRouter = createBrowserRouter(createRoutesFromElements(
  /*
   
  
  */
<Route path="/">
 <Route index element={<Login/>}/>
 <Route path="/Loby" element={<Loby/>}/>
 <Route path="/Class" element={<Class/>}/>
 <Route path="/ContentAcess" element={<ContentAcess/>}/>
 <Route path="/Explorer" element={<Explorer/>}/>
 <Route path="/Login" element={<Login/>}/>

   <Route path="/createpath" element = {
   <PathStepsProvider>
     <CreatePathPre/>
   </PathStepsProvider>}/>

   <Route path="/updatePath" element = {
    /* Atualiza Path no step 1 */
   <PathStepsProvider>
     <UpdatePath/>
   </PathStepsProvider>}/>

   {/* Rotas que envolvem atividades com modulos */}

   <Route path="/Createmodulo" element = {
    /* Faz parte da etapa de criação do path */
   <PathStepsProvider>
     <UpdateModulo
     route={"CreateClass"}/>
   </PathStepsProvider>}/>


   <Route path="/CreateNewModulo" element = {
    /* Criar e logo em seguida adicionar modulo em path já existente */
   <PathStepsProvider>
     <UpdateModulo
     route={"UpdateClass"}/>
   </PathStepsProvider>}/>

   <Route path="/UpdateModulo" element = {
    /* Atualiza modulo pre existente. OBS: Subistitui TODAS as aulas */
   <PathStepsProvider>
     <UpdateModulo
     route={"UpdateModulo"}/>
   </PathStepsProvider>}/>

   <Route path="/UpdateModulo/UpdateClass"  element = {
    /* Etapa onde att as aulas, faz parte do processo de att de modulo */
   <PathStepsProvider>
     <CreateClassSelection
     option={"UpdateModulo"}
     circumstance={"EditModulo"} />
   </PathStepsProvider>}/>

   {/* Rotas que envolvem atividades com Class */}

   <Route path="/CreateClass"  element = {
    /* Criação de aulas. Faz parte da etapa de criação de Path */
   <PathStepsProvider>
     <CreateClassSelection
     option={"PathCreate"}
     circumstance={"CreatePath"}
    />
   </PathStepsProvider>}/>

   <Route path="/UpdateClass"  element = {
    /* Att aulas (todas as aulas) em modulo já existentes. Faz parte do processo de adicionar novo modulo */
   <PathStepsProvider>
     <CreateClassSelection option={"UpadateNewModule"} />
   </PathStepsProvider>}/>

   <Route path="/UpdateClassUnic"  element = {
    /* Att uma unica aula. Aula já existente */
   <PathStepsProvider>
     <CreateClassSelection option={"UpdateClassUnic"} />
   </PathStepsProvider>}/>

   <Route path="/UpdateNewClass"  element = {
    /* Adiciona uma unica aula.*/
   <PathStepsProvider>
     <CreateClassSelection 
     option={"UpdateNewClass"}
     circumstance={"other"} />
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