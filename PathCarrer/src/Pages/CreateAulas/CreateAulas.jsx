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

// =-=-=-=-= Provider =-=-=-=-= //


import { useNavigate } from "react-router-dom"

import { useContext, useState,useEffect } from 'react'
import {PathStepsContext} from '../../Provider/CreatePathSteps/CreatePathSteps'

function CreateAulas (){

  const {threeStep,setThreeStep,APImodel} = useContext(PathStepsContext);
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
      head:0,
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
      
      if (verify(molde) == true && ((indiceAtual.head + 1) >= 1)){
        
        setThreeStep((prevState) => {
          const newState = [...prevState]; // Copia o array
          newState[indiceAtual.head] = molde; // Modifica o item pelo índice
          return newState; // Retorna o novo array
        });
       alert ("Aula adicionada com sucesso");
      }
      else {
        alert("Selecione um indice valido")
      }
  };

  const Finish = () => {
    alert(console.log(JSON.stringify(APImodel)))
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

    return (
        <main className={styles.main}>
            <header className={styles.head}><CabecalhoPadrao/></header>

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
               <div className={styles.recado}>Você está editando a aula de <strong className={styles.strong}>índice</strong> <div className={styles.boxInput}>
               <BoxInput onChange={(e) => select(e)} optionE={indice}/></div></div>

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
                <div className={styles.Buttonover}><Button func={Finish} message={"Enviar"} class="button"/>   </div>
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