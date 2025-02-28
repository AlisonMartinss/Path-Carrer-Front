import styles from '../ContentAcess/ContentAcess.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import SideBar from '../../Components/SideBar/SideBar'
import WindowModule from '../../Components/WindowModule/WindowModule';
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG';
import WindowNote from '../../Components/WindowNote/WindowNote';


/* IMAGENS */

import { AiOutlineComment } from "react-icons/ai";
import { GiBookCover } from "react-icons/gi";
import {useNavigate } from "react-router-dom"
import {useState} from 'react'


function ContentAcess (){
  /* 
    - Será usado quando capturarmos o id do botao
  */
  const navigateEditPath = useNavigate(); 
  const navigateAddModule = useNavigate(); 

    const [classe,SetClasse] = useState("author"); // Definimos qual o autorithies
    const [isClicked, setIsClicked] = useState(false);
    const jsonData = {
      "onePathDTO": 
      {
        "title":"Primeiro Path",
        "category":"Testagem",
        "descPathOver":"Feito para testar API",
        "tags": ["testagem","funcionamento","API","Postman","PathCarrer"],
        "adjetives":["Objetivo","interativo","exercicios","topico","aulas longas"]
      },
   
      "twoPathDTO":
           {
           "title":"Primeiro Modulo",
           "desc":"Testando o controller da API",
           "ClassList":
            [
               {
                   "title":"1 aula",
                   "link":"1 link",
                   "description": "1 desc"
               },
   
               {
                   "title":"2 aula",
                   "link":"2 link",
                   "description": "2 desc"
               },
   
               {
                   "title":"3 aula",
                   "link":"3 link",
                   "description": "3 desc"
               },
   
               {
                   "title":"4 aula",
                   "link":"4 link",
                   "description": "4 desc"
               }
            ]
           }
   
    }
    const ClassDef = () =>{

    }

    const [buttons] = useState(
      {
        author:
        [
          {
            id:"Adicionar modulo",
            iconV:"IoIosAddCircle"
          },
          {
            id:"Adicionar path",
            iconV:"TbPencilCog"
          }
        ],
        student:
        [
          {
            id:"Student-on-remove",
            iconV:"FaTrash"
          },
          {
            id:"Student-off-add",
            iconV:"MdBookmarkAdd"
          }
        ]
      })

    const ButtonAddPath = (e) => {
      if (classe === "author"){
        alert("API do autor")
        if (e === "Adicionar modulo"){
          alert("Adicionar modulo")
          navigateAddModule('')
        }
        else if (e === "Adicionar path"){
          alert("Adicionar path")
        }
        else {
          alert("Ação n indentificada")
        }
      }
      else if (classe === "studentOff"){
        alert("API do Estudante off")
        if (e === "Student-off-add"){
          alert("Student-off-add")
        }
      }
      else if (classe === "studentOn") {
        alert("API do Estudante on")
        if (e === "Student-on-remove"){
          alert("Student-on-remove")
        }
        
      }
    }
 
    const handleClick = () => {
        setIsClicked((prev) => (!prev))
    };

    


    return(

        <main className={styles.main}>
            <header className={styles.header}><CabecalhoPadrao/></header>
            <div className={styles.core}>
                
             <div className={`${isClicked ? styles.sideBarOFF : styles.sideBar}`}>
                <SideBar
                handleClick={handleClick}/>                   
             </div>

             <div className={styles.view_core}>
                <div className={styles.module_core}>
                    <div className={styles.module_main}>

                      <div className={styles.icon}>
                        <div className={styles.icon_area}><GiBookCover className={styles.icon_conf}/></div>
                      </div>

                      <div className={styles.contentMain}>
                        <div className={styles.content_area}>
                            <WindowModule
                            titleMain={"Titulo de um modulo"}
                            porcent={"100%"}
                            img={""}/>
                        </div>

                        <div className={styles.content_area}>
                            <WindowModule
                            titleMain={"Titulo de um modulo"}
                            porcent={"100%"}
                            img={""}/>
                        </div>

                        <div className={styles.content_area}>
                            <WindowModule
                            titleMain={"Titulo de um modulo"}
                            porcent={"100%"}
                            img={""}/>
                        </div>

                        <div className={styles.content_area}>
                            <WindowModule
                            titleMain={"Titulo de um modulo"}
                            porcent={"100%"}
                            img={""}/>
                        </div>
                          <div className={styles.content_area}>
                            <WindowModule
                            titleMain={"Titulo de um modulo"}
                            porcent={"100%"}
                            img={""}/>
                        </div>

                      </div>

                      <div className={styles.buttonAdd}>
                        {
                          classe === "studentOff" ? (
                            <div className={styles.authorAux}>
                               {buttons.student.slice(1,2).map((element) =>
                                <div title="Adicionar modulo" className={styles.LitleIcone}>
                                  <ButtonIMG
                                  iconV={element.iconV} 
                                  icon_style={"evenConstStyle"}                  
                                  handleClick={(e) => ButtonAddPath(element.id)}
                                  />
                                </div>
                              )}
                            </div>
                            
                          ): classe === "studentOn" ? (
                              <div className={styles.authorAux}>
                                {buttons.student.slice(0,1).map((element) =>
                                  <div title="Adicionar modulo" className={styles.LitleIcone}>
                                    <ButtonIMG
                                    iconV={element.iconV} 
                                    icon_style={"evenConstStyle"}                  
                                    handleClick={(e) => ButtonAddPath(element.id)}
                                    />
                                  </div>
                                )}
                              </div>
                              
                          ): classe === "author" ? (
                            <div className={styles.authorAux}>
                              {buttons.author.map((element) =>
                                <div title="Adicionar modulo" className={styles.LitleIcone}>
                                  <ButtonIMG
                                  iconV={element.iconV} 
                                  icon_style={"evenConstStyle"}                  
                                  handleClick={(e) => ButtonAddPath(element.id)}
                                  />
                                </div>
                              )}                          
                            </div>                           
                          ):null
                        }                      
                      </div>
                    </div>
                </div>
                <div className={styles.module_core}>
                    <div className={styles.module_main}>
                      <div className={styles.icon}>
                       <div className={styles.icon_area}><AiOutlineComment className={`${styles.icon_conf}`}/></div>
                      </div>

                      <div className={styles.contentMain}>
                        <div className={styles.comment_area}>
                          <WindowNote
                          icon_Aa={"BiLike"}
                          icon_Bb={"BiDislike"}
                          ClasseAfterA={"classeAfterAa"}
                          ClasseAfterB={"classeAfterBb"}
                          className={""}/>
                        </div>

                      </div>
                    </div>
                </div> 
             </div>
            </div>

                
        </main>
    )
}

export default ContentAcess