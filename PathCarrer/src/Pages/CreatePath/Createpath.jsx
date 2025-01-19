import styles from '../CreatePath/CreatePath.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import BoxInput from '../../Components/BoxInput/BoxInput'
import Button from '../../Components/Button/Button'
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG'



import {useState,useEffect } from 'react'
import TXTinputM from '../../Components/TXTinputM/TXTinputM'

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

      const deleteElement = (tag) => {
         setTags(tags.filter(elemento => elemento !== tag));
         // filter mantem os que cuprem a condição
       }


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
         <form className={styles.form}>
            <div className={styles.inputA}>
               <div className={styles.title_input}><TXTinputP placeholder={"Digite o titulo do seu Path"}/></div>
               <div className={`${styles.txtover} ${styles.ctoA}`}>
                     Selecione uma <strong className={styles.strong}>categoria</strong> que se encaixa no seu <strong className={styles.strong}>Path:</strong>
               </div>
               <div className={styles.categoriaInput}><BoxInput/></div>
               <div className={`${styles.txtover} ${styles.ctoA}`}>
                     Selecione cinco <strong className={styles.strong}>adjetivos</strong> que se encaixam no seu <strong className={styles.strong}>Path:</strong>
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
                  <div className={`${styles.ctoC} ${styles.txtover}`}>
                     Digite <strong className={styles.strong}>palavras chaves</strong> que se relacionam com seu <strong className={styles.strong}>Path:</strong>
                  </div>
                  <div className={styles.inputTag}>
                          <div className={styles.button}><Button func={halndlechangetags} class={"click"} message={"submeter"}/></div>
                          <div className={styles.inputTag_core}><TXTinputP placeholder={"#Calculo #Progamação #ilustração . . . "} onChange={(e) => setinputxt(e.target.value)}/></div>
                  </div>
               </div>      
               <div className={styles.showTags}>       
                  {tags.map((tag) => (
                  <div className={styles.tagsElement}>
                     <div onClick={() => deleteElement(tag)} className={styles.tagExcluir}>
                        <ButtonIMG  iconi={"FaDeleteLeft"} iconi2={"iconn2"}/>
                     </div>
                     <div className={styles.tagCore}>#{tag}</div>                            
                  </div>))}
               </div>
            </div>
            <div className={styles.inputC}>
               <div className={`${styles.ctoD} ${styles.txtover}`}> Descreva o seu <strong className={styles.strong}>Path</strong></div>
               <div className={styles.inputDesc}><TXTinputM/></div>
               <div className={styles.enviar}><Button class={"button"} message={"Enviar"}/></div> 
            </div>
            </form> 
        </main>
    )
}
export default CreatePath