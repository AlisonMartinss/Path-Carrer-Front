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

import { PathContext } from '../../Provider/Provider'
import { useNavigate } from "react-router-dom"

import { useContext, useState,useEffect } from 'react'
import {PathStepsContext} from '../../Provider/CreatePathSteps/CreatePathSteps'

function CreateAulas (){

  const {threeStep,setThreeStep} = useContext(PathStepsContext);
   
    const setInfo = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
    
      setThreeStep((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

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
               <BoxInput onChange={(e) => handleIndice(e)} optionE={prevIndice}/></div></div>

               <div className={`${styles.inputName} ${styles.overInput}`}>
                <TXTinputP
                name={"title"} 
                onChange={(e) => setInfo(e)} 
                placeholder={"Digite o titulo da aula"}/>
               </div>

               <div className={`${styles.inputLink} ${styles.overInput}`}>
                <TXTinputP
                name={"link"} 
                onChange={(e) => setInfo(e)} 
                placeholder={"Cole aqui o link do conteudo desta aula"}/>
               </div>

               <div className={styles.inputDesc}>
                <TXTinputM 
                name={"description"} 
                onChange={(e) => setInfo(e)} 
                placeholder={"Descreva os pontos mais interessantes para essa aula"}/>
               </div>

               <div className={styles.Button}>
                <div className={styles.Buttonover}><Button message={"Enviar"} class="button"/>   </div>
                <div className={styles.Buttonover}><Button func={() => {handleModule(); }} message={"Salvar"} class="Save"/>   </div>
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