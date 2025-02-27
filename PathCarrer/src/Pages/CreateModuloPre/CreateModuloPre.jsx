import CreateModulo from "../CreateModulo/Createmodulo";

import {useNavigate } from "react-router-dom"

function CreateModuloPre (){
    const navigate = useNavigate();
    const PreSend = (e) => {
        navigate('/createClass')
    }
    return (
      <main>
        <CreateModulo
         PreSend={(e) => PreSend(e)}/>
      </main>        
    )
}

export default CreateModuloPre;