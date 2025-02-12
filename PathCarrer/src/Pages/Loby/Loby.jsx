import styles from '../Loby/Loby.module.css'

// =-=-=-=-=- Componentes =-=-=-=-=- //

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import Button from '../../Components/Button/Button'
import WindowModule from '../../Components/WindowModule/WindowModule'
import WindowNote from '../../Components/WindowNote/WindowNote'
import CabecalhoV2 from '../../Components/CabecalhoV2/CabecalhoV2'
import img from '../../assets/Midias/JP2.png'


import { useState } from 'react'


// =-=-=-=-= Icones =-=-=-=-=- //




function Loby () {
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
                    <div className={styles.moduloArea_core}>
                      <WindowModule
                      titleMain={"Nome do Curso"}
                      subTile={"subTitulo"}
                      img={img}
                      />
                    </div>               
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