import CreateModulo from "../CreateModulo/Createmodulo"

import {useNavigate } from "react-router-dom"
import {useContext} from 'react'

import {PathStepsContext} from '../../Provider/CreatePathSteps/CreatePathSteps'
import httpClient from '../../APIs/PathCarrerAPI/PathCarrer'

function UpdateModulo ({route,APIroute}) {
    
    const navigate = useNavigate();
    const {twoStep} = useContext(PathStepsContext);

    const routes = {
        /* Rotas, para onde vamos após clicar em 'enviar' ? (estando na step 2) */
        UpdateClass: "/UpdateClass",
        UpdateModulo:"/UpdateModulo/UpdateClass",
        CreateClass:"/CreateClass"    
    };

    const redirec = () => {
        navigate(routes[route]);
    };

    const APIrouteFunc = () => {
        if (APIroute !== null){
           return APIoptions[APIroute]  
        }
        else {
            return null
        }
    }

    async function UpdateModule(e) {
        if (e) {
            e.preventDefault();
        }
    
        try {
            
            const response = await httpClient.put(
                'CRUD/UpdateModule',
                {
                    PathID: localStorage.getItem("PathID_on"),
                    indexModule: localStorage.getItem("ModuleIndexON"),
                    title: twoStep.titleModule,
                    desc: twoStep.descModule,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                        "Content-Type": "application/json" 
                    }
                }
            );
    
        
            alert("Módulo atualizado com sucesso!");
            navigate('/class')
    
    
            console.log("Resposta da API:", response.data);
        } catch (error) {
            if (error.response) {
                const serverMessage = error.response.data?.erro;
                
                if (serverMessage === "Token inválido ou expirado") {
                  alert(serverMessage)
                  console.error("Sessão expirada. Faça login novamente !" + serverMessage);
                  alert("Sessão expirada. Faça login novamente !");
                  window.location.href = '/login'
                  return;
                }
              }
      
            alert("Erro ao atualizar o módulo. Verifique o console para mais detalhes.");
    
            console.error("Erro completo");
        }
    }

    const APIoptions = {
        UpdateModule
    }
    return (
        <CreateModulo
         redirec={(e) => redirec(e)}
         APIroute={APIrouteFunc()}
        />
    )
}

export default UpdateModulo