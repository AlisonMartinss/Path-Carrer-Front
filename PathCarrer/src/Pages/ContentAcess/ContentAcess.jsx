import styles from '../ContentAcess/ContentAcess.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import WindowText from '../../Components/WindowText/WindowText'
import WindowComment from '../../Components/WindowComment/WindowComment'
import SideBar from '../../Components/SideBar/SideBar'
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG'

import { AiOutlineComment } from "react-icons/ai";
import { GiBookCover } from "react-icons/gi";

import {useState} from 'react'


function ContentAcess (){
    const [isClicked, setIsClicked] = useState(false);
    const [view, setView] = useState(false);

    const handleClick = () => {
        setIsClicked((prev) => (!prev))
        handleClickView();
    };

    const handleClickView = () => {
        setView((prev) => (!prev))
    };


    return(

        <main className={styles.main}>
            <header className={styles.header}><CabecalhoPadrao/></header>
            <div className={styles.core}>
                
                <div className={styles.sideBar}>
                    <SideBar/>
                </div>

                <div className={styles.view_core}>

                 <div className={styles.content_module}>
                    <div className={styles.content_core}>
                        <div className={styles.area_plate}>< GiBookCover className={styles.class_icon} /></div>

                        <div className={styles.content_show}>

                         <div className={styles.module_area}>
                            <WindowText classFormat={"main_format_1"} classStyle={"main_Style_6"} txt={"254 para textos grandes"}/>
                         </div>

                        </div>
                    </div>
                 </div>

                 <div className={styles.content_comments}>
                    <div className={`${styles.content_core} ${styles.content_core_comments}`}>
                        <div className={styles.area_plate}><AiOutlineComment className={styles.class_icon}/></div>

                        <div className={styles.content_show}>
                            <div className={styles.comment_area}><WindowComment/></div>
                            <div className={styles.comment_area}><WindowComment/></div>
                            <div className={styles.comment_area}><WindowComment/></div>
                            <div className={styles.comment_area}><WindowComment/></div>
                            <div className={styles.comment_area}><WindowComment/></div>
                            <div className={styles.comment_area}><WindowComment/></div>
                            <div className={styles.comment_area}><WindowComment/></div>                                                 
                        </div>
                    </div>


                 </div>

            
                    
                </div>
            </div>
        </main>
    )
}

export default ContentAcess