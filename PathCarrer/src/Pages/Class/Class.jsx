import styles from '../Class/Class.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG'
import ClassComponent from '../../Components/ClassComponent/ClassComponent'
import {useState,useEffect,useContext} from 'react'
import {useNavigate } from "react-router-dom"
import httpClient from '../../APIs/PathCarrerAPI/PathCarrer'
import { LiaComments } from "react-icons/lia";
import Comment from '../../Components/Comment/Comment'
import PostComment from '../../Components/PostComment/PostComment.jsx'
import { PiBookOpenDuotone } from "react-icons/pi";
import LoadIcon from '../../Components/LoadIcon/LoadIcon.jsx'

import { DeleteClassUnicAPI, DeleteModule, PostCommentFunc, 
         AddSeeClass, RemoveSeeClass, ElementCommentInfo,PostCommentFunc4,DeleteComment} from './ClassAux';


import { GetInfoUser } from '../../Components/1he GlobalFunctions/GlobalFunctions.js'


// ==== Context API ==== //

import { PathStepsContext } from '../../Provider/CreatePathSteps/CreatePathSteps.jsx'


// ===== Arquivos não componentes ===== //

import { formatarNumero } from '../../Components/JSuteis/conversao.js'
import CabecalhoV2 from '../../Components/CabecalhoV2/CabecalhoV2.jsx'

function Class (){
  /*
    Chamdas - API:
    
    - GetContent: Chamada para obter as informações sobre o modulo.

    Funções proprias:

    - ClassSelect: Uma vez que clicado em determinada aula, essa função delega 
      aos estados os atributos nescessarios para ver a aula.
    
    - SetEntityFunc: Serve para definir a relação entre usuario x path. (author?)

    - redirectActivity: Se o usuario for o autor, essa função serve para que quando
      o autor usar uma das funcionalidades permitidas a ele (editar modulo, excluir modulo e etc...)
      sabermos indentificar qual funcionalidade ele (author) está requisitando.
    
  */

  const navigate = useNavigate();
  const [ContentJSON, setContentJSON] = useState(); // Conteúdo da resposta da API

  /* 
    Estados auxiliares:
     - Fazem parte na definição do conteudo assistido 
     - contem renderizações prematuras. 
  */
  const [ClassFilterElements,SetClassFilter] = useState([]) 
  const [isLoading, setIsLoading] = useState(true); // Precavine renderizações prematuras
  const [forumRender,SetForumRender] = useState(
    {
      topicComments:[],
      answerInON:{}
    }
  )
  const [ClassLinkON, SetClassLinkON] = useState(null); // Usados para carregar link e desc da aula assistida
  const [DescON, SetDescON] = useState(null);
  const moduleIndex = localStorage.getItem("ModuleIndexON");

  // ==== Estados e Aux do forum e respostas ==== //
  const[PostCommentON,SetPostComment] = useState(
    {
      active:false, // renderizar caixa de input de texto
      commentMain:"", // comentario em questão
      elementX:{} // OBJ pai - a quem estou respondendo
    });
  const [forumON,SetForum] = useState(false); // Usado para saber se deve-se carregar o forum.

  const [answerCurrent,SetAnswerCurrent] = useState( // Esse estado ajuda a nos manter na pagina correta do comentario que interagimos
    {
      active:false, // Para chamar o userEffect caso estivermos postando comentario
      deleteActive:false, // Para chamar o userEffect caso estivermos deletando comentario
      addres:[]
    }
  );
  const [answer,SetAnswer] = useState( // Trabalhamos aqui quando lidamos com respostas ao comentario de alguem
    {
      active:false,  // Usado para saber se devemos carregar as respostas
      TOPcommentON:{}, // Comentario que deve ser carregado caso estivermos vendo respostas
      answers:[]
    }
  ) // Indice do comentario a qual pretendo ver resposta ou resonder

  const [entity, setEntity] = useState(null); // Estado que faz parte da definição se que está vendo o modulo é o author
  const buttonsRender = [ // Botoes a serem rendereizado caso entity = author
      { core: "editar o modulo", title: "Clique aqui para editar o modulo atual", iconV: "TbPencilCog" },
      { core: "excluir modulo", title: "Clique aqui para excluir o modulo atual", iconV: "HiOutlineTrash" },
      { core: "editar a aula", title: "Clique aqui para editar a aula atual", iconV: "RxPencil2" },
      { core: "excluir a aula", title: "Clique aqui para excluir a aula atual", iconV: "HiOutlineTrash" },
      { core: "adicionar aula", title: "Clique aqui para adicionar uma aula", iconV: "IoIosAddCircle" },
  ];


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
        return response.data
    } catch (err) {
        console.error("Erro na requisição:", err);
        alert("Erro na chamada");
    } finally {
        setIsLoading(false);
    }
}

