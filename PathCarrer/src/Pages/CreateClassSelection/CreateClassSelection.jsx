import CreateAulas from "../CreateAulas/CreateAulas";
import httpClient from '../../APIs/PathCarrerAPI/PathCarrer'
import {PathStepsContext} from '../../Provider/CreatePathSteps/CreatePathSteps'
import { useContext} from 'react'

function CreateClassSelection  ({option,circumstance}){

  const {oneStap,twoStep,threeStep} = useContext(PathStepsContext);
    /* 
        Esse jsx é nescessario pois 'CreateAulas' é usada em varias etapas com
        chamdas para end-points diferentes, então ao usar o componente 'CreateAulas'
        podemos indicar qual API será chamda sem repetir codigo
    */
    async function teste (e) {
      alert("TESTE");
    }
    async function PathCreate (e) {
        e.preventDefault()
        try {
          const response = await httpClient.post('CRUD/PathCreate',
            {
              authorID:localStorage.getItem("UserName"),
              onePathDTO: 
                {
                  title:oneStap.title,
                  category:oneStap.category,
                  descPathOver:oneStap.descPathOver,
                  banner:oneStap.banner,
                  tags:oneStap.tags,
                  adjetives:oneStap.adjectives
                },
    
              twoPathDTO:
                {
                    title:twoStep.titleModule,
                    desc:twoStep.descModule,
                    ClassList:threeStep
                }
    
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("Token")}`,
                "Content-Type": "application/json",
              },
            }
          )
          alert("Aulas cadastradas")
        }catch (err){
          alert ("Erro no Create Path")
          console.log(err)
        }
    }
    async function UpadateNewModule (e) {
      e.preventDefault()
      try {
        const response = await httpClient.post('CRUD/UpadateNewModule',
          {
            id:"67bd255d2970aa4c4aaea088",
            title:twoStep.titleModule,
            desc:twoStep.descModule,
            ClassList:threeStep
          }
        )
        alert("Modulo adicionado")
      }catch (err){
        alert ("Erro")
        console.log(err)
      }
    }
    async function UpdateModulo (e) {
      e.preventDefault()
      try {
        const response = await httpClient.put('CRUD/UpdateModule',
          {
            id:localStorage.getItem("PathID_on"), // OBTIDO ATRAVES DO LOCAL STORAGE
            indexModule:localStorage.getItem("ModuleIndexON"), // OBTIDO ATRAVES DO LOCAL STORAGE
            title:twoStep.titleModule,
            desc:twoStep.descModule,
            ClassList:threeStep
          }
        )
        alert("Modulo atualizado")
      }catch (err){
        alert ("Erro")
        console.log(err)
      }
    }
    async function UpdateClassUnic(e) {
      e.preventDefault();
  
      try {
          // Faz a requisição PUT para atualizar a aula
          const response = await httpClient.put(
              'CRUD/UpdateClassUnic',
              {
                  id: localStorage.getItem("PathID_on"),
                  indexModule: localStorage.getItem("ModuleIndexON"),
                  indexClass: localStorage.getItem("indexClass"),
                  threePath: {
                      title: threeStep[0].title,
                      link: threeStep[0].link,
                      description: threeStep[0].description
                  }
              },
              {
                  headers: {
                      Authorization: `Bearer ${localStorage.getItem("Token")}`, // Inclui o token de autenticação
                      "Content-Type": "application/json" // Define o tipo de conteúdo
                  }
              }
          );
  
          // Exibe mensagem de sucesso
          alert("Aula única atualizada com sucesso!");
  
          // Log de depuração (opcional)
          console.log("Resposta da API:", response.data);
      } catch (err) {
          // Exibe mensagem de erro
          alert("Erro ao atualizar a aula. Verifique o console para mais detalhes.");
  
          // Log detalhado do erro
          console.error("Erro completo:", err);
          console.error("Resposta do servidor:", err.response?.data);
      }
    }
    async function UpdateNewClass(e) {
      e.preventDefault();
  
      try {
          // Faz a requisição POST para atualizar a aula
          const response = await httpClient.post(
              'CRUD/UpadateNewClass', // Endpoint corrigido
              {
                  id: localStorage.getItem("PathID_on"),
                  indexModule: localStorage.getItem("ModuleIndexON"),
                  threePath: {
                      title: threeStep[0].title,
                      link: threeStep[0].link,
                      description: threeStep[0].description
                  }
              },
              {
                  headers: {
                      Authorization: `Bearer ${localStorage.getItem("Token")}`, // Inclui o token de autenticação
                      "Content-Type": "application/json" // Define o tipo de conteúdo
                  }
              }
          );
  
          // Exibe mensagem de sucesso
          alert("Aula atualizada com sucesso!");
  
          // Log de depuração (opcional)
          console.log("Resposta da API:", response.data);
      } catch (err) {
          // Exibe mensagem de erro
          alert("Erro ao atualizar a aula. Verifique o console para mais detalhes.");
  
          // Log detalhado do erro
          console.error("Erro completo:", err);
          console.error("Resposta do servidor:", err.response?.data);
      }
    }
    const APIoptions = {
      teste,PathCreate,UpadateNewModule,UpdateModulo,UpdateClassUnic,UpdateNewClass
    }
 
    return (
        <CreateAulas
         APIoption={APIoptions[option]}
         circumstance={circumstance}
        />
    )
}

export default CreateClassSelection;