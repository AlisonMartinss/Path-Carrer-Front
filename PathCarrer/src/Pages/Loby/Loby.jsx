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

// =-=-=-=-= Icones =-=-=-=-=- //




function Loby () {
    const navigate = useNavigate(); 
    const [LobyJSON,SetLobyJSON] = useState({});
    const [isLoading, setIsLoading] = useState(true); // Estado para controle de carregamento
    const [dayArray,setDayArray] = useState(["All","Seg","Ter","Qua","Qui","Sex","Sab","Dom"]);

    const [leftElements,setModuleTest] = useState([
    {iconV: "FaFolderOpen",
    icon_style: "evenConstStyle",
    handleClick:""
    },

    {iconV: "CgProfile",
    icon_style: "evenConstStyle",
    handleClick:""
    }
    ]);

    // ==== API ==== //
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
        alert("Loby chamado com sucesso!");
        const JSONdata = response.data;
        localStorage.setItem("LobyInfo",JSON.stringify(JSONdata));
        SetLobyJSON(JSONdata);
      }catch (err){
        alert ("Erro da chamada")
        console.log(err)
      }
      finally {
        setIsLoading(false); // Sempre será chamado, finalizando o carregamento
      }
    }

    const PathAcess = (e,x) => {
      e.preventDefault();
      localStorage.setItem("PathID_on",x)
      navigate('/ContentAcess')
    }

    useEffect(() => {
       LobyGet();
      }, []);

    // ==== useEffect para verificar e processar LobyJSON ==== //
    useEffect(() => {
      if (!isLoading && LobyJSON && Array.isArray(LobyJSON.myPaths)) {
        console.log("Lista: " + JSON.stringify(LobyJSON.myPaths));
      } else if (!isLoading && LobyJSON) {
        alert("myPaths não é um array válido");
      }
    }, [LobyJSON, isLoading]);

    const [module,setModule] = useState([]);

    return (
      
        <main className={styles.main}>
            <header className={styles.header}>
              <CabecalhoV2 leftElements={leftElements}/>
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
                        {Array.isArray(LobyJSON.myPaths) && LobyJSON.myPaths.length > 0 ? (
                          LobyJSON.myPaths.map((element) => (
                            <div key={element.pathID} className={styles.moduloArea_core}>
                              <WindowModule
                                titleMain={element.title}
                                subTile={element.category}
                                img={img}                       
                                onClick={(e) => PathAcess(e,element.pathID)}
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