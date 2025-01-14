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
import { useContext, useState } from 'react'

function CreateAulas (){
      
      const {setClassData} = useContext(PathContext);

      const [indiceClass, setIndiceClass] = useState(1);
      const nextClass = () => {
        setIndiceClass((prevIndice) => prevIndice + 1);
      };

      const [module,setModule] = useState ({
        modulo:[]
      });

      const [classData,setClassDataState] = useState ({
        title:"",
        link:"",
        description:"",
      });

    return (
        <main className={styles.main}>
            <header className={styles.head}><CabecalhoPadrao/></header>

            <div className={styles.core}>

             <div className={styles.tut_1}>
               <Dicas class={"dir"} message={"Repare no indice que você está editando."}/>
               <Dicas class={"esq"} message={"Clique em salvar para salvar as edições feitas e editar a proxima aula."}/>
             </div>

             <form className={styles.core_1}>
               <div className={styles.recado}>Você está editando a aula de índice<strong className={styles.strong}>{indiceClass}</strong></div>

               <div className={`${styles.inputName} ${styles.overInput}`}><TXTinputP placeholder={"Digite o titulo da aula"}/></div>
               <div className={`${styles.inputLink} ${styles.overInput}`}><TXTinputP placeholder={"Cole aqui o link do conteudo desta aula"}/></div>
               <div className={styles.inputDesc}><TXTinputM placeholder={"Descreva os pontos mais interessantes para essa aula"}/></div>
               <div className={styles.Button}>
                <div className={styles.Buttonover}><Button message={"Enviar"} class="button"/>   </div>
                <div className={styles.Buttonover}><Button message={"Salvar"} class="Save"/>   </div>
               </div>
             </form>

             <div className={styles.tut_2}>
              <div className={styles.tut_img}>
               <MessageIMG href={"https://www.youtube.com/watch?v=63nfV47oDhU"}img={JP2} message={"Está com duvida de como lidar com essa etapa? Clique aqui"}/>
              </div>
                
             </div>
                
            </div>

            

        </main>
    )
}

export default CreateAulas