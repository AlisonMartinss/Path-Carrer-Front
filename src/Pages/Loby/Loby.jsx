import styles from '../Loby/Loby.module.css'

// =-=-=-=-=- Componentes =-=-=-=-=- //

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import Button from '../../Components/Button/Button'
import WindowModule from '../../Components/WindowModule/WindowModule'
import WindowNote from '../../Components/WindowNote/WindowNote'
import CabecalhoV2 from '../../Components/CabecalhoV2/CabecalhoV2'
import img from '../../assets/Midias/JP2.png'
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG'
import PostComment from '../../Components/PostComment/PostComment'


import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'

// =-=-=-=-= Arquivos auxiliares =-=-=-=-=- //

import { LobyGet,ShortPath } from '../../Components/1he GlobalFunctions/GlobalFunctions'
import {AddNote,RemoveNote} from './LobyAUX'



function Loby () {
    const navigate = useNavigate();
    const [ContentForLobyJSON,SetLobyJSON] = useState(
      {
        JSONdata:{},
        MyPathIDList:[],
        reformulatedPathList:[],
        isLoading:false,
        Notes:[]
      });     
    const [postNote,SetPostNote] = useState(
      {
        active:false,
        message:""
      }
    ); 
    const WhenPathAcess = (e,x) => {
      e.preventDefault();
      localStorage.setItem("PathID_on",x)
      navigate('/ContentAcess')
    }

    useEffect(() => {
      (async () => {
        try {
          
        const data = await LobyGet();
         
        SetLobyJSON((prev) => ({...prev,isLoading:true}))
        if (Object.keys(data.myPaths !== null)){
            SetLobyJSON((prev) => ({...prev,JSONdata:data,MyPathIDList:Object.keys(data.myPaths)}))
        }else{
          SetLobyJSON((prev) => ({...prev,JSONdata:data,MyPathIDList:null}))
        }
        SetLobyJSON((prev) => ({...prev,isLoading:false}))
        }catch (error){
          if (error.erro === "Token inválido ou expirado"){
            console.error("Sessão expirada. Faça login novamente !")
            alert("Sessão expirada. Faça login novamente !")
            navigate('/Login')
          }else {
          console.error("Erro em buscar dados nescessarios para o preenchimento do loby")}
        }
      })();

    },[]);

    useEffect(() => {
      if (ContentForLobyJSON.isLoading === false && ContentForLobyJSON.MyPathIDList !== undefined){
        (async () => {
          console.info("Iniciando tratativa dos elementos de MyPaths")
          try {
            let RefList = [];
            for (const element of ContentForLobyJSON.MyPathIDList){
              const Path_data = await ShortPath(element);

              if (Path_data === null || Path_data === undefined){
                console.error("Erro ao busacar Path");
                continue;
              }

              const ClassAlredyView = ContentForLobyJSON.JSONdata.myPaths[element].classSee;
              let nYepClass = 0;

              for (const classe of ClassAlredyView){
                if (Path_data.classPresent.includes(classe)){
                  nYepClass++
                }
              }


              let obj = 
              {
                title:Path_data.title,
                category:Path_data.category,
                classPresent:Path_data.classPresent,
                id:Path_data.id,
                nClass:Path_data.classPresent.length,
                nClassYep:nYepClass,
                category:Path_data.category
              }

              RefList.push(obj)
            }
            SetLobyJSON((prev) => ({...prev,reformulatedPathList:RefList}))
          }
          catch (error){
            if (error.erro === "Token inválido ou expirado"){
              console.error("Sessão expirada. Faça login novamente !")
              alert("Sessão expirada. Faça login novamente !")
              navigate('/Login')
            }
            console.error("Erro em atribuir informações aos Path da sua lista MyPaths: ", error)
          }
        })()
      }

      }, [ContentForLobyJSON.MyPathIDList,ContentForLobyJSON.isLoading]); 

    useEffect(() => {
        if (ContentForLobyJSON.isLoading === false && ContentForLobyJSON.JSONdata.Notes !== undefined){
          try {
            if (ContentForLobyJSON.JSONdata.Notes === null) {
              return;
            }
            
            const keyHashList = Object.keys(ContentForLobyJSON.JSONdata.Notes);

          let Notes = []
          for (const element of keyHashList) {
            let obj =
            {
              date:ContentForLobyJSON.JSONdata.Notes[element].date,
              message:ContentForLobyJSON.JSONdata.Notes[element].message,
              key:ContentForLobyJSON.JSONdata.Notes[element].key
            }
            Notes.push(obj)
          }
          SetLobyJSON((prev) => ({...prev,Notes:Notes}))
        } catch {
        }
        }
      },[ContentForLobyJSON.JSONdata.Notes,ContentForLobyJSON.isLoading])

    
    return (
      
        <main className={styles.main}>
            <header className={styles.header}>
              <CabecalhoV2/>
            </header>
            <div className={styles.pre_coreArea}>
              <div className={styles.coreArea}>
                  <div className={styles.moduloArea}>             
                        {Array.isArray(ContentForLobyJSON.reformulatedPathList) && Object.keys(ContentForLobyJSON.reformulatedPathList).length > 0 ? (
                          ContentForLobyJSON.reformulatedPathList.map((element) => (
                            <div key={element.id} className={styles.moduloArea_core}>
                              <WindowModule
                                titleMain={element.title}
                                subTile={element.category}
                                onClick={(e) => WhenPathAcess(e,element.id)}
                                img={img}
                                nClass={element.nClass}
                                nClassYep={element.nClassYep}
                                category={element.category}
                              />
                            </div>
                          ))
                        ) : (
                          <div className={`${styles.alert} ${styles.txtOver2}`}>Não há Paths para exibir.</div>
                        )}
                  </div>
              </div>
            
            <div className={styles.message_preArea}>
              {postNote.active ? (
                <div className={styles.PostCommentArea}>
                  <PostComment
                    onClose= {(e) => SetPostNote((prev) => ({...prev,active:false}))}
                    inputTXT={(e) => SetPostNote((prev) => ({...prev,message:e.target.value}))}
                    buttonON={async () => {await AddNote(postNote.message),window.location.reload()}}
                    maxlength={"150"}
                  />
                </div>
              ):null}
             
              <div className={styles.newNoteButton}>
                  <ButtonIMG
                    iconV={"CiEdit"}
                    icon_style={"evenConstStyle"}
                    handleClick={(e) => {
                      if (!(ContentForLobyJSON.Notes.length >= 3))
                      {SetPostNote((prev) => ({...prev,active:true}))}
                      else{
                        alert("Numero maximo de notas por usuario já atingido")
                      }
                    }}
                    title={"Escrever nota"}
                  />
              </div>
              {ContentForLobyJSON.Notes.length > null ? (
                <div className={styles.messageMainArea}>
                {ContentForLobyJSON.Notes.map((element) => 
                  (
                    <div className={styles.messageArea}>
                      <WindowNote
                        icon_Aa={"FaStar"}
                        icon_Bb={"FaTrash"}
                        ClasseAfterA={"classeAfterAa_2"}
                        ClasseAfterB={"classeAfterBb"}
                        note={element.message}
                        date={element.date}
                        trashButton={async () => {await RemoveNote(element.key),window.location.reload()}}
                      />
                    </div>
                  ))} 
              </div>    
              ):
              <div className={styles.messageMainArea}>
                <div className={`${styles.waring}`}>Faça sua primeira anotação !</div> 
                <div className={styles.cto_note}>
                  <div className={styles.cto_note_icon}>
                    <ButtonIMG
                      iconV={"CiEdit"}
                      icon_style={"evenConstStyleDarkBlue"}
                      handleClick={(e) => {
                        if (!(ContentForLobyJSON.Notes.length >= 3))
                        {SetPostNote((prev) => ({...prev,active:true}))}
                        else{
                          alert("Numero maximo de notas por usuario já atingido")
                        }
                      }}
                      title={"Escrever nota"}
                    />
                  </div>
                
                </div>
              
              </div> 
              }
              

            </div>
            </div>
        </main>

    )
}

export default Loby