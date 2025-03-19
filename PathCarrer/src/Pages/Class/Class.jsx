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

import { DeleteClassUnicAPI, DeleteModule, PostCommentFunc, DeleteComment} from './ClassAux';
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
      active:false,
      commentMain:"",
      addresON:[]
    });
  const [forumON,SetForum] = useState(false); // Usado para saber se deve-se carregar o forum.

  const [answerCurrent,SetAnswerCurrent] = useState( // Esse estado ajuda a nos manter na pagina correta do comentario que interagimos
    {
      active:false,
      deleteActive:false,
      addres:null
    }
  );
  const [answer,SetAnswer] = useState( // Trabalhamos aqui quando lidamos com respostas ao comentario de alguem
    {
      active:false,  // Usado para saber se devemos carregar as respostas
      commentON:null // Comentario que deve ser carregado caso estivermos vendo respostas
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

const viewAnswers = (element) => { // Neste ponto ativamos a visu de respostas
  console.log("Resposta: ")
  console.log(element)
  SetAnswer((prevState) => (
    {
      prevState,
      active:true,
      commentON:element
    }));
}

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
  /**
   * Reponder:
   * (addred,comment)
   *  API
   *  pego o endereço anteriormente pego e carrego (onde? )
   * 
   * SetAnswerCurrent - onde guardo o endereço antes de td
   */
  SetAnswerCurrent((prev) => ({...prev,addres:addresX})) 
  await DeleteComment(addresX);
  await GetContent();
  SetAnswerCurrent((prev) => ({...prev,deleteActive:true}))
}

const captchaAnswer = (addres,casas) => {
  let currentComment = ContentJSON.comments[addres[0]];
  for (let i = 1; i < (addres.length - casas) ; i++ ){
    currentComment = currentComment.answers[addres[i]]
  }
  return currentComment
}


  useEffect(() => {
      GetContent();
  }, []);

  useEffect(() => {
      if (ContentJSON?.modulos && Array.isArray(ContentJSON.modulos)) {
          
          if (moduleIndex !== null && !isNaN(moduleIndex) && moduleIndex >= 0 && moduleIndex < ContentJSON.modulos.length) {
              localStorage.setItem("moduleON",JSON.stringify(ContentJSON.modulos[moduleIndex]));
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
    alert("Carregando forum")
    async function fetchComments() {
      const updatedComments = [];
  
      for (const element of ContentJSON.comments) {
        try {
          const user = await GetInfoUser(element.worldIDDesvio);
          updatedComments.push({
            userName: user.userName,
            pictureProfile: user.PictureProfile,
            worldIDDesvio: element.worldIDDesvio,
            comment: element.comment,
            address: element.address,
            answers: element.answers
          });
          console.log("foto: " + user.PictureProfile)
        } catch (error) {
          console.error("Erro ao buscar usuário:", error);
        }
      }
      console.log(updatedComments)
  
      SetForumRender((prev) => ({...prev,topicComments:updatedComments})); // Atualiza o estado com todos os comentários de uma vez
    };

    fetchComments()
  }, [forumON===true,answer.active===false]);

  useEffect(() => { // Delegar Modulo x user
    if (ContentJSON && ContentJSON.IdAuthor) {
        SetEntityFunc(ContentJSON.IdAuthor);
    } else {
        console.warn("IdAuthor ainda não disponível.");
    }
  }, [ContentJSON]);

  /*useEffect(() => {
    if (ContentJSON && ContentJSON.comments && answerCurrent.active === true) {
      let PseudoAddres = [];
      if (!(answerCurrent.addres[0] === undefined)) {
        PseudoAddres = captchaAnswer(answerCurrent.addres,0)
        SetAnswer((prevState) => (
          {
            ...prevState,
            active:true,
            commentON:PseudoAddres
          }));
          resetAnswerCurrent()  
      }
      else {
        PseudoAddres = captchaAnswer([0],0)
        SetAnswer((prevState) => (
          {
            ...prevState,
            active:false,
            commentON:PseudoAddres
          }));

        resetAnswerCurrent()    
      }
    }
  },[ContentJSON,answerCurrent.active])*/

  /*useEffect(() => {
    if (ContentJSON && ContentJSON.comments && answerCurrent.deleteActive === true) {
      console.log(answer)

      if (answerCurrent.addres.length > 1){
      const AnswerON = captchaAnswer(answerCurrent.addres,1)
        SetAnswer((prevState) => (
          {
            ...prevState,
            commentON:AnswerON,
          }
        ));
        resetAnswerCurrent()    
      }
      else{
        const AnswerON = captchaAnswer(answerCurrent.addres,1)
        SetAnswer((prevState) => (
          {
            ...prevState,
            active:false,
            commentON:AnswerON,
          }
        ));
        resetAnswerCurrent()  
      }
        
    }
  },[ContentJSON,answerCurrent.deleteActive=== true])*/

  

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

              {forumON === false ? (
                localStorage.getItem("ClassIndex") !== "0" ? (

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
                ):
                <div className={styles.apresentacao}>
                  <div className={`${styles.tituloModulo} ${styles.txt3}`}>
                    <PiBookOpenDuotone/>
                    {ContentJSON.modulos[localStorage.getItem("ModuleIndexON")].name}
                  </div>
                  <div className={`${styles.desc} ${styles.txt3}`}>{DescON}</div>
                </div>
              ):
                <div className={styles.forumCore}>

                  <div className={styles.forumTopPost}>
                    <ButtonIMG
                      iconV={"CiEdit"}
                      icon_style={"evenConstStyleBlue"}
                      handleClick={(e) => SetPostComment((prevState) => ({prevState,active:true,addresON:[]}))}
                      title={"Postar comentario no forum"}
                    />
                  </div>


                  {PostCommentON.active === true ?
                  (
                    <div className={styles.PostCommentArea}>
                     <PostComment
                      onClose= {(e) => SetPostComment((prevState) => ({prevState,active:false}))}
                      inputTXT={(e) => SetPostComment((prev) => ({...prev,commentMain:e.target.value}))}
                      buttonON={(e) => CallPostComment(PostCommentON.addresON,PostCommentON.commentMain)}
                      maxlength={"230"}
                     />
                    </div>
                  )
                  :null}
                  

                  {answer.active === false ? // COMENTARIOS DE TOPICO. Neste ponto forumON = true.
                    ( 
                      <div className={styles.forumScroll}>
                        {forumRender.topicComments.length > 0 ? (
                          forumRender.topicComments.map((element) => (
                            <div className={styles.comment} key={element.address.join("-")}>
                              <Comment
                                nickName={`${element.userName}`}
                                comment={element.comment}
                                imgURL={element.pictureProfile}
                                onClickIcon1={() => viewAnswers(element)}
                                nAnswers={Array.isArray(element.answers) ? formatarNumero(element.answers.length) : 0}
                                responseAction={() => SetPostComment((prevState) => ({
                                  ...prevState, active: true, addresON: element.address
                                }))}
                                onClickIcon2={() => CallDeleteComment(element.address)}
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
                            nickName={answer.commentON.userName}
                            comment={answer.commentON.comment}
                            imgURL={answer.commentON.pictureProfile}
                            onClickIcon1={(e) => alert("Você já está no espaço de respostas desse comentario")}
                            nAnswers={Array.isArray(answer.commentON.answers) ? formatarNumero(answer.commentON.answers.length) : 0}
                            responseAction={(e) => SetPostComment((prevState) => ({prevState,active:true,addresON:answer.commentON.address}))}
                            onClickIcon2={(e) => CallDeleteComment(answer.commentON.address)}
                          />
                      </div>
                      {answer.commentON.answers.length !== 0 ? (
                        <div className={styles.linhaSeparadora}></div>
                      ):null}
                      

                      {answer.commentON.answers.map((element) => (
                        <div className={styles.commentAnswer}>
                          <Comment
                            nickName={`${element.userName}`}
                            comment={element.comment}
                            imgURL={element.pictureProfile}
                            onClickIcon1={(e) => viewAnswers(element)}
                            nAnswers={Array.isArray(element.answers) ? formatarNumero(element.answers.length) : 0}
                            responseAction={(e) => SetPostComment((prevState) => ({prevState,active:true,addresON:element.address}))}
                            onClickIcon2={(e) => CallDeleteComment(element.address)}
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