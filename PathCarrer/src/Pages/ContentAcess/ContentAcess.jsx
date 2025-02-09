import styles from '../ContentAcess/ContentAcess.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import SideBar from '../../Components/SideBar/SideBar'
import WindowModule from '../../Components/WindowModule/WindowModule';
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG';


/* IMAGENS */

import { AiOutlineComment } from "react-icons/ai";
import { GiBookCover } from "react-icons/gi";
import { MdBookmarkAdd } from "react-icons/md";


import {useState} from 'react'


function ContentAcess (){
    const [isClicked, setIsClicked] = useState(false);
 
    const handleClick = () => {
        setIsClicked((prev) => (!prev))
    };


    return(

        <main className={styles.main}>
            <header className={styles.header}><CabecalhoPadrao/></header>
            <div className={styles.core}>
                
             <div className={`${isClicked ? styles.sideBarOFF : styles.sideBar}`}>
                <SideBar
                handleClick={handleClick}/>                   
             </div>

             <div className={styles.view_core}>
                <div className={styles.module_core}>
                    <div className={styles.module_main}>

                      <div className={styles.icon}>
                        <div className={styles.icon_area}><GiBookCover className={styles.icon_conf}/></div>
                      </div>

                      <div className={styles.contentMain}>
                        <div className={styles.content_area}>
                            <WindowModule
                            titleMain={"Titulo de um modulo"}
                            porcent={"100%"}
                            img={""}/>
                        </div>

                        <div className={styles.content_area}>
                            <WindowModule
                            titleMain={"Titulo de um modulo"}
                            porcent={"100%"}
                            img={""}/>
                        </div>

                        <div className={styles.content_area}>
                            <WindowModule
                            titleMain={"Titulo de um modulo"}
                            porcent={"100%"}
                            img={""}/>
                        </div>

                        <div className={styles.content_area}>
                            <WindowModule
                            titleMain={"Titulo de um modulo"}
                            porcent={"100%"}
                            img={""}/>
                        </div>
                          <div className={styles.content_area}>
                            <WindowModule
                            titleMain={"Titulo de um modulo"}
                            porcent={"100%"}
                            img={""}/>
                        </div>

                      </div>

                      <div className={styles.buttonAdd}>
                        <div className={styles.LitleIcone}>
                            <ButtonIMG
                            iconV={"MdBookmarkAdd"} 
                            icon_style={"evenConstStyle"}/>
                        </div>
                      </div>
                    </div>
                </div>
                <div className={styles.module_core}>
                    <div className={styles.module_main}>
                      <div className={styles.icon}>
                       <div className={styles.icon_area}><AiOutlineComment className={`${styles.icon_conf}`}/></div>
                      </div>

                      <div className={styles.contentMain}></div>
                    </div>
                </div> 
             </div>
            </div>

                
        </main>
    )
}

export default ContentAcess