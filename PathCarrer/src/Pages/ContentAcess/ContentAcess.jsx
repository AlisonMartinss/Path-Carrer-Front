import styles from '../ContentAcess/ContentAcess.module.css'

/* Componentes */

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import SideBar from '../../Components/SideBar/SideBar'
import WindowModule from '../../Components/WindowModule/WindowModule';
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG';
import WindowNote from '../../Components/WindowNote/WindowNote';


/* IMAGENS */

import { AiOutlineComment } from "react-icons/ai";
import { GiBookCover } from "react-icons/gi";
import {useNavigate } from "react-router-dom"
import {useState,useEffect} from 'react'
import httpClient from '../../APIs/PathCarrerAPI/PathCarrer'

import { RecuperandoLoby, EntityDef } from '../ContentAcess/ContentAcessAux.js';


function ContentAcess (){
  /* 
    - Será usado quando capturarmos o id do botao
  */
  const navigateEditPath = useNavigate(); 
  const navigateAddModule = useNavigate();
  const navigateIntoModulo = useNavigate(); 

    
    const [classe,SetClasse] = useState(); // Determinamos aqui qual a relação entre user x path
    const [LobyInfo,SetLobyInfo] = useState(); // Local onde as inforamções do usuario em relação ao seu Loby será armazenada
    const [isClicked, setIsClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [ContentJSON,setContentJSON] = useState({}); // Conteudo da Resposta da chamada da API. Conteudo do Path

    /* Chamada API - Obter informações sobre o Path 
      - O formato de respota esperado pela API pode ser visto no arquivo
      JS desse componente. Busque pelo titulo 'API_JSON - User/GetPath' */
    async function GetContent() {
      setIsLoading(true);
      try {
        const response = await httpClient.get(
          `User/GetPath?PathID=${localStorage.getItem("PathID_on")}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        setContentJSON(response.data);

      } catch (err) {
        console.error("Erro na requisição:", err);
        alert("Erro da chamada");
      } finally {
        setIsLoading(false);
      }
    }

    const ToIntoModulo = (e,index) => {
      e.preventDefault();
      localStorage.setItem("ModuleIndexON",index)
      navigateIntoModulo('/class')
    }
    const [buttons] = useState(  // Botoes a serem renderizados.
      {
        author:
        [
          {
            id:"Adicionar modulo",
            iconV:"IoIosAddCircle",
            title:"Adicionar modulo"
          },
          {
            id:"Editar Path",
            iconV:"TbPencilCog",
            title:"Editar Path"
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

    const ButtonAction = (e) => {
    // Nessa função determinamos a ação do Usuario e do autor, que são: Adicionar,
    // excluir Path e Adicionar modulos, editar path
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

    useEffect(() => { //Chamada inicial para para o carregamento da pagina
      GetContent(); // Chamada inical para obter informações do Path
    }, []);




    useEffect(() => {
      if (!isLoading && ContentJSON) {
        console.log(ContentJSON.adjectives);
      }
    }, [ContentJSON, isLoading]);

    return (

        <main className={styles.main}>
            <header className={styles.header}><CabecalhoPadrao/></header>
            <div className={styles.core}>
                
             <div className={`${isClicked ? styles.sideBarOFF : styles.sideBar}`}>
                <SideBar
                  handleClick={handleClick}
                  description={ContentJSON.description}
                  AuthorName={ContentJSON.IdAuthor}
                  adjectivesList={ContentJSON.adjectives}/>                   
             </div>

             <div className={styles.view_core}>
                <div className={styles.module_core}>
                    <div className={styles.module_main}>

                      <div className={styles.icon}>
                        <div className={styles.icon_area}><GiBookCover className={styles.icon_conf}/></div>
                      </div>

                      <div className={styles.contentMain}>

                        {/* Verificando se ContentJSON.modulos é um array e se não está vazio */}
                        {Array.isArray(ContentJSON.modulos) && ContentJSON.modulos.length > 0 ? (
                          ContentJSON.modulos.map((element,index) => (
                            <div className={styles.content_area}>
                              <WindowModule
                              titleMain={element.name}
                              porcent={"100%"}
                              img={""}
                              onClick={(e) => ToIntoModulo(e,index)}/>
                            </div>
                          ))
                        ) : (
                          <div className={`${styles.alert} ${styles.txtOver2}`}>Não há módulos para exibir.</div>
                        )}

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
                                  handleClick={(e) => ButtonAction(element.id)}
                                  />
                                </div>
                              )}
                            </div>
                            
                          ): classe === "studentOn" ? (
                              <div className={styles.authorAux}>
                                {buttons.student.slice(0,1).map((element) =>
                                  <div title="Remover modulo" className={styles.LitleIcone}>
                                    <ButtonIMG
                                    iconV={element.iconV} 
                                    icon_style={"evenConstStyle"}                  
                                    handleClick={(e) => ButtonAction(element.id)}
                                    />
                                  </div>
                                )}
                              </div>
                              
                          ): classe === "author" ? (
                            <div className={styles.authorAux}>
                              {buttons.author.map((element) =>
                                <div title={element.title} className={styles.LitleIcone}>
                                  <ButtonIMG
                                  iconV={element.iconV} 
                                  icon_style={"evenConstStyle"}                  
                                  handleClick={(e) => ButtonAction(element.id)}
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
export default ContentAcess;