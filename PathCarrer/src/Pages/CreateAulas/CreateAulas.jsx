import styles from '../CreateAulas/CreateAulas.module.css'

// =-=-=-=-=- Componentes =-=-=-=-=- //

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import TXTinputM from '../../Components/TXTinputM/TXTinputM'
import MessageIMG from '../../Components/messageIMG/messageIMG'
import Dicas from '../../Components/Dicas/Dicas'
import Button from '../../Components/Button/Button'

// =-=-=-=-= Midias =-=-=-=-= //
import JP2 from '../../assets/Midias/JP2.png'

// =-=-=-=-= Provider =-=-=-=-= //

import { PathContext } from '../../Provider/Provider'
import { useNavigate } from "react-router-dom"
import { useContext, useState,useEffect } from 'react'

function CreateAulas (){
      
      const {setClassData} = useContext(PathContext);

      //Contador do indice da aula
      const [indiceClass, setIndiceClass] = useState(1);
      const nextClass = () => {
        setIndiceClass((prevIndice) => prevIndice + 1);
      };

      const [module,setModule] = useState ({
        modulo:[]
      });

      //Objeto da aula
      const [classData,setClassDataState] = useState ({
        title:"",
        link:"",
        description:"",
      });
      
      // OverSet

      const ClassDataSet = (event) => {
        const {name, value} = event.target;
        console.log("Atualizando campo:", name, "com valor:", value);
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
           }
           else {alert("Campo 'description' vazio");}
          }
          else {alert("Campo 'link' vazio")}
        }
        else {
          alert("Campo 'name' vazio")

        }}

        useEffect(() => {
          console.log("O estado classData foi atualizado:", classData);
        }, [classData]); // Executa toda vez que classData mudar

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
               <div className={styles.recado}>Você está editando a aula de índice<strong className={styles.strong}>{indiceClass}</strong></div>

               <div className={`${styles.inputName} ${styles.overInput}`}><TXTinputP id={"title"} name={"title"} func={(event) => ClassDataSet(event)} 
               placeholder={"Digite o titulo da aula"}/></div>

               <div className={`${styles.inputLink} ${styles.overInput}`}><TXTinputP id={"link"} name={"link"} func={(event) => ClassDataSet(event)} 
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