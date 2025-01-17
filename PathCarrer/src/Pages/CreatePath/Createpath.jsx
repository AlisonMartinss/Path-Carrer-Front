import styles from '../CreatePath/CreatePath.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import BoxInput from '../../Components/BoxInput/BoxInput'
import Button from '../../Components/Button/Button'
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG'

import {useState,useEffect } from 'react'

function CreatePath () {
    const [inputxt, setinputxt] = useState("");
    const [tags,setTags] = useState([]);

    const halndlechangetags = () =>{
      if (tags.length < 8){
         setTags([...tags,inputxt]);
      }
      else{
         alert("Você chegou no limite no numero de #Tags")
      }}


    useEffect(() => {
      for (let i = 0; i < tags.length; i++){
         console.log("i: " + i + " " + tags[i])

      }
    }, [tags]); // Executa toda vez que classData mudar

    return (
        <main className={styles.main}>
         <header className={styles.header}>
            <CabecalhoPadrao/>
         </header>
            <div className={styles.core}>
            <form className={styles.form}>
               <div className={styles.inputA}>
                  <div className={styles.title_input}><TXTinputP/></div>

                  <div className={`${styles.txtover} ${styles.ctoA}`}>
                     Selecione uma <strong className={styles.strong}>categoria</strong> que se encaixa no seu path:
                  </div>

                  <div className={styles.categoriaInput}><BoxInput/></div>

                  <div className={`${styles.txtover} ${styles.ctoA}`}>
                     Selecione cinco <strong className={styles.strong}>adjetivos</strong> que se encaixam no seu path:
                  </div>

                  <div className={styles.adjetivosInput}>
                     <div className={styles.boxAdjetivo}><BoxInput/></div>
                     <div className={styles.boxAdjetivo}><BoxInput/></div>
                     <div className={styles.boxAdjetivo}><BoxInput/></div>
                     <div className={styles.boxAdjetivo}><BoxInput/></div>
                     <div className={styles.boxAdjetivo}><BoxInput/></div>
                  </div>
               </div>
               <div className={styles.inputB}>
                     <div className={styles.tags}>
                        <div className={styles.ctoC}></div>
                        <div className={styles.inputTag}>
                          <div className={styles.button}><Button func={halndlechangetags} class={"click"} message={"submeter"}/></div>
                          <div className={styles.inputTag_core}><TXTinputP onChange={(e) => setinputxt(e.target.value)}/></div>
                        </div>
                     </div>      
                     <div className={styles.showTags}>       
                        {tags.map((tag) => (
                           <div className={styles.tagsElement}>
                              <div className={styles.tagExcluir}><ButtonIMG value={"tag"} iconi={"RiDeleteBack2Fill"} iconi2={"iconn2"}/></div>
                              <div className={styles.tagCore}>#{tag}</div>                             
                           </div>
                           ))}
                     </div>
               </div>     
            </form> 
            </div>
        </main>
    )
}
export default CreatePath