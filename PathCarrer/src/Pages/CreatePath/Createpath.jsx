import styles from '../CreatePath/CreatePath.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import BoxInput from '../../Components/BoxInput/BoxInput'
import Button from '../../Components/Button/Button'
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG'

import {useState,useEffect, useContext} from 'react'

import {PathStepsContext} from '../../Provider/CreatePathSteps/CreatePathSteps'

import TXTinputM from '../../Components/TXTinputM/TXTinputM'
import Conteudo from '../../Components/Conteudo/Conteudo'
import CabecalhoV2 from '../../Components/CabecalhoV2/CabecalhoV2'

function CreatePath ({PreSend}) {

   /*
      Estados:

       - adjectivesList: Lista de adjetivos a escolher.
       - inputxt: Armazena a tag digitada.
       - tags: Lista de tags.
       - category: Lista de categorias a escolher.
       - adjectives: Lista de adjetivos a escolher.

      Funções: 
      
       - handlePermissionAPI: Serve para atualizar determinado campo do context API com as informações
         aqui obtidas, as informações atuais estão sendo colocadas no campo 'oneStap'
         e sendo redirecionadas para o modelo contido no context API.

       - setInfo: Para os campos de input que contem um input de somente uma informação
         como por exemplo input de titulo. Nos baseamos na propriedade 'name' da
         tag HTML para saber qual campo no Context API devemos preencher.

       - handleAdjective: Adiciona um novo adjetivo e Garante a atualização 
         circular do array.
         
       - AddTag: idem.

       - deleteElementTags: idem.

       - intheend: Ao final ao clicar em enviar:
         (a) Adicionamos a lista 'tags' que está presente no context API 
             a lista de tags local.
             
         (b) Adicionamos a lista 'adjectives' que está presente no context API 
             a lista de adjectives local.  
   */
   const {oneStap, SetOneStap,SetAPImodel} = useContext(PathStepsContext);

   const [adjectivesList,setAdjectivesList] = useState([]);
   const [adjectiveAux,setAdjectiveAux] = useState([]); // Ajuda na previa de renderização do path
   const [inputxt, setinputxt] = useState("");
   const [tags,setTags] = useState([]);
   
   const [category] = useState([
      {
         value:"Selecione",
         txt: "Selecione"
      },
      {
        value:"Inteligência Artificial",
        txt: "Inteligência Artificial"
      },
      {
         value:"Marketing Digital",
         txt: "Marketing Digital"
      },
      {
         value:"Educação Financeira",
         txt: "Educação Financeira"
      },
      {
         value:"Tecnologia da Informação",
         txt: "Tecnologia da Informação"
      },
      {
         value:"Modelo de Negócio",
         txt: "Modelo de Negócio"
      },
      {
         value:"Produtividade",
         txt: "Produtividade"
      },
      {
         value:"Design Gráfico",
         txt: "Design Gráfico"
      },
      {
         value:"Criptomoedas",
         txt: "Criptomoedas"
      }
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
      const object = {name:value};

      setAdjectiveAux((prev) => {
         const newList = [...prev]; // Copia da antiga 
         newList[index] = object;
         return newList;
      });
  
      setAdjectivesList((prev) => {
          const newList = [...prev]; // Copia da antiga 
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
      PreSend();
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
            <CabecalhoV2/>
         </header>

         <div className={styles.PathPrev}>
            <Conteudo
               img={oneStap.banner}
               adjectives={adjectiveAux}
               PathName={oneStap.title}
               Category={oneStap.category}
               onClick={(e) => alert("Esta é uma previa de como será apresentado o seu Path para outros usuarios")}
            />
         </div>

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
               {/*
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
              </div>*/}
              <div className={`${styles.txtover} ${styles.CallToAction}`}>
                Escolha uma imagem que irá compor a <strong className={styles.strong}> capa do seu path </strong> 
              </div>

              <div className={styles.title_input}>
                 <TXTinputP
                 placeholder={"Cole aqui o link da imagem"}
                 name={"banner"}
                 onChange={setInfo}/>
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