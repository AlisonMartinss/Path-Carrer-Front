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
import CabecalhoV2 from '../../Components/CabecalhoV2/CabecalhoV2.jsx';
import { LobyGet } from '../../Components/1he GlobalFunctions/GlobalFunctions.js';

import { AddPath,RemovePath,UserPathOrder} from '../ContentAcess/ContentAcessAux.js';
import { ShortPath } from '../../Components/1he GlobalFunctions/GlobalFunctions.js';



function ContentAcess (){
  /* 
     ==== Explicações

     - SetEntityFunc: Definir relação User x Path
     - GetContent: informações sobre o Paht.
     - ToIntoModulo: É ativada quando entramos em um modulo,consequentimente 
       setamos as informações nescessarias para obter informações nescessarias
       para esse modulo.
       -
    -  PathDelete: Chamada quando vamos deletar o path 
    -  ButtonAction: indentifica qual função estamos chamando quando o user aperta algum botao.
  */

    const navigate = useNavigate();
    
    const [Entity,SetEntity] = useState(""); // Determinamos aqui qual a relação entre user x path
    const [isClicked, setIsClicked] = useState(false);
    const [ModuleListRef, SetModuleListRef] = useState([]);
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
          
        } catch (err) {
          console.error("Erro na requisição:", err);
          alert("Erro da chamada GetContent");
        } finally {
          setIsLoading(false);
        }
    }
    const ToIntoModulo = (e,index,ClassOnSeeAlredy) => { // Usado quando selecionamos um modulo
      e.preventDefault();
      localStorage.setItem("ModuleIndexON",index)
      localStorage.setItem("ClassYepList",JSON.stringify(ClassOnSeeAlredy))
      navigate('/class')
    }
    async function PathDelete () {
      setIsLoading(true);
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
        alert ("Erro em remover Path")
      }
      finally {
        setIsLoading(false); // Sempre será chamado, finalizando o carregamento
      }
    }
    async function ButtonAction (e) {
    // Nessa função determinamos a ação do Usuario e do autor, que são: Adicionar,
    // excluir Path e Adicionar modulos, editar path
      if (Entity === "author"){
        if (e === "Adicionar modulo"){
          navigate('/CreateNewModulo')
        }
        else if (e === "Editar Path"){
          navigate('/updatePath')
        }
        else if (e === "Deletar Path"){
          PathDelete();
          navigate('/Explorer')
        }
        else {
          alert("Ação n indentificada")
        }
      }
      else if (Entity === "studentOff"){
        if (e === "Student-off-add"){
          await AddPath();
          window.location.reload();
        }
      }
      else if (Entity === "studentOn") {
        if (e === "Student-on-remove"){
          await RemovePath();
          window.location.reload();
        }
        
      }
    }
    const handleClick = () => { // Controle do side bar
        setIsClicked((prev) => (!prev))
    };

   
    useEffect(() => {
      GetContent();
    }, []);

    useEffect(() => {
      const MyPathList = Object.keys(JSON.parse(localStorage.getItem("LobyInfo")).myPaths);
      const relaction = UserPathOrder(localStorage.getItem("PathID_on"),ContentJSON.IdAuthor,MyPathList);

          if (relaction === 2){
            SetEntity("author")
          }
          else if (relaction === 0){
            SetEntity("studentOff")
          }
          else if (relaction === 1){
            SetEntity("studentOn")
          }
      
    }, [ContentJSON,isLoading]);

    useEffect(() => {
      if (Entity === "studentOn" && Array.isArray(ContentJSON.modulos)){
        (async () => {
          try {
          let ModuleOfUser = [];
          const pathID = localStorage.getItem("PathID_on");
          const ShirtInfoPath = await ShortPath(pathID);
          const ModuleOfPathInUserProfile = (JSON.parse(localStorage.getItem("LobyInfo"))).myPaths[pathID].moduleSeens;

          console.info("ContentJSON.modulos")
          console.info(ContentJSON.modulos)

          let i  = 0;
          for (const module of ContentJSON.modulos){ // -> element aqui é um modulo

            let ClassYep = 0
            let ClassOnSeeAlredy = []
            if (ModuleOfPathInUserProfile[i] != null){
              console.log("Lidando com modulo do index " + i)
              for (const Class of ModuleOfPathInUserProfile[i].classSeens) {
                if(ShirtInfoPath.classPresent.includes(Class)){
                ClassYep++
                ClassOnSeeAlredy.push(Class)
              }
              }
              i++
              let ObjOfMoule = 
              {
                name:module.name,
                nClassYep:ClassYep,
                nClass:module.modulocontent.length,
                ClassOnSeeAlredy:ClassOnSeeAlredy
              }
  
              ModuleOfUser.push(ObjOfMoule)
            }
            else 
            {
              let ObjOfMoule_B = 
              {
                name:module.name,
                nClassYep:ClassYep,
                nClass:module.modulocontent.length,
                ClassOnSeeAlredy:[]
              }
  
              ModuleOfUser.push(ObjOfMoule_B)
            } 
          }
          console.log("ModuleOfUser")
          console.log(ModuleOfUser)
          SetModuleListRef(ModuleOfUser)
        }
        catch (error) {
          console.error("Falha ao determinar pocentagem do usuario em relação aos modulo: ",error)
        }
        })();
      }

      else {
        SetModuleListRef(ContentJSON.modulos);
      }
      
    }, [ContentJSON, Entity]); 

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
                        {Array.isArray(ModuleListRef) && ModuleListRef.length > 0  ? (
                        ModuleListRef.map((element,index) => (
                            <div className={styles.content_area}>
                              <WindowModule
                              titleMain={element.name}
                              img={'../../assets/Midias/PNGs/images/ModuleIconDefault.png'}
                              nClassYep={element.nClassYep}
                              nClass={element.nClass}
                              onClick={(e) => ToIntoModulo(e,index,element.ClassOnSeeAlredy)}/>
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
                {/*<div className={styles.module_core}>
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
                </div>*/}
             </div>
            </div>

                
        </main>
    )
}
export default ContentAcess;