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
      
      const [module,setModule] = useState ([]);

      const [indice,SetIndice] = useState(0);

      const handleIndice = (event) => {
        SetIndice(event.target.value);
      }

      const optionEList = [
        { valueA: 1, txt: 1 },
        { valueA: 2, txt: 2 },
        { valueA: 3, txt: 3 },
        { valueA: 4, txt: 4 },
        { valueA: 5, txt: 5 },

        { valueA: 6, txt: 6 },
        { valueA: 7, txt: 7 },
        { valueA: 8, txt: 8 },
        { valueA: 9, txt: 9 },
        { valueA: 10, txt: 10 },

        { valueA: 11, txt: 11 },
        { valueA: 12, txt: 12 },
        { valueA: 13, txt: 13 },
        { valueA: 14, txt: 14 },
        { valueA: 15, txt: 15 },
      ];

      //Objeto da aula
      const [classData,setClassDataState] = useState ({
        title:"",
        link:"",
        description:"",
      });
      
      // OverSet

      const ClassDataSet = (event) => {
        const {name, value} = event.target;
        setClassDataState({...classData,[name]:value});
      };

      // Verify

      const Verify = () => {
        
        alert(classData.title)
        alert(classData.link)
        alert(classData.description)

        if (classData.title != null && (classData.title).trim() != ""){
          alert("Campo 'name' OK");
          if (classData.link != null && (classData.link).trim() != ""){
           alert("Campo 'link' OK");
           if (classData.description != null && (classData.description).trim() != ""){
            alert("Campo 'description' OK");
             handleModule(indice);
             setModule((prevModule) =>
              prevModule.filter((_, elemento) => elemento !== indice)
            );
            
             clear();
            
           }
           else {alert("Campo 'description' vazio");}
          }
          else {alert("Campo 'link' vazio")}
        }
        else {
          alert("Campo 'name' vazio")

        }}

        const handleModule = (index) => {
          setModule((prevModule) => [
            ...prevModule.slice(0, index-1),
            classData,
            ...prevModule.slice(index),
          ]);
        };
        
        


        const clear = () => {
          setClassDataState({
            title:"",
            link:"",
            description:""
          })
        }

        useEffect(() => {

          for (let i = 0; i < module.length; i++){
            
            console.log("Consultando indice: " + i + module[i])
          }
        }, [module]); // Executa toda vez que classData mudar

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
               <BoxInput onChange={(event) => handleIndice(event)} optionE={optionEList}/></div></div>

               <div className={`${styles.inputName} ${styles.overInput}`}><TXTinputP id={"title"} name={"title"} onChange={(event) => ClassDataSet(event)} 
               placeholder={"Digite o titulo da aula"}/></div>

               <div className={`${styles.inputLink} ${styles.overInput}`}><TXTinputP id={"link"} name={"link"} onChange={(event) => ClassDataSet(event)} 
               placeholder={"Cole aqui o link do conteudo desta aula"}/></div>

               <div className={styles.inputDesc}><TXTinputM name={"description"} onChange={(event) => ClassDataSet(event)} 
               placeholder={"Descreva os pontos mais interessantes para essa aula"}/></div>

               <div className={styles.Button}>
                <div className={styles.Buttonover}><Button message={"Enviar"} class="button"/>   </div>
                <div className={styles.Buttonover}><Button func={Verify} message={"Salvar"} class="Save"/>   </div>
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