const ClassSelect = (index) => {
  SetForum(false);
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
    else {
      alert("n é")
    }
};

const redirectActivity = (e) => {
  if (e === "editar o modulo") {
      navigate("/UpdateModulo");
  } else if (e === "editar a aula") {
      navigate("/UpdateClassUnic");
  } else if (e === "adicionar aula") {
      navigate("/UpdateNewClass");
  }
  else if (e == "excluir a aula"){
    DeleteClassUnicAPI();
  }
  else if (e == "excluir modulo"){
    DeleteModule();
    navigate('/Loby')
  
  }
};

async function fetchCommentOBJ(elementZ) {
  const updatedComments = 
  {
    userName:elementZ.userName,
    pictureProfile:elementZ.pictureProfile,
    worldIDDesvio:elementZ.worldIDDesvio,
    comment:elementZ.comment,
    address:elementZ.address,
    answers:[]
  };

  for (const element of elementZ.answers) {
    try {
      const user = await GetInfoUser(element.worldIDDesvio);
      updatedComments.answers.push({
        userName: user.userName,
        pictureProfile: user.PictureProfile,
        worldIDDesvio: element.worldIDDesvio,
        comment: element.comment,
        address: element.address,
        answers:element.answers
      });
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }
  }

  return updatedComments;
};

const viewAnswers = async (element) => {
  const answersAPIresponse = await ElementCommentInfo(element.gen,element.id);

  const answers = [];

  for (const element of Object.values(answersAPIresponse.data)){

    const user = await GetInfoUser(element.userWordID);
    const nAnswers = await ElementCommentInfo(element.gen,element.id);

    let xAnswers = 0;

    try{
       xAnswers = Object.values(nAnswers.data)
    }
    catch {
      xAnswers = 0;
    }

    answers.push(
      {
        userName: user.userName,
        pictureProfile: user.PictureProfile,
        userWordID: element.userWordID,
        comment: element.comment,
        fatherID:element.fatherID,
        nAnswers:xAnswers,
        gen:element.gen,
        id:element.id
      }
    )
  }

  SetAnswer(
    {
      TOPcommentON:element,
      answers:answers,
      active:true
    }
  )
  
};

const BuildPostComment = (element) => {
  SetPostComment((prev) => ({active:true,elementX:element}))
  alert("!")
}

