import styles from '../CreatePath/CreatePath.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import BoxInput from '../../Components/BoxInput/BoxInput'
import Button from '../../Components/Button/Button'
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG'



import {useState,useEffect, useContext } from 'react'
import {PathStepsContext} from '../../Provider/CreatePathSteps'
import TXTinputM from '../../Components/TXTinputM/TXTinputM'

function CreatePath () {

   const [oneStap,SetOneStap] = useContext(PathStepsContext)

   const [adjectives,Setadjectives] = useState(
      {
         txt:"10",
         value:"10"
      }
   )

   const setInfo = (event) =>{
      event.preventDefault();
      const {name,value} = event.target;
      SetOneStap({[name]:value});
   }
    
   const [inputxt, setinputxt] = useState("");
   const [tags,setTags] = useState([]);

    const tagsLimits = () =>{
         if (tags.length < 8){
            setTags([...tags,inputxt]);
         }
         else{
            alert("Você chegou no limite no numero de #Tags")
      }}

      const deleteElementTags = (tag) => {
         setTags(tags.filter(elemento => elemento !== tag));
      }


    useEffect(() => {
      for (let i = 0; i < tags.length; i++){
         console.log("i: " + i + " " + tags[i])
      }
    }, [tags]);

    return (
        <main className={styles.main}>
         <header className={styles.header}>
            <CabecalhoPadrao/>
         </header>

         <form className={styles.form}>

            <div className={styles.input_NameCategoryAdjective}>
              <div className={styles.title_input}>
                 <TXTinputP
                 placeholder={"Digite o titulo do seu Path"}
                 value={"titulo"}
                 onChange={setInfo}/>
              </div>
              <div className={`${styles.txtover} ${styles.CallToAction}`}>
                     Selecione uma <strong className={styles.strong}>categoria</strong> que se encaixa no seu <strong className={styles.strong}>Path:</strong>
              </div>
              <div className={styles.categoriaInput}>
                 <BoxInput
                 onChange={setInfo}
                 />
               </div>
              <div className={`${styles.txtover} ${styles.CallToAction}`}>
               Selecione cinco <strong className={styles.strong}>adjetivos</strong> que se encaixam no seu <strong className={styles.strong}>Path:</strong>
              </div>
              <div className={styles.adjetivosInput}>
               {adjectives.slice(0,5).map((element) => (
                  <div className={styles.boxAdjetivo}>
                     <BoxInput
                     optionE={adjectives}/>
                  </div>
               ))}
              </div>
            </div>
            <div className={styles.inputTags}>
              <div className={styles.tags}>
                 <div className={`${styles.CallToAction} ${styles.txtover}`}>
                  Digite <strong className={styles.strong}>palavras chaves</strong> que se relacionam com seu <strong className={styles.strong}>Path:</strong>
                 </div>
                 <div className={styles.inputTag}>
                     <div className={styles.button}><Button func={tagsLimits()} class={"click"} message={"submeter"}/></div>
                     <div className={styles.inputTag_core}><TXTinputP placeholder={"#Calculo #Progamação #ilustração . . . "}
                     onChange={(e) => setinputxt(e.target.value)}/></div>
                  </div>
               </div>      
               <div className={styles.showTags}>       
                 {tags.map((tag) => (
                   <div className={styles.tagsElement}>
                     <div onClick={() => deleteElementTags(tag)} className={styles.tagExcluir}>
                       <ButtonIMG  iconV={"FaDeleteLeft"} icon_style={"iconn2"}/>
                     </div>
                     <div className={styles.tagCore}>#{tag}</div>                            
                  </div>))}
               </div>
            </div>
            <div className={styles.inputC}>
              <div className={`${styles.CallToAction} ${styles.txtover}`}> Descreva o seu <strong className={styles.strong}>Path</strong></div>
              <div className={styles.inputDesc}><TXTinputM/></div>
              <div className={styles.enviar}><Button class={"button"} message={"Enviar"}/></div> 
            </div>
         </form> 
        </main>
    )
}
export default CreatePath