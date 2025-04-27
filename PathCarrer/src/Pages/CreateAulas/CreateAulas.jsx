import styles from '../CreateAulas/CreateAulas.module.css'

// =-=-=-=-=- Componentes =-=-=-=-=- //

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import TXTinputM from '../../Components/TXTinputM/TXTinputM'
import MessageIMG from '../../Components/messageIMG/messageIMG'
import Dicas from '../../Components/Dicas/Dicas'
import Button from '../../Components/Button/Button'
import BoxInput from '../../Components/BoxInput/BoxInput'

// =-=-=-=-= Midias =-=-=-=-= //
import JP2 from '../../assets/Midias/JP2.png'

/*
  ===== Explicações =====

  - handlePermissionAPI: Quando clicado em 'enviar' a lista (lista de objeto de aula) formulada aqui 
    será delegada em 'threeStep'.
  - verify: verifica se a aula está nos padrões adequados.
  - select: seleciona indice.
  - completion: ativa a API passada em APIoption.
  - setPlace: Quando uma aula é adicionada, essa função adiciona mais um indice disponivel na lista
    que baseia os indices disponiveis.
  - setObjectClass: Quando obtemos os inputs das aulas (titulo,link, e desc), nessa função colocamos
    os devidos inputs nos devidos atributos do objeto 'molde' (que o modelo de aula)
  - setElementClass: Insere elemento na lista de aulas que será enviada.  
 
  - molde: modelo (classe) de aula.
  - indice: indica os indices disponiveis para aulas.
  - indiceAtual: indice do elemento que atualmente está sendo editado. 'head' indica 
    o indice do elemento que está sendo editado. 'tail' tamanho atual da lista para indicarmos indices coerentes.
    
*/


import { useNavigate } from "react-router-dom"

import { useContext, useState,useEffect } from 'react'
import {PathStepsContext} from '../../Provider/CreatePathSteps/CreatePathSteps'
import CabecalhoV2 from '../../Components/CabecalhoV2/CabecalhoV2'

function CreateAulas ({APIoption,circumstance}){

  const {threeStep,setThreeStep,SetAPImodel,modeleON} = useContext(PathStepsContext);

  const handlePermissionAPI = () => {
    SetAPImodel((prev) => ({
      ...prev,
      twoPathDTO: { 
        ...prev.twoPathDTO, 
        ClassList: threeStep
      }
    }));
  };

  const [molde,setMolde] = useState(
    {
      title:"",
      link:"",
      description:"",
    }
  )

  const [indice,SetIndice] = useState([
    {
      txt:"Selecione"
    },
    {
      txt:1
    }
  ]);
  const [indiceAtual,setIndiceAtual] = useState(
    {
      head:"Selecione",
      tail:threeStep.length
    }
  );

  const select = (e)  => {
    setIndiceAtual((prev) => ({
    ...prev,
    head:(e.target.value - 1)
    }))
  }

  const verify = (obj) =>{
    if (!obj.title || obj.title.trim() === ""){
      alert ("Você se esqueceu de colocar o titulo da aula")
      return false
    }
    else if(!obj.title || obj.title.trim() === ""){
      alert ("Você se esqueceu de colocar o link da aula")
      return false
    }
    else if (!obj.title || obj.title.trim() === "") {
      alert ("Você se esqueceu de colocar a descrição da aula")
      return false
    }

    return true
  }

  const setPlace = () => {
    const presentInd = threeStep.length;
    if (!(presentInd >= 15)){
    SetIndice((prev) => [...prev,{txt:presentInd + 1}])}
    else { alert("Você chegou ao limite de aulas") }
  }

  const setObjectClass = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setMolde((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
   
  const setElementClass = () => {
      if (verify(molde) == true){
          if (circumstance !== ("CreatePath") && circumstance !== ("EditModulo")){
            console.log(JSON.parse(localStorage.getItem("moduleON")))
            if (!(JSON.parse(localStorage.getItem("moduleON")).modulocontent.some(item => item.title === molde.title))){
              setThreeStep((prevState) => {
                const newState = [...prevState];     
                newState[0] = molde;
                alert ("Aula adicionada com sucesso");
                return newState;
              })
            }
            
            else {
              alert("Já existe uma aula com esse titulo")
            }

          }
          else if (((indiceAtual.head + 1) >= 1)){
            if (!threeStep.some(item => item.title === molde.title)){
              setThreeStep((prevState) => {
                const newState = [...prevState];
                newState[indiceAtual.head] = molde;
                alert ("Aula adicionada com sucesso");
                return newState;
              })
            }
            else {
              alert("Já existe uma aula com esse titulo")
            }
          }
          else {
            alert("Selecione um indice valido")
          }
          
      }
  };

  
  const completion = (e) => {
    APIoption(e);
  }

  useEffect(() => {
    for (let i = 0; i < threeStep.length; i++) {
      console.log(JSON.stringify(threeStep))
    }
    

    if (threeStep.length > indiceAtual.tail ){
      setThreeStep((prev) => prev.filter((element) => element !== null && element !== undefined));
      setIndiceAtual((prev) => 
      ({...prev,
        tail:threeStep.length
      }))
      setPlace();
    }

    }, [threeStep]);

    useEffect(() => {
      handlePermissionAPI();
    },[threeStep]);

    return (
        <main className={styles.main}>
            <header className={styles.head}><CabecalhoV2/></header>

            <div className={styles.core}>

             <div className={styles.dicas}>
              <div className={`${styles.dicaCore} ${styles.dicaA}`}>
               <Dicas class={"dir"} message={"Repare no indice que você está editando."}/>
              </div>

              <div className={`${styles.dicaCore} ${styles.dicaB}`}>
               <Dicas class={"esq"} message={"Clique em salvar para salvar as edições feitas e editar a proxima aula."}/>
              </div>
               
               
             </div>

             <form className={styles.form}>
             {(circumstance === "CreatePath" || circumstance === "EditModulo") ? (
              <div className={styles.recado}>
                Você está editando a aula de <strong className={styles.strong}>índice</strong> 
                <div className={styles.boxInput}>
                  <BoxInput onChange={(e) => select(e)} optionE={indice} />
                </div>
              </div>
            ) : null}
               

               <div className={`${styles.inputName} ${styles.overInput}`}>
                <TXTinputP
                name={"title"} 
                onChange={(e) => setObjectClass(e)} 
                placeholder={"Digite o titulo da aula"}/>
               </div>

               <div className={`${styles.inputLink} ${styles.overInput}`}>
                <TXTinputP
                name={"link"} 
                onChange={(e) => setObjectClass(e)} 
                placeholder={"Cole aqui o link do conteudo desta aula"}/>
               </div>

               <div className={styles.inputDesc}>
                <TXTinputM 
                name={"description"} 
                onChange={(e) => setObjectClass(e)} 
                placeholder={"Descreva os pontos mais interessantes para essa aula"}/>
               </div>

               <div className={styles.Button}>
                <div className={styles.Buttonover}><Button func={(e) => completion(e)} message={"Enviar"} class="button"/>   </div>
                <div className={styles.Buttonover}><Button func={(e) => {setElementClass(e)}} message={"Salvar"} class="Save"/>   </div>
               </div>

             </form>

             <div className={styles.etapa}>
              <div className={styles.tut_img}>
               <MessageIMG href={"https://www.youtube.com/watch?v=63nfV47oDhU"}img={JP2} message={"Está com duvida de como lidar com essa etapa? Clique aqui"}/>
              </div>               
             </div>
                
            </div>

            

        </main>
    )
}

export default CreateAulas