const PostCommentFuncX = async () => {
  console.info("inProgrees - PostCommentFuncX (Postando comentario)")
  const element = PostCommentON.elementX;
  if (PostCommentON.elementX !== undefined){
    console.info("father - true")
    try {
      await PostCommentFunc4(element.gen+1,element.id,PostCommentON.commentMain);
      SetPostComment((prev) => ({...prev,commentMain:"",elementX:{}}))
      viewAnswers(element)
    }catch {
      console.log("Erro ao postar comment")
    }
  }else {
    console.info("father - false")
    await PostCommentFunc4(0,"Xae243467çiva#a124",PostCommentON.commentMain);
    const localJSON =  await GetContent();

      const updatedComments = [];
      const forumPosts = Object.values(localJSON.modulos[localStorage.getItem("ModuleIndexON")].comments[0].fatherList.forumPost);

      for (const post of forumPosts) {
        try {
          const user = await GetInfoUser(post.userWordID);

          const nAnswersBuild = await ElementCommentInfo(0, post.id);

          let nAnswers = [];

          if (nAnswersBuild && nAnswersBuild.data) { 
            nAnswers = Object.values(nAnswersBuild.data);
          } else {
            console.warn(`Nenhuma resposta encontrada para o comentário ${post.id}`);
          }

          updatedComments.push({
            userName: user.userName,
            pictureProfile: user.PictureProfile,
            userWordID: post.userWordID,
            comment: post.comment,
            fatherID:post.fatherID,
            nAnswers:nAnswers,
            gen:post.gen,
            id:post.id
          });

        } catch (error) {
          console.error("Erro ao buscar usuário:", error);
        }
      }

      SetForumRender((prev) => ({...prev,topicComments:updatedComments})); 
  }

 
};


const DeleteCommentAux = async (element,fatherOBJ) => {
  try {
    const elementY = 
    {
      gen:element.gen,
      fatherID:element.fatherID,
      id:element.id
    }

    await DeleteComment(element.gen,element.fatherID,element.id);
    if (fatherOBJ !== null){
     viewAnswers(fatherOBJ)
    }
    else {
      let mouseList = forumRender.topicComments;
      mouseList.findIndex(elementR => elementR.id === element.id)
      
      SetForumRender((prev) => ({...prev,topicComments:mouseList}))
      SetAnswer((prev) => ({...prev,active:false}))

      const localJSON =  await GetContent();

    const updatedComments = [];
      const forumPosts = Object.values(localJSON.modulos[localStorage.getItem("ModuleIndexON")].comments[0].fatherList.forumPost);
      console.log("forumPosts: ")
      console.log(forumPosts)

      for (const post of forumPosts) {
        try {
          const user = await GetInfoUser(post.userWordID);

          console.log("user: ")
          console.log(user)

          const nAnswersBuild = await ElementCommentInfo(0, post.id);
          console.log("nAnswersBuild: ")
          console.log(nAnswersBuild)

          let nAnswers = [];

          if (nAnswersBuild && nAnswersBuild.data) { 
            nAnswers = Object.values(nAnswersBuild.data);
          } else {
            console.warn(`Nenhuma resposta encontrada para o comentário ${post.id}`);
          }

          console.log("Coment em x: ")
          console.log(post.comment)

          updatedComments.push({
            userName: user.userName,
            pictureProfile: user.PictureProfile,
            userWordID: post.userWordID,
            comment: post.comment,
            fatherID:post.fatherID,
            nAnswers:nAnswers,
            gen:post.gen,
            id:post.id
          });

        } catch (error) {
          console.error("Erro ao buscar usuário:", error);
        }
      }

      SetForumRender((prev) => ({...prev,topicComments:updatedComments})); 
    }
  }catch {
    console.log("Erro ao deletar comment")
  }
};

const resetAnswers = () => { // Reset
  SetAnswer({
    active: false,
    indexComment: null
  });
};

const resetAnswerCurrent = () => { // Reset
  SetAnswerCurrent({
    active: false,
    deleteActive: false
  });
};






async function CallPostComment (addresX,commentCore) {
  /**
   * Reponder:
   * (addred,comment)
   *  API
   *  pego o endereço anteriormente pego e carrego (onde? )
   * 
   * SetAnswerCurrent - onde guardo o endereço antes de td
   */
  
  SetAnswerCurrent((prev) => ({...prev,addres:addresX})) 
  await PostCommentFunc(addresX,commentCore);
  await GetContent();
  SetAnswerCurrent((prev) => ({...prev,active:true}))
}


async function CallDeleteComment (addresX) {
  SetAnswerCurrent((prev) => ({...prev,addres:addresX})) 
  await DeleteComment(addresX);
  await GetContent();
  SetAnswerCurrent((prev) => ({...prev,deleteActive:true}))
}

