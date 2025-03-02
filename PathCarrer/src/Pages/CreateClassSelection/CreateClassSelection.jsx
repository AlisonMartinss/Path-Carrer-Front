import CreateAulas from "../CreateAulas/CreateAulas";
import httpClient from '../../APIs/PathCarrerAPI/PathCarrer'
import {PathStepsContext} from '../../Provider/CreatePathSteps/CreatePathSteps'
import { useContext} from 'react'

function CreateClassSelection  ({option}){

  const {twoStep,threeStep} = useContext(PathStepsContext);
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
          const response = await httpClient.post('PathCreate',
            {
              onePathDTO: 
                {
                  title:oneStap.title,
                  category:oneStap.category,
                  descPathOver:oneStap.descPathOver,
                  tags:oneStap.tags,
                  adjetives:oneStap.adjectives
                },
    
              twoPathDTO:
                {
                    title:twoStep.titleModule,
                    desc:twoStep.descModule,
                    ClassList:threeStep
                }
    
            }
          )
          alert("Aulas cadastradas")
        }catch (err){
          alert ("Erro")
          console.log(err)
        }
    }
    async function UpadateNewModule (e) {
      e.preventDefault()
      try {
        const response = await httpClient.post('UpadateNewModule',
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
        const response = await httpClient.put('UpdateModule',
          {
            id:"67c0cbf4d6744375fc3636a0", // OBTIDO ATRAVES DO LOCAL STORAGE
            nameModulo:"modulo  - ATUALIZAR MODULO", // OBTIDO ATRAVES DO LOCAL STORAGE - TITULO DO MODULO QUE PRETENDO MUDAR
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
    async function UpdateClassUnic (e) {
      e.preventDefault()
      try {
        const response = await httpClient.put('UpdateClassUnic',
          {
            id:"67c0cbf4d6744375fc3636a0", // OBTIDO ATRAVES DO LOCAL STORAGE
            nameModulo:"modulo  - ATUALIZAR MODULO", // OBTIDO ATRAVES DO LOCAL STORAGE - TITULO DO MODULO QUE PRETENDO MUDAR
            placeClass:0, //OBTIDO ATRAVES DO LOCAL STORAGE
            threePath:
            {
                title:threeStep[0].title,
                link:threeStep[0].link,
                description:threeStep[0].description
            }
          }
        )
        alert("Aula unica atualizada")
        console.log
        (JSON.stringify(
          {
            id:"67c0cbf4d6744375fc3636a0",
            nameModulo:"modulo  - ATUALIZAR MODULO",
            placeClass:0,
            threePath:
            {
                title:threeStep[0].title,
                link:threeStep[0].link,
                description:threeStep[0].description
            }
          }
         )
        )
      }catch (err){
        alert ("Erro")
        console.log(err)
      }
    }
    async function UpdateModulo (e) {
      e.preventDefault()
      try {
        const response = await httpClient.put('UpdateModule',
          {
            id:"67c0cbf4d6744375fc3636a0", // OBTIDO ATRAVES DO LOCAL STORAGE
            nameModulo:"modulo  - ATUALIZAR MODULO", // OBTIDO ATRAVES DO LOCAL STORAGE - TITULO DO MODULO QUE PRETENDO MUDAR
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
    const APIoptions = {
      teste,PathCreate,UpadateNewModule,UpdateModulo,UpdateClassUnic
    }
    async function UpdateModulo (e) {
      e.preventDefault()
      try {
        const response = await httpClient.put('UpdateModule',
          {
            id:"67c0cbf4d6744375fc3636a0", // OBTIDO ATRAVES DO LOCAL STORAGE
            nameModulo:"modulo  - ATUALIZAR MODULO", // OBTIDO ATRAVES DO LOCAL STORAGE - TITULO DO MODULO QUE PRETENDO MUDAR
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

    return (
        <CreateAulas
         APIoption={APIoptions[option]}
        />
    )
}

export default CreateClassSelection;