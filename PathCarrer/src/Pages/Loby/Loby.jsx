import styles from '../Loby/Loby.module.css'

// =-=-=-=-=- Componentes =-=-=-=-=- //

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import Button from '../../Components/Button/Button'
import WindowModule from '../../Components/WindowModule/WindowModule'
import WindowNote from '../../Components/WindowNote/WindowNote'
import CabecalhoV2 from '../../Components/CabecalhoV2/CabecalhoV2'
import img from '../../assets/Midias/JP2.png'


import { useState,useEffect } from 'react'
import httpClient from '../../APIs/PathCarrerAPI/PathCarrer'
import { useNavigate } from 'react-router'

// =-=-=-=-= Arquivos auxiliares =-=-=-=-=- //

import { LobyGet,ShortPath } from '../../Components/1he GlobalFunctions/GlobalFunctions'



function Loby () {
    const navigate = useNavigate();
    const [LobyJSON,SetLobyJSON] = useState(
      {
        bruto:{},
        lapidado:[],
        brutoAct:false
      });
    const [isLoading, setIsLoading] = useState(true); // Estado para controle de carregamento
    const [dayArray,setDayArray] = useState(["All","Seg","Ter","Qua","Qui","Sex","Sab","Dom"]);

    const redirecToCreatePath = () => {
      navigate('/createpath')
    }


    // ==== API ==== //

    async function GetLobyON() {
      const dados = await LobyGet();
      if (!dados) {
        console.log("Erro ao buscar informações do Loby.");
      } else {
        SetLobyJSON((prev) => ({...prev,bruto:dados,brutoAct:true}))
      }
    }
    
    const PathAcess = (e,x) => {
      e.preventDefault();
      localStorage.setItem("PathID_on",x)
      navigate('/ContentAcess')
    }

    useEffect(() => {
      GetLobyON();
    }, []);

    // ==== useEffect para verificar e processar LobyJSON ==== //
    useEffect(() => {

      if (LobyJSON.brutoAct === true) {
        
          (async () => {
              const objKeys = Object.keys(LobyJSON.bruto.myPaths);
              const ShortPathList = [];
              
  
              try {
                  for (const element of objKeys) {
                      let ClassSee = 0;
                      
                      let Path = await ShortPath(element); 
                      console.log("Path: ")
                      console.log(Path)

                      console.log("LobyJSON.brutoAct: ")
                      console.log(LobyJSON.bruto)

                      console.log("LobyJSON.brutoAct.myPaths: ")
                      console.log(LobyJSON.bruto.myPaths)

                      console.log("LobyJSON.brutoAct.myPaths[element]: ")
                      console.log(LobyJSON.bruto.myPaths[element])

                      let ClassSeeByAuthor = LobyJSON.bruto.myPaths[element].classSee;

                      console.log("ClassSee: ")
                      console.log(ClassSeeByAuthor)

                      console.log("ClassPresent: ")
                      console.log( Path.classPresent)

                      for (const element of ClassSeeByAuthor){
                        if ( Path.classPresent.find(x => x === element)){
                          ClassSee++
                        }
                      }
  
                      ShortPathList.push({
                          id: Path.id,
                          title: Path.title,
                          category: Path.category,
                          nClass: Path.classPresent.length,
                          nClassYep: ClassSee,
                      });  
                  }
                  
                  SetLobyJSON((prev) => ({ ...prev, lapidado: ShortPathList }));
  
              } catch (error) {
                  console.error("Erro ao formular Path:", error);
              }
          })();
  
       }
      }, [LobyJSON.brutoAct]); 

    return (
      
        <main className={styles.main}>
            <header className={styles.header}>
              <CabecalhoV2/>
            </header>
            <div className={styles.pre_coreArea}>
              <div className={styles.coreArea}>
                  <div className={styles.weekArea}>
                    {dayArray.map((element) => (
                      <div className={styles.dayArea}>
                        <Button class={"day"}
                        message={element}/>
                      </div>
                    ))}
                  </div>
                  <div className={styles.moduloArea}>             
                      {/* Verificando se LobyJSON.myPaths é um array e se não está vazio */}
                        {Array.isArray(LobyJSON.lapidado) && Object.keys(LobyJSON.lapidado).length > 0 ? (
                          LobyJSON.lapidado.map((element) => (
                            <div key={element.id} className={styles.moduloArea_core}>
                              <WindowModule
                                titleMain={element.title}
                                subTile={element.category}
                                img={img}
                                nClass={element.nClass}
                                nClassYep={element.nClassYep}
                                onClick={(e) => PathAcess(e,element.id)}
                              />
                            </div>
                          ))
                        ) : (
                          <div className={`${styles.alert} ${styles.txtOver2}`}>Não há Paths para exibir.</div>
                        )}
                  </div>
              </div>
            
            <div className={styles.message_preArea}>
              <div className={styles.messageMainArea}>
                <div className={styles.messageArea}>
                  <WindowNote
                  icon_Aa={"FaStar"}
                  icon_Bb={"FaTrash"}
                  ClasseAfterA={"classeAfterAa_2"}
                  ClasseAfterB={"classeAfterBb"}
                  />
                </div>
              </div>

            </div>
            </div>
        </main>

    )
}

export default Loby