async function CallSeeClass (IDClass) {
  console.log("IDClass")
  console.log(IDClass)
  await AddSeeClass(IDClass)
}

async function CallOFFSeeClass (IDClass) {
  await RemoveSeeClass(IDClass)
}

function captchaAnswer (addres,casas) {
  let currentComment = ContentJSON.modulos[localStorage.getItem("ModuleIndexON")].comments[addres[1]];
  for (let i = 2; i < (addres.length - casas) ; i++ ){
    currentComment = currentComment.answers[addres[i]]
  }
  return currentComment;
}


  /* ORI-1.0 */
  useEffect(() => {
      GetContent();
      
  }, []);
  /* ORI-1.1 */
  useEffect(() => { // Determinamos a primeira aula e as aulas já assitidas
      if (ContentJSON?.modulos && Array.isArray(ContentJSON.modulos)) {
        console.log(ContentJSON.modulos)
          
          if (moduleIndex !== null && !isNaN(moduleIndex)) {
              localStorage.setItem("moduleON",JSON.stringify(ContentJSON.modulos[moduleIndex]));
              const firstModuleContent = ContentJSON.modulos[moduleIndex]?.modulocontent?.[0];
              
              if (firstModuleContent) {
                  localStorage.setItem("Class_link", firstModuleContent.link);
                  localStorage.setItem("Class_Desc", firstModuleContent.description);
                  localStorage.setItem("ClassIndex",0)
                  SetClassLinkON(firstModuleContent.link);
                  SetDescON(firstModuleContent.description);
              }

              // Neste ponto definimos as aulas assistidas

              if (localStorage.getItem("ClassYepList") != null && localStorage.getItem("ClassYepList") != "undefined"){
                const ClassSeeYep = JSON.parse(localStorage.getItem("ClassYepList"))
                for (const element of ContentJSON.modulos[moduleIndex].modulocontent) {
                  SetClassFilter((prev) => {
                    if (!prev.some(classe => classe.core.id === element.id)) {
                      return [
                        ...prev,
                        {
                          onSee: ClassSeeYep?.includes(element.id), // true se incluso, false caso contrário
                          implement:true,
                          core: element
                        }
                      ];
                    }
                    return prev; // Retorna o estado original se já existir
                  });
                }
              }

              else {
                for (const element of ContentJSON.modulos[moduleIndex].modulocontent) {
                  console.log(ContentJSON.modulos)
                  SetClassFilter((prev) => {
                    if (!prev.some(classe => classe.core.id === element.id)) {
                      return [
                        ...prev,
                        {
                          onSee: false,
                          implement:false,
                          core: element
                        }
                      ];
                    }
                    return prev; // Retorna o estado original se já existir
                  });
                }
              }
          }
      }


    
  },[ContentJSON]);


  useEffect(() => { // Chamado quando user clica em forum, será carregado comnetarios de topicos
    /*
     Nesta etapa do processo, para cada comentario postado diretamente no forum,
     passará por um filtro onde definiremos qual sua foto de perfil
    
    
    */
    async function fetchComments() {
      console.info("Carregando comentarios do forum ") 
      const updatedComments = [];
      const forumPosts = Object.values(ContentJSON.modulos[localStorage.getItem("ModuleIndexON")].comments[0].fatherList.forumPost);

      console.info("Atribuições") 
     
      for (const post of forumPosts) {
        try {
          const user = await GetInfoUser(post.userWordID);

          const nAnswersBuild = await ElementCommentInfo(0, post.id);
          console.log("nAnswersBuild: ")
          console.log(nAnswersBuild)

          let nAnswers = [];

          if (nAnswersBuild && nAnswersBuild.data) {
            nAnswers = Object.values(nAnswersBuild.data);
          } else {
            console.warn(`Nenhuma resposta encontrada para o comentário ${post.id}`);
          }

          updatedComments.push({
            userName: user.userName,
            pictureProfile: user.PictureProfile,
            userWordID: post.userWordID,
            comment: post.comment,
            fatherID:post.fatherID,
            nAnswers:nAnswers,
            gen:post.gen,
            id:post.id
          });

        } catch (error) {
          console.error("Erro ao buscar usuário:", error);
        }
      }

      console.log(updatedComments)
      SetForumRender((prev) => ({...prev,topicComments:updatedComments})); 
    };

    fetchComments()
    }, [forumON,answer.active]);

  /* ORI-1.2 */
  useEffect(() => { // Delegar Modulo x user
    if (ContentJSON && ContentJSON.IdAuthor) {
        alert("Autor ?")
        SetEntityFunc(ContentJSON.IdAuthor);
    } else {
        console.warn("IdAuthor ainda não disponível.");
    }
  }, [ContentJSON]);

  useEffect(() => { // Forum
    if (ContentJSON && ContentJSON.modulos[localStorage.getItem("ModuleIndexON")].comments && answerCurrent.active === true) {
      alert("active");
  
      if (!(answerCurrent.addres.length < 2)) {
        (async () => { 
          try {
            const AnswerObject = captchaAnswer(answerCurrent.addres, 0);
  
            console.log("AnswerObject:", AnswerObject);
            if (!AnswerObject) {
              throw new Error(" AnswerObject está indefinido!");
            }
            if (!AnswerObject.worldIDDesvio) {
              throw new Error(" AnswerObject.worldIDDesvio está indefinido!");
            }
  
            console.log(" Buscando usuário com worldIDDesvio:", AnswerObject.worldIDDesvio);

            const userA = await GetInfoUser(AnswerObject.worldIDDesvio);
  
            console.log("userA recebido:", userA);
            if (!userA) {
              throw new Error(" userA.data está indefinido ou não contem os dados esperados!");
            }
  
            const updatedComments = {
              userName: userA.userName,
              pictureProfile: userA.PictureProfile,
              worldIDDesvio: AnswerObject.worldIDDesvio,
              comment: AnswerObject.comment,
              address: AnswerObject.address,
              answers: [],
            };
  
            for (const element of AnswerObject.answers) {
              try {
                console.log("Buscando usser na resposta:", element.worldIDDesvio);
                const users = await GetInfoUser(element.worldIDDesvio);
  
                if (!users) {
                  throw new Error(` User com worldIDDesvio ${element.worldIDDesvio} não encontrado!`);
                }
  
                updatedComments.answers.push({
                  userName: users.userName,
                  pictureProfile: users.PictureProfile,
                  worldIDDesvio: element.worldIDDesvio,
                  comment: element.comment,
                  address: element.address,
                  answers: element.answers,
                });
              } catch (error) {
                console.error("Erro ao buscar user na lista de respostas:", error);
              }
            }

            SetForumRender((prev) => ({prev,topicComments:ContentJSON.modulos[localStorage.getItem("ModuleIndexON")].comments}))
            SetAnswer((prevState) => ({
              ...prevState,
              active: true,
              commentON: updatedComments,
            }));
  
          } catch (error) {
            console.error(" Erro ao obter informacoes do comentario:", error);
            alert("Erro ao obter informacoes do comentario");
          }
        })();
      } 
      else {
        alert("Else");

        (async () => {
          try {
            const updatedComments = [];
        
            if (!Array.isArray(ContentJSON.modulos[localStorage.getItem("ModuleIndexON")].comments)) {
              throw new Error("Lista de comentarios nao definida ou nao é um array.");
            }
        
            for (const element of ContentJSON.modulos[localStorage.getItem("ModuleIndexON")].comments) {
              try {
                console.log(` Buscando usuario com worldIDDesvio: ${element.worldIDDesvio}`);
        
                const user = await GetInfoUser(element.worldIDDesvio);
                if (!user) {
                  throw new Error(`Usuario com worldIDDesvio ${element.worldIDDesvio} nao encontrado!`);
                }
        
                updatedComments.push({
                  userName: user.userName,
                  pictureProfile: user.PictureProfile,
                  worldIDDesvio: element.worldIDDesvio,
                  comment: element.comment,
                  address: element.address,
                  answers: element.answers
                });
        
              } catch (error) {
                console.error(" Erro ao atribuir atributos ao usuario:", error);
              }
            }
        
            console.log("updatedComments preenchido:", updatedComments);
        
            SetForumRender((prev) => ({
              ...prev,
              topicComments: updatedComments
            }));
        
          } catch (error) {
            console.error(" Erro geral na atualizacao dos comentarios:", error);
          } finally {
            // Agora chamamos SetAnswer e resetAnswerCurrent APÓS o processamento assíncrono
            SetAnswer((prevState) => ({
              ...prevState,
              active: false,
            }));
        
            resetAnswerCurrent();
          }
        
        })();
      }
  }}, [ContentJSON, answerCurrent.active]);
  
  useEffect(() => { // Forum
    if (ContentJSON && ContentJSON.modulos[localStorage.getItem("ModuleIndexON")].comments && answerCurrent.deleteActive === true) {
      if (answerCurrent.addres.length > 2){ // Em resposta a alguem
        (
          async () => {
            try {
              const AnswerObject = captchaAnswer(answerCurrent.addres, 1);
              if (!AnswerObject) {
                throw new Error(" AnswerObject está indefinido!");
              }
              console.log("AnswerOBJ: ")
              console.log(AnswerObject)
             if (!AnswerObject.worldIDDesvio){
              throw new Error(" AnswerObject.worldIDDesvio está indefinido!");
             }
             const userA = await GetInfoUser(AnswerObject.worldIDDesvio);
              if (!userA) {
                throw new Error(" userA.data está indefinido ou não contem os dados esperados!");
             }
             console.log("UserA: ")
             console.log(userA)
  
            const updatedComments = {
              userName: userA.userName,
              pictureProfile: userA.PictureProfile,
              worldIDDesvio: AnswerObject.worldIDDesvio,
              comment: AnswerObject.comment,
              address: AnswerObject.address,
              answers: [],
            };
  
              for (const element of AnswerObject.answers) {
                try {
                  const users = await GetInfoUser(element.worldIDDesvio);
    
                  if (!users) {
                    throw new Error(` User com worldIDDesvio ${element.worldIDDesvio} não encontrado!`);
                  }
    
                  updatedComments.answers.push({
                    userName: users.userName,
                    pictureProfile: users.PictureProfile,
                    worldIDDesvio: element.worldIDDesvio,
                    comment: element.comment,
                    address: element.address,
                    answers: element.answers,
                  });
                } catch (error) {
                  console.error("Erro ao buscar user na lista de respostas:", error);
                }

              }
              console.log("updatedComments: ")
              console.log(updatedComments)

              SetAnswer((prevState) => ({
                ...prevState,
                active: true,
                commentON: updatedComments,
              }));
            }
            catch {
              alert("Erro ao obter informacoes do comentario");
            }

          }
        )();   
      }
      else{
        (async () => {
          try {
            const updatedComments = [];
        
            if (!Array.isArray(ContentJSON.modulos[localStorage.getItem("ModuleIndexON")].comments)) {
              throw new Error("Lista de comentarios nao definida ou nao é um array.");
            }
        
            for (const element of ContentJSON.modulos[localStorage.getItem("ModuleIndexON")].comments) {
              try {
                console.log(` Buscando usuario com worldIDDesvio: ${element.worldIDDesvio}`);
        
                const user = await GetInfoUser(element.worldIDDesvio);
                if (!user) {
                  throw new Error(`Usuario com worldIDDesvio ${element.worldIDDesvio} nao encontrado!`);
                }
        
                updatedComments.push({
                  userName: user.userName,
                  pictureProfile: user.PictureProfile,
                  worldIDDesvio: element.worldIDDesvio,
                  comment: element.comment,
                  address: element.address,
                  answers: element.answers
                });
        
              } catch (error) {
                console.error(" Erro ao atribuir atributos ao usuario:", error);
              }
            }
        
            SetForumRender((prev) => ({
              ...prev,
              topicComments: updatedComments
            }));
        
          } catch (error) {
            console.error(" Erro geral na atualizacao dos comentarios:", error);
          } finally {
            // Agora chamamos SetAnswer e resetAnswerCurrent APÓS o processamento assíncrono
            SetAnswer((prevState) => ({
              ...prevState,
              active: false,
            }));
        
            resetAnswerCurrent();
          }
        
        })();
      } 
    }
  },[ContentJSON,answerCurrent.deleteActive])

  

  if (isLoading) { // Enquanto espera resposta da API.
      return <div className={styles.telaLoad}>
         <header className={styles.header}><CabecalhoV2/></header>
         <div className={styles.telaLoad_loadMessage}>
           <LoadIcon
           iconV={null}
           msg={"Carregando informações do modulo"}/>
         </div>
        </div>;
  }

  if (!ContentJSON?.modulos || !Array.isArray(ContentJSON.modulos)) {
      console.log(ContentJSON.modulos);
      return <div className={styles.telaLoad}>
      <header className={styles.header}><CabecalhoPadrao/></header>
      <div className={styles.telaLoad_loadMessage}>
        <LoadIcon
        iconV={"BiSolidMessageSquareError"}
        msg={"Erro ao carregar informações do modulo"}/>
      </div>
     </div>;
  }

    return (
        <main className={styles.main}>
            <header className={styles.header}><CabecalhoV2/></header>
            <div className={styles.core}>
              {/* ORI-2.0 */} 
              <div className={styles.sideBar}>
                <div className={`${styles.titlePath} ${styles.txt2}`}>
                  {/* ORI - 2.1 */}
                  {ContentJSON.modulos[localStorage.getItem("ModuleIndexON")].name !== null ? (
                    ContentJSON.modulos[localStorage.getItem("ModuleIndexON")].name
                  ):
                   <div> Titulo não definido</div>
                   }
                </div>

                {/* Verificando se ContentJSON.modulos é um array e se não está vazio */}
                {/* ORI - 2.2 */}
                {Array.isArray(ContentJSON.modulos) && ContentJSON.modulos.length > 0 ? (
                          ClassFilterElements.map((element,index) => (            
                            <div className={styles.classArea}>
                                <ClassComponent
                                  title={element.core.title}
                                  index={index+1}
                                  HandleTrue = {(e) => CallSeeClass(element.core.id)}
                                  HandleFalse= {(e) => CallOFFSeeClass(element.core.id)}
                                  Start={element.onSee}
                                  implmented={element.implement}
                                  
                                  onClick={(e) => ClassSelect(index,ContentJSON)}
                                />
                            </div>
                          ))
                        ) : (
                        <div>Não há Aulas para exibir.</div>
                )}
                <div onClick={(e) => SetForum((prev) => !prev)} className={`${styles.forumArea} ${styles.txt3}`}>
                   <LiaComments
                   className={styles.icone}/>
                   Forum do modulo 
                </div>
              </div>
              {/*  Até este ponto lidamos com sidebar  */}
              {/*  ORI-3.0  */}
              {forumON === false ? (
                /* ORI-3.1 */
                localStorage.getItem("ClassIndex") !== "0" ? ( /* ORI-3.1.1 */
                  <div className={styles.contentArea}>
                  {
                    entity === "author" ? ( //ORI-3.1.2
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
                ):
                <div className={styles.apresentacao}> {/*ORI-3.1.4*/}
                  <div className={`${styles.tituloModulo} ${styles.txt3}`}>
                    <PiBookOpenDuotone/>
                    {ContentJSON.modulos[localStorage.getItem("ModuleIndexON")].name}
                  </div>
                  <div className={`${styles.desc} ${styles.txt3}`}>{DescON}</div>
                </div>
              ):

              /* Até este ponto lidamos com side bar e renderização de conteudo ou apresentação */

                <div className={styles.forumCore}>

                  <div className={styles.forumTopPost}>
                    <ButtonIMG
                      iconV={"CiEdit"}
                      icon_style={"evenConstStyleBlue"}
                      handleClick={(e) => SetPostComment((prevState) => 
                      ({prevState,active:true,addresON:[localStorage.getItem("ModuleIndexON")]}))}
                      title={"Postar comentario no forum"}
                    />
                  </div>


                  {PostCommentON.active === true ?
                  (
                    <div className={styles.PostCommentArea}>
                     <PostComment
                      onClose= {(e) => SetPostComment((prevState) => ({prevState,active:false}))}
                      inputTXT={(e) => SetPostComment((prev) => ({...prev,commentMain:e.target.value}))}
                      buttonON={(e) => PostCommentFuncX()}
                      maxlength={"230"}
                     />
                    </div>
                  )
                  :null}
                  

                  {answer.active === false ? 
                  // Neste ponto forumON = true. Logo renderizaremos comentarios postados diretamente
                  //  no forum ou eventuais respostas a estes
                    ( 
                      <div className={styles.forumScroll}>
                        {forumRender.topicComments.length > 0 ? (
                          forumRender.topicComments.map((element) => (
                            <div className={styles.comment}>
                              <Comment
                                nickName={`${element.userName}`}
                                comment={element.comment}
                                imgURL={element.pictureProfile}
                                onClickIcon1={(e) => viewAnswers(element)}
                                nAnswers={Array.isArray(element.nAnswers) ? formatarNumero(element.nAnswers.length) : 0}
                                responseAction={(e) => BuildPostComment(element)}
                                onClickIcon2={() => DeleteCommentAux(element,null)}
                              />
                            </div>
                          ))
                        ) : (
                          <div className={`${styles.CTOforum} ${styles.txt3}`}>
                            <div className={styles.CTOforum_img}>
                              <img className={styles.img} src="https://usagif.com/wp-content/uploads/cat-typing-12.gif" alt="CTO" />
                            </div>

                            <div className={styles.CTOforum_txt}>
                              Seja o primeiro a cometar no forum !
                            </div>
                          </div>
                        )}
                      </div>
                    )
                    :
                    /* Neste ponto vemos ativamos as 'answers' */
                    // forumON === true e answer.active === true
                    <div className={styles.forumScroll}> 

                      <div className={styles.leave}>
                        <ButtonIMG
                        iconV={"IoChevronBackCircleSharp"}
                        icon_style={"evenConstStyle"}
                        handleClick={(e) => resetAnswers()}
                        title={"Voltar"}
                        />
                      </div>
                      
                      <div className={styles.commentAnswerTComment}>
                          <Comment
                            nickName={answer.TOPcommentON.userName}
                            comment={answer.TOPcommentON.comment}
                            imgURL={answer.TOPcommentON.pictureProfile}
                            onClickIcon1={(e) => alert("Você já está no espaço de respostas desse comentario")}
                            nAnswers={Array.isArray(answer.TOPcommentON.nAnswers) ? formatarNumero(answer.TOPcommentON.nAnswers.length) : 0}
                            responseAction={(e) => BuildPostComment(answer.TOPcommentON)}
                            onClickIcon2={(e) =>DeleteCommentAux(answer.TOPcommentON,null)}
                          />
                      </div>

                      {answer.answers.length !== 0 ? (
                        <div className={styles.linhaSeparadora}></div>
                      ):null}
                      

                      {answer.answers.map((element) => (
                        <div className={styles.commentAnswer}>
                          <Comment
                            nickName={`${element.userName}`}
                            comment={element.comment}
                            imgURL={element.pictureProfile}
                            onClickIcon1={(e) => viewAnswers(element)}
                            nAnswers={Array.isArray(element.answers) ? formatarNumero(element.answers.length) : 0}
                            responseAction={(e) => BuildPostComment(element)}
                            onClickIcon2={(e) => DeleteCommentAux(element,answer.TOPcommentON)}
                          />
                        </div>
                      ))}

                      
                    </div>
                  }
                    
                </div>
              
              }

              
              
            </div>
          </main>

    )
}

export default Class