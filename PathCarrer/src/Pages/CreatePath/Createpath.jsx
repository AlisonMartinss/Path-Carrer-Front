import styles from '../CreatePath/CreatePath.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import BoxInput from '../../Components/BoxInput/BoxInput'
import Button from '../../Components/Button/Button'
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG'

import {useState,useEffect, useContext} from 'react'
import { data, useNavigate } from "react-router-dom"

import {PathStepsContext} from '../../Provider/CreatePathSteps/CreatePathSteps'
import TXTinputM from '../../Components/TXTinputM/TXTinputM'

function CreatePath ({enviarDestino,PreSend}) {
   const navigate = useNavigate(); 

   const {oneStap, SetOneStap,SetAPImodel} = useContext(PathStepsContext);
   const [adjectivesList,setAdjectivesList] = useState([]);
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

   const handlePermissionAPI = () => {
      /* 
          Serve para atualizar determinado campo do context API com as informações
          aqui obtidas, as informações atuais estão sendo colocadas no campo 'oneStap'
          e sendo redirecionadas para o modelo contido no context API

          <alfa> = input ---> oneStap ---> {Modelo no context API}

          Essa função garante a etapa alfa seja executada.
      */
      SetAPImodel((prev) => ({
         ...prev,
         onePathDTO: { ...prev.onePathDTO, ...oneStap } 
      })); 
   }
    
   const setInfo = (event) => {
      /*
         Para os campos de input que contem um input de somente uma informação
         como por exemplo input de titulo. Nos baseamos na propriedade 'name' da
         tag HTML para saber qual campo no Context API devemos preencher.
         
         Ex: A tag de input de texto tem o name = 'titulo', o campo titulo do context
         API terá seu atributo preenchido por esse recebimento.
      
      */
      event.preventDefault();
      const { name, value } = event.target;
    
      SetOneStap((prevState) => ({
        ...prevState,
        [name]: value,
      }));
   };

  

   const handleAdjective = (e, index) => {
      /*
        Adiciona um novo adjetivo e Garante a atualização 
        circular do array.
      */
      const { value } = e.target;
  
      setAdjectivesList((prev) => {
          const newList = [...prev];
          newList[index] = value;
          return newList;
      });
   };

  const AddTag = () => {
      /*
        Adiciona uma nova tag.
      */
      if (9 >  tags.length){
         setTags((prev) => ([...prev,inputxt]))
      }
      else {
         alert("Você já usou o limite de palavras chaves")
      }
   }  
  
   const deleteElementTags = (tag) => {
      /*
        deleta tags.
      */
      
      setTags(tags.filter(elemento => elemento !== tag));
   }

   const intheend = () => {
      /* 
       Ao final ao clicar em enviar:

       (a) Adicionamos a lista 'tags' que está presente no context API 
           a lista de tags local.

       (b) Adicionamos a lista 'adjectives' que está presente no context API 
           a lista de adjectives local.    
      */
      SetOneStap((prevState) => ({
         ...prevState,
         tags: tags,
      }));
      SetOneStap((prevState) => ({
         ...prevState,
         adjectives: adjectivesList,
      }));
      handlePermissionAPI();
      {PreSend}
      navigate(enviarDestino)
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
    },[oneStap]);

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
               {adjectives.slice(0,5).map((element,key) => (
                  <div className={styles.boxAdjetivo}>
                     <BoxInput
                     optionE={adjectives}
                     onChange={(e) => handleAdjective(e,key)}
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
                        <Button func={(e) => AddTag()}
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