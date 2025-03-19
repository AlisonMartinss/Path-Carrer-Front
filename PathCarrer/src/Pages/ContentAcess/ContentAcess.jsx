import styles from '../ContentAcess/ContentAcess.module.css'

/* Componentes */

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import SideBar from '../../Components/SideBar/SideBar'
import WindowModule from '../../Components/WindowModule/WindowModule';
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG';
import WindowNote from '../../Components/WindowNote/WindowNote';


/* Recursos */

import { AiOutlineComment } from "react-icons/ai";
import { GiBookCover } from "react-icons/gi";
import {useNavigate } from "react-router-dom"
import {useState,useEffect} from 'react'
import httpClient from '../../APIs/PathCarrerAPI/PathCarrer'
import { AddPath,RemovePath} from '../ContentAcess/ContentAcessAux.js';
import CabecalhoV2 from '../../Components/CabecalhoV2/CabecalhoV2.jsx';


function ContentAcess (){
  /* 
    - Será usado quando capturarmos o id do botao
  */

    const navigate = useNavigate();
    
    const [Entity,SetEntity] = useState(null); // Determinamos aqui qual a relação entre user x path
    const [LobyInfo,SetLobyInfo] = useState(); // Local onde as inforamções do usuario em relação ao seu Loby será armazenada
    const [isClicked, setIsClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [ContentJSON,setContentJSON] = useState({}); // Conteudo da Resposta da chamada da API. Conteudo do Path
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
          },
          {
            id:"Deletar Path",
            iconV:"HiOutlineTrash",
            title:"Deletar Path"
          }
          
        ],
        student:
        [
          {
            id:"Student-on-remove",
            iconV:"HiOutlineTrash"
          },
          {
            id:"Student-off-add",
            iconV:"MdBookmarkAdd"
          }
        ]
    })

    /* Chamada API - Obter informações sobre o Path 
      - O formato de respota esperado pela API pode ser visto no arquivo
      JS desse componente. Busque pelo titulo 'API_JSON - User/GetPath' */

    const SetEntityFunc = (data,lobyData) => {
        const author = data;
        const Loby = lobyData.myPaths;
        if (author === localStorage.getItem("UserName")){
          alert("O caba")
          SetEntity("author")
        }
        else {
            const isStudentOn = Loby.some((element) => {
            return element.pathID === localStorage.getItem("PathID_on");
            });
        
            if (isStudentOn) {
                alert("Estudante ativo");
                SetEntity("studentOn");
            } else {
                alert("Novato");
                SetEntity("studentOff");
            }
        }
    };    
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
      
          const content = response.data;
          setContentJSON(content);
          const MyPathList = JSON.parse(localStorage.getItem("LobyInfo"));
          SetEntityFunc(content.IdAuthor, MyPathList);
          
        } catch (err) {
          console.error("Erro na requisição:", err);
          alert("Erro da chamada GetContent");
        } finally {
          setIsLoading(false);
        }
    }
    async function LobyGet () {
      setIsLoading(true); // Indica que a requisição está em andamento
      try {
        const response = await httpClient.post('User/Getloby',
          {
            userName:localStorage.getItem("UserName")
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Token")}`,
              "Content-Type": "application/json",
            },
          }
        )
        const JSONdata = response.data;
        localStorage.setItem("LobyInfo",JSON.stringify(JSONdata));
      }catch (err){
        alert ("Erro da chamada LobtGet")
        console.log(err)
      }
      finally {
        setIsLoading(false); // Sempre será chamado, finalizando o carregamento
      }
    }
    const ToIntoModulo = (e,index) => {
      e.preventDefault();
      localStorage.setItem("ModuleIndexON",index)
      navigate('/class')
    }
    async function PathDelete () {
      setIsLoading(true); // requisição está em andamento
      try {
        const response = await httpClient.post('CRUD/PathDelete',
          {
            PathID:localStorage.getItem("PathID_on")
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Token")}`,
              "Content-Type": "application/json",
            },
          }
        )
      }catch (err){
        alert ("Erro da chamada Delete path")
        console.log(err)
      }
      finally {
        setIsLoading(false); // Sempre será chamado, finalizando o carregamento
      }
    }
    

    const ButtonAction = (e) => {
    // Nessa função determinamos a ação do Usuario e do autor, que são: Adicionar,
    // excluir Path e Adicionar modulos, editar path
      if (Entity === "author"){
        alert("API do autor")
        if (e === "Adicionar modulo"){
          alert("Adicionar modulo")
          navigate('/CreateNewModulo')
        }
        else if (e === "Editar Path"){
          alert("Editar Path")
          navigate('/updatePath')
        }
        else if (e === "Deletar Path"){
          alert("Deletar Path")
          PathDelete();

        }
        else {
          alert("Ação n indentificada")
        }
      }
      else if (Entity === "studentOff"){
        alert("API do Estudante off")
        if (e === "Student-off-add"){
          AddPath();
        }
      }
      else if (Entity === "studentOn") {
        alert("API do Estudante on")
        if (e === "Student-on-remove"){
          RemovePath();
        }
        
      }
    }

    const handleClick = () => {
        setIsClicked((prev) => (!prev))
    };

    useEffect(() => {
      GetContent();
      LobyGet();
    }, []);

    return (

        <main className={styles.main}>
            <header className={styles.header}><CabecalhoV2/></header>
            <div className={styles.core}>
                
             <div className={`${isClicked ? styles.sideBarOFF : styles.sideBar}`}>
                <SideBar
                  handleClick={handleClick}
                  description={ContentJSON.description}
                  AuthorName={ContentJSON.IdAuthor}
                  imgPerfil={ContentJSON.PictureProfile}
                  imgBanner={ContentJSON.BannerProfile}
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
                          Entity === "studentOff" ? (
                            <div className={styles.authorAux}>
                               {buttons.student.slice(1,2).map((element) =>
                                <div title="Adicionar Path" className={styles.LitleIcone}>
                                  <ButtonIMG
                                  iconV={element.iconV} 
                                  icon_style={"evenConstStyle"}                  
                                  handleClick={(e) => ButtonAction(element.id)}
                                  />
                                </div>
                              )}
                            </div>
                            
                          ): Entity === "studentOn" ? (
                              <div className={styles.authorAux}>
                                {buttons.student.slice(0,1).map((element) =>
                                  <div title="Remover Path" className={styles.LitleIcone}>
                                    <ButtonIMG
                                    iconV={element.iconV} 
                                    icon_style={"evenConstStyle"}                  
                                    handleClick={(e) => ButtonAction(element.id)}
                                    />
                                  </div>
                                )}
                              </div>
                              
                          ): Entity === "author" ? (
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