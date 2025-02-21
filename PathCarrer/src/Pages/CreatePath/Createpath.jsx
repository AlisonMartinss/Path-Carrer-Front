import styles from '../CreatePath/CreatePath.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import BoxInput from '../../Components/BoxInput/BoxInput'
import Button from '../../Components/Button/Button'
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG'

import {useState,useEffect, useContext} from 'react'
import { data, useNavigate } from "react-router-dom"
import axios from 'axios';

import {PathStepsContext} from '../../Provider/CreatePathSteps/CreatePathSteps'
import TXTinputM from '../../Components/TXTinputM/TXTinputM'

function CreatePath () {
   // ============== API =================
   useEffect(function() {
      axios.get("http://localhost:8080/CRUD").then(function(response){
         alert(response.data)
      })
   },[])

   //====================================
   const navigate = useNavigate(); 

   const {oneStap, SetOneStap,SetAPImodel} = useContext(PathStepsContext);
   const [inputxt, setinputxt] = useState("");
   const [tags,setTags] = useState([]);
   
   const [category] = useState([
      {
         value:"Selecione",
         txt: "Selecione"
      },
      {
        value:"Tecnologia",
        txt: "Tecnologia"
      },
      {
         value:"Marketing",
         txt: "Marketing"
      },
      {
         value:"Educação",
         txt: "Educação"
      },
      {
         value:"financeira",
         txt: "financeira"
      },
      {
         value:"Trafego Pago",
         txt: "Trafego Pago"
      },
      {
         value:"Emprendedorismo",
         txt: "Emprendedorismo"
      },
      {
         value:"Enem",
         txt: "Enem"
      },
   ])


   const [adjectives] = useState([
      {
         value:"Selecione",
         txt: "Selecione"
      },
      {
         txt:"Objetivo",
         value:"Objetivo"
      },
      {
         txt:"Pratico",
         value:"Pratico"
      },
      {
         txt:"revisão",
         value:"revisão"
      },
      {
         txt:"aplicação teorica",
         value:"aplicação teorica"
      },
      {
         txt:"aplicação no campo pratico",
         value:"aplicação no campo pratico"
      },
      {
         txt:"Versátil",
         value:"Versátil"
      },
      {
         txt:"Descomplicado",
         value:"Descomplicado"
      },
      {
         txt:"Multidisciplinar",
         value:"Multidisciplinar"
      },
      {
         txt:"Integrado",
         value:"Integrado"
      },
      {
         txt:"Imersivo",
         value:"Imersivo"
      },
   ]
   )
    
   const setInfo = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
    
      SetOneStap((prevState) => ({
        ...prevState,
        [name]: value,
      }));
   };

   const setInfoList = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
    
      SetOneStap((prevState) => ({
        ...prevState,
        [name]: [...prevState.adjectives,value],
      }));
   };

   const handlePermissionAPI = () => {
      SetAPImodel((prev) => ({
         ...prev,
         onePathDTO: { ...prev.onePathDTO, ...oneStap } 
      })); 
   } // Att obj API com o respectivo objeto

   const onFrame = () => {
      if (9 >  tags.length){
         setTags((prev) => ([...prev,inputxt]))
      }
      else {
         alert("Você já usou o limite de palavras chaves")
      }
   }

   const deleteElementTags = (tag) => {
      setTags(tags.filter(elemento => elemento !== tag));
   }

   const intheend = () => {
      SetOneStap((prevState) => ({
         ...prevState,
         tags: tags,
      }));
      handlePermissionAPI();
      navigate('/createmodulo')
   }

   useEffect(() => {
      SetOneStap((prevState) => ({
         ...prevState,
         tags: tags,
      }));
      handlePermissionAPI();
    },[tags]);

    useEffect(() => {
      handlePermissionAPI();
    },[oneStap]);// Reforçando a att da API quando o obj é att

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
                 name={"title"}
                 onChange={setInfo}/>
              </div>
              <div className={`${styles.txtover} ${styles.CallToAction}`}>
                     Selecione uma <strong className={styles.strong}>categoria</strong> que se encaixa no seu <strong className={styles.strong}>Path:</strong>
              </div>
              <div className={styles.categoriaInput}>
                 
                  <div className={styles.boxAdjetivo}>
                     <BoxInput
                     optionE={category}
                     onChange={setInfo}
                     name={"category"}/>
                  </div>
             
               </div>
              <div className={`${styles.txtover} ${styles.CallToAction}`}>
               Selecione cinco <strong className={styles.strong}>adjetivos</strong> que se encaixam no seu <strong className={styles.strong}>Path:</strong>
              </div>
              <div className={styles.adjetivosInput}>
               {adjectives.slice(0,5).map((element) => (
                  <div className={styles.boxAdjetivo}>
                     <BoxInput
                     optionE={adjectives}
                     onChange={setInfoList}
                     name={"adjectives"}/>
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
                     <div className={styles.button}>
                        <Button func={(e) => onFrame()}
                        class={"click"}
                        message={"submeter"}/>                    
                     </div>
                     <div className={styles.inputTag_core}>
                        <TXTinputP
                        name={"tags"}
                        placeholder={"#Calculo #Progamação #ilustração . . . "}
                        onChange={(e) => setinputxt(e.target.value)}                       
                        />
                     </div>
                  </div>
               </div> 

               <div className={styles.showTags}>       
                 {tags.map((tag) => (
                     <div className={styles.tagsElement}>
                        <div onClick={() => deleteElementTags(tag)} className={styles.tagExcluir}>
                        <ButtonIMG  iconV={"FaDeleteLeft"} icon_style={"iconn2"}/>
                        </div>
                        <div className={styles.tagCore}>#{tag}</div>                           
                     </div>
                  ))}
               </div>
            </div>
            <div className={styles.inputC}>
              <div className={`${styles.CallToAction} ${styles.txtover}`}> Descreva o seu <strong className={styles.strong}>Path</strong></div>
              <div className={styles.inputDesc}>
               <TXTinputM
               name={"descPathOver"}
               onChange={setInfo}/>
              </div>
              <div className={styles.enviar}>
               <Button 
               class={"button"} 
               message={"Enviar"}
               func={intheend}/>
              </div> 
            </div>
         </form> 
        </main>
    )
}

export default CreatePath;