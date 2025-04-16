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
import httpClient from '../../APIs/PathCarrerAPI/PathCarrer'
import { useNavigate } from 'react-router'

// =-=-=-=-= Arquivos auxiliares =-=-=-=-=- //

import { LobyGet,ShortPath } from '../../Components/1he GlobalFunctions/GlobalFunctions'
import { ImOpt } from 'react-icons/im'
import {AddNote,RemoveNote} from './LobyAUX'



function Loby () {
    const navigate = useNavigate();
    const [LobyJSON,SetLobyJSON] = useState(
      {
        JSONdata:{},
        MyPathIDList:[],
        RefPathList:[],
        isLoading:false,
        Notes:[]
      });
      
    const [dayArray,setDayArray] = useState(["All","Seg","Ter","Qua","Qui","Sex","Sab","Dom"]);
    const [postNote,SetPostNote] = useState(
      {
        active:false,
        message:""
      }
    );

    
    const PathAcess = (e,x) => { // Quando clicado em algum path
      e.preventDefault();
      localStorage.setItem("PathID_on",x)
      navigate('/ContentAcess')
    }

    useEffect(() => {
      (async () => {
        try {
        const data = await LobyGet();
        SetLobyJSON((prev) => ({...prev,isLoading:true}))
        SetLobyJSON((prev) => ({...prev,JSONdata:data,MyPathIDList:Object.keys(data.myPaths)}))
        SetLobyJSON((prev) => ({...prev,isLoading:false}))
        }catch {
          console.error("Erro em buscar dados nescessarios para o preenchimento do loby")
        }
      })();

    },[]);

    useEffect(() => {
      // Atribuição de informação para lista de Path
      if (LobyJSON.isLoading === false && LobyJSON.MyPathIDList !== undefined){
        
        (async () => {
          console.info("Iniciando tratativa dos elementos de MyPaths")
          try {
            let RefList = [];
            for (const element of LobyJSON.MyPathIDList){
              const Path_data = await ShortPath(element);

              if (Path_data === null || Path_data === undefined){
                console.error("Erro ao busacar Path");
                continue;
              }

              const ClassAlredyView = LobyJSON.JSONdata.myPaths[element].classSee;
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
                nClassYep:nYepClass
              }

              RefList.push(obj)
            }
            console.log("RefList: ")
            console.log(RefList)
            SetLobyJSON((prev) => ({...prev,RefPathList:RefList}))
          }
          catch (error){
            console.error("Erro em atribuir informações aos Path da sua lista MyPaths: ", error)
          }
        })()
      }

      }, [LobyJSON.MyPathIDList,LobyJSON.isLoading]); 

      useEffect(() => {
        if (LobyJSON.isLoading === false && LobyJSON.JSONdata.Notes !== undefined){
          const keyHashList = Object.keys(LobyJSON.JSONdata.Notes)
          let Notes = []
          for (const element of keyHashList) {
            let obj =
            {
              date:LobyJSON.JSONdata.Notes[element].date,
              message:LobyJSON.JSONdata.Notes[element].message,
              key:LobyJSON.JSONdata.Notes[element].key
            }
            Notes.push(obj)
          }
          SetLobyJSON((prev) => ({...prev,Notes:Notes}))
        }
      },[LobyJSON.JSONdata.Notes,LobyJSON.isLoading])

    /*useEffect(() => {
        (async () => {
          try {
          const data = await LobyGet();
          SetLobyJSON((prev) => ({...prev,isLoading:true}))
          SetLobyJSON((prev) => ({...prev,JSONdata:data,MyPathIDList:Object.keys(data.myPaths)}))
          SetLobyJSON((prev) => ({...prev,isLoading:false}))
          }catch {
            console.error("Erro em buscar dados nescessarios para o preenchimento do loby")
          }
        })();
  
      },[]);*/
    
    return (
      
        <main className={styles.main}>
            <header className={styles.header}>
              <CabecalhoV2/>
            </header>
            <div className={styles.pre_coreArea}>
              <div className={styles.coreArea}>
                
                  <div className={styles.weekArea}>
                    {/*
                    {dayArray.map((element) => (
                      <div className={styles.dayArea}>
                        <Button class={"day"}
                        message={element}/>
                      </div>
                    ))} */}
                  </div>
                  <div className={styles.moduloArea}>             
                        {Array.isArray(LobyJSON.RefPathList) && Object.keys(LobyJSON.RefPathList).length > 0 ? (
                          LobyJSON.RefPathList.map((element) => (
                            <div key={element.id} className={styles.moduloArea_core}>
                              <WindowModule
                                titleMain={element.title}
                                subTile={element.category}
                                onClick={(e) => PathAcess(e,element.id)}
                                img={img}
                                nClass={element.nClass}
                                nClassYep={element.nClassYep}
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
                      if (!(LobyJSON.Notes.length >= 3))
                      {SetPostNote((prev) => ({...prev,active:true}))}
                      else{
                        alert("Numero maximo de notas por usuario já atingido")
                      }
                    }}
                    title={"Escrever nota"}
                  />
              </div>
              {LobyJSON.Notes.length > null ? (
                <div className={styles.messageMainArea}>
                {LobyJSON.Notes.map((element) => 
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
                        if (!(LobyJSON.Notes.length >= 3))
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