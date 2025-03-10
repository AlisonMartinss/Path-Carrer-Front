import styles from '../Class/Class.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG'
import ClassComponent from '../../Components/ClassComponent/ClassComponent'
import {useState,useEffect} from 'react'
import {useNavigate } from "react-router-dom"
import httpClient from '../../APIs/PathCarrerAPI/PathCarrer'

function Class (){

  const [isLoading, setIsLoading] = useState(true);
  const [ContentJSON, setContentJSON] = useState(); // Conteúdo da resposta da API

  const [ClassLinkON, SetClassLinkON] = useState(null); // Usados para carregar link e desc da aula assistida
  const [DescON, SetDescON] = useState(null);

  const navigateEditModulo = useNavigate();
  const navigateEditClass = useNavigate();
  const navigateAddClass = useNavigate();

  const [entity, setEntity] = useState(null);
  const moduleIndex = localStorage.getItem("ModuleIndexON");

  const buttonsRender = [ // Botoes a serem rendereizado caso entity = author
      { core: "editar o modulo", title: "Clique aqui para editar o modulo atual", iconV: "TbPencilCog" },
      { core: "editar a aula", title: "Clique aqui para editar a aula atual", iconV: "RxPencil2" },
      { core: "adicionar aula", title: "Clique aqui para adicionar uma aula", iconV: "IoIosAddCircle" },
  ];

  /* ======= FUNC ======= */
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
          alert("Erro na chamada");
      } finally {
          setIsLoading(false);
      }
  }

  const ClassSelect = (index) => {
    localStorage.setItem("ClassIndex",index)
    const ClassON = ContentJSON.modulos[moduleIndex]?.modulocontent?.[index];
    SetClassLinkON(ClassON.link);
    SetDescON(ClassON.description)
  }

  const SetEntityFunc = (data) => {
    const author = data;  
    if (author === localStorage.getItem("UserName")){
      setEntity("author")
    }
  };

  useEffect(() => {
      GetContent();
  }, []);

  // Recupera informações do localStorage quando ContentJSON é atualizado
  useEffect(() => {
      if (ContentJSON?.modulos && Array.isArray(ContentJSON.modulos)) {
          
          if (moduleIndex !== null && !isNaN(moduleIndex) && moduleIndex >= 0 && moduleIndex < ContentJSON.modulos.length) {
              const firstModuleContent = ContentJSON.modulos[moduleIndex]?.modulocontent?.[0];
              
              if (firstModuleContent) {
                  localStorage.setItem("Class_link", firstModuleContent.link);
                  localStorage.setItem("Class_Desc", firstModuleContent.description);
                  localStorage.setItem("ClassIndex",0)
                  SetClassLinkON(firstModuleContent.link);
                  SetDescON(firstModuleContent.description);
              }
          }
      }
  },[ContentJSON]);

  useEffect(() => {
    alert("Delegação de entity")


    if (ContentJSON && ContentJSON.IdAuthor) {
        console.log("Chamando SetEntity com:", ContentJSON.IdAuthor);
        console.log(localStorage.getItem("UserName"))
        SetEntityFunc(ContentJSON.IdAuthor);
    } else {
        console.warn("IdAuthor ainda não disponível.");
    }
  }, [ContentJSON]);

  const redirectActivity = (e) => {
      if (e === "editar o modulo") {
          alert("API de editar módulo");
          navigateEditModulo("/UpdateModulo");
      } else if (e === "editar a aula") {
          alert("API de editar a aula");
          navigateEditClass("/UpdateClassUnic");
      } else if (e === "adicionar aula") {
          alert("Adicionar aula");
          navigateAddClass("/UpdateNewClass");
      }
  };

  if (isLoading) {
      return <div>Carregando...</div>;
  }

  if (!ContentJSON?.modulos || !Array.isArray(ContentJSON.modulos)) {
      console.log(ContentJSON.modulos);
      return <div>Erro ao carregar os dados do módulo.</div>;
  }

    return (
        <main className={styles.main}>
            <header className={styles.header}><CabecalhoPadrao/></header>
            <div className={styles.core}>

              <div className={styles.sideBar}>
                <div className={`${styles.titlePath} ${styles.txt2}`}>
                  {ContentJSON.modulos[localStorage.getItem("ModuleIndexON")].name !== null ? (
                    ContentJSON.modulos[localStorage.getItem("ModuleIndexON")].name
                  ):
                   <div> Titulo não definido</div>
                   }
                </div>

                {/* Verificando se ContentJSON.modulos é um array e se não está vazio */}
                {Array.isArray(ContentJSON.modulos) && ContentJSON.modulos.length > 0 ? (
                          ContentJSON.modulos[localStorage.getItem("ModuleIndexON")].modulocontent.map((element,index) => (                           
                            <div className={styles.classArea}>
                                <ClassComponent
                                title={element.title}
                                index={index+1}
                                HandleTrue = {(e) => alert("")}
                                HandleFalse= {(e) => alert("")}
                                onClick={(e) => ClassSelect(index)}/>
                            </div>
                          ))
                        ) : (
                        <div>Não há Aulas para exibir.</div>
                )}
              </div>

              <div className={styles.contentArea}>
                {
                  entity === "author" ? (
                    <div className={styles.editar}>
                      {buttonsRender.map((element) => 
                        <div title={element.title} className={styles.edit}>                     
                         <ButtonIMG
                         iconV={element.iconV}
                         icon_style={"evenConstStyle"}
                         handleClick={(e) => redirectActivity(element.core)}/>                  
                        </div>
                      )}                 
                    </div>
                  ):null
                }
               
                <div className={styles.vidArea}>
                  <iframe className={styles.videoMain} src={`https://www.youtube.com/embed/${ClassLinkON}`} frameborder="0"></iframe>
                </div>
                <div className={`${styles.descArea} ${styles.txt}`}>
                  {DescON}
                </div>
              </div>

            </div>            
                    
          
        </main>

    )
}

export default Class