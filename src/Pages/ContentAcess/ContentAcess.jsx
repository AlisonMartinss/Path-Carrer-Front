import styles from '../ContentAcess/ContentAcess.module.css'

/* Componentes */

import SideBar from '../../Components/SideBar/SideBar'
import WindowModule from '../../Components/WindowModule/WindowModule';
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG';

/* Recursos */

import { GiBookCover } from "react-icons/gi";
import {useNavigate } from "react-router-dom"
import {useState,useEffect} from 'react'
import CabecalhoV2 from '../../Components/CabecalhoV2/CabecalhoV2.jsx';
import { AddPath,RemovePath,UserPathOrder,GetContentByPath,PathDelete} from '../ContentAcess/ContentAcessAux.js';
import { ShortPath } from '../../Components/1he GlobalFunctions/GlobalFunctions.js';



function ContentAcess (){

    const navigate = useNavigate();
    
    const [Entity,SetEntity] = useState("");
    const [ModuleListRef, SetModuleListRef] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [ContentJSON,setContentJSON] = useState({}); 
    const [buttons] = useState(  
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


    const whenselectingmodule = (e,index,ClassOnSeeAlredy) => { 
      e.preventDefault();
      localStorage.setItem("ModuleIndexON",index)
      localStorage.setItem("ClassYepList",JSON.stringify(ClassOnSeeAlredy))
      navigate('/class')
    }
    async function WhenWantDeletePath () {
      setIsLoading(true);
      await PathDelete();
      setIsLoading(false);
    }
    async function actionButtonForUsersAndAuthor (e) {
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
          await WhenWantDeletePath();
          navigate('/Explorer')
        }
        else {
          alert("Ação n indentificada")
        }
      }
      else if (Entity === "studentOff"){
        if (e === "Student-off-add"){
          await AddPath();
          navigate('/Loby')
        }
      }
      else if (Entity === "studentOn") {
        if (e === "Student-on-remove"){
          await RemovePath();
          navigate('/explorer')
        }
        
      }
    }
    function SideBarOnOff () {
        setIsClicked((prev) => (!prev))
    };

    useEffect(() => {

      (async () => {
      setIsLoading(true);
      setContentJSON( await GetContentByPath());
      console.log(" await GetContentByPath()")
      console.log( await GetContentByPath())
      setIsLoading(false);
      })();

    }, []);

    useEffect(() => {
      const MyPathList = Object.keys(JSON.parse(localStorage.getItem("LobyInfo")).myPaths);
      const relaction = UserPathOrder(localStorage.getItem("PathID_on"),ContentJSON.IdAuthor,MyPathList);

      // defining Relationship between user and path

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
        // Defining module specifications
        (async () => {
          try {
          let ModuleOfUser = [];
          const pathID = localStorage.getItem("PathID_on");
          const ShirtInfoPath = await ShortPath(pathID);
          const ModuleOfPathInUserProfile = (JSON.parse(localStorage.getItem("LobyInfo"))).myPaths[pathID].moduleSeens;

          let i  = 0;
          for (const module of ContentJSON.modulos){

            let ClassYep = 0
            let ClassOnSeeAlredy = []
            if (ModuleOfPathInUserProfile[i] != null){
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
        
          SetModuleListRef(ModuleOfUser)
        }
        catch (error) {
          if (error.response) {
            const serverMessage = error.response.data?.erro;
            
            if (serverMessage === "Token inválido ou expirado") {
              alert(serverMessage)
              console.error("Sessão expirada. Faça login novamente !" + serverMessage);
              alert("Sessão expirada. Faça login novamente !");
              window.location.href = '/login'
              return;
            }
          }
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
                  handleClick={SideBarOnOff}
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
                        {Array.isArray(ModuleListRef) && ModuleListRef.length > 0  ? (
                        ModuleListRef.map((element,index) => (
                            <div className={styles.content_area}>
                              <WindowModule
                              titleMain={element.name}
                              nClassYep={element.nClassYep}
                              nClass={element.nClass}
                              category={ContentJSON.category}
                              onClick={(e) => whenselectingmodule(e,index,element.ClassOnSeeAlredy)}/>
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
                                  handleClick={(e) => actionButtonForUsersAndAuthor(element.id)}
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
                                    handleClick={(e) => actionButtonForUsersAndAuthor(element.id)}
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
                                  handleClick={(e) => actionButtonForUsersAndAuthor(element.id)}
                                  />
                                </div>
                              )}                          
                            </div>                           
                          ):null
                        }                      
                      </div>
                    </div>
                </div>
             </div>
            </div>

                
        </main>
    )
}
export default ContentAcess;