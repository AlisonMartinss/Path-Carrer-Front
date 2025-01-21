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

function CreateAulas (){

  //Input do indice
  // Entender slice
  /*
  { valueA: 1, txt: 1 },
  */

      //Objeto da aula
      const [classData,setClassDataState] = useState ({
        title:"",
        link:"",
        description:"",
      });

      const [module,setModule] = useState ([]);

      const [indice,SetIndice] = useState();

      const [prevIndice, setPrevIndice] = useState([{valueA:1, txt:1}])

      const handleIndice = (event) => { // Usado para colocar os elementos nos devidos pontos
        SetIndice((event.target.value) - 1); // input vindo do BoxInput do indice
      }

      // OverSet
      const ClassDataSet = (event) => {
        const {name, value} = event.target;
        setClassDataState({...classData,[name]:value});
      };

  
   
      // Verify
      const Verify = () => {
        if (classData.title != null && (classData.title).trim() != ""){
         if (classData.link != null && (classData.link).trim() != ""){
          if (classData.description != null && (classData.description).trim() != ""){
            return true
                   
          }
          else {
            alert("Campo 'description' vazio");
            return false}
        }
         else {
            alert("Campo 'link' vazio")
            return false}
        }
        else {
            alert("Campo 'name' vazio")
            return false}
        }

        const handleModule = () =>{
          if (Verify() == true){
            setModule((prev) => [
              ...prev.slice(0,indice),
              classData,
              ...prev.slice(indice),

            ])}
          handleOptionIndice();
          setModule((prev) => 
          prev.filter((_, elemento) => elemento !== (indice+1)))
        }

        const handleOptionIndice = () => {
          const index = prevIndice.length;
          setPrevIndice((prev) => [
            ...prev,
            { valueA: index + 1, txt: index + 1 }
          ]);
        };

        useEffect(() => {
          SetIndice(0);
        }, []); // Apenas no carregamento inicial

        useEffect(() => {
          alert("Indice atual: " + indice);
        }, [indice]); // Monitora mudanças em `indice`

        useEffect(() => {
          for (let i = 0; i < module.length; i++){
            console.log(module.length)
            console.log("Aula de indice: " + i + " -" + JSON.stringify(module[i]))
          }
        }, [module]); // Monitora mudanças em `indice`

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

               <div className={`${styles.inputName} ${styles.overInput}`}><TXTinputP id={"title"} name={"title"} onChange={(event) => ClassDataSet(event)} 
               placeholder={"Digite o titulo da aula"}/></div>

               <div className={`${styles.inputLink} ${styles.overInput}`}><TXTinputP id={"link"} name={"link"} onChange={(event) => ClassDataSet(event)} 
               placeholder={"Cole aqui o link do conteudo desta aula"}/></div>

               <div className={styles.inputDesc}><TXTinputM name={"description"} onChange={(event) => ClassDataSet(event)} 
               placeholder={"Descreva os pontos mais interessantes para essa aula"}/></div>

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