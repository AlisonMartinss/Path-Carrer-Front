import styles from '../ContentAcess/ContentAcess.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import WindowText from '../../Components/WindowText/WindowText'
import WindowComment from '../../Components/WindowComment/WindowComment'
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG'

import { AiOutlineComment } from "react-icons/ai";
import { GiBookCover } from "react-icons/gi";

import {useState} from 'react'


function ContentAcess (){
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        alert("side bar")
        setIsClicked((prev) => (!prev))
    };


    return(

        <main className={styles.main}>
            <header className={styles.header}><CabecalhoPadrao/></header>
            <div className={styles.core}>
                
                <div className={`${styles.sideBar}   ${isClicked ? styles.endoContainer : styles.exoContainer}`}>
                    <div className={styles.profile_core}>
                      <div className={styles.on_off_area}>
                        <div className={styles.button_PreArea}>
                            <ButtonIMG iconV={"RxHamburgerMenu"}
                            icon_style={"const"}
                            handleClick={(e) => handleClick()}/>
                        </div>
                      
                      </div>
                      <div className={styles.profile_main}>
                        <div className={styles.profile_aspects}>
                            <div className={styles.profile_img}>
                                <img className={styles.img} src="https://i.pinimg.com/736x/20/7b/a9/207ba93842651805eda5de67765197f2.jpg" alt="" />
                            </div>
                            <div className={styles.medals_area}>
                                <div className={styles.medals}><img className={styles.img} src="https://c4.wallpaperflare.com/wallpaper/510/751/778/akira-kaneda-motorcycle-anime-wallpaper-preview.jpg" alt="" /></div>
                                <div className={styles.medals}><img className={styles.img} src="" alt="" /></div>
                                <div className={styles.medals}><img className={styles.img} src="" alt="" /></div>
                            </div>
                        </div>


                        <div className={styles.topArea}><img className={styles.img} src="https://i.pinimg.com/736x/cc/f9/2f/ccf92f19e7045a4b7cfb9c6c6d82495d.jpg" alt="Banner" /></div>
                        <div className={styles.bottomArea}> AI CALIQUINHA</div>
                      </div>                     
                    </div>

                    <div className={styles.adjectives}></div>
                    <div className={styles.desc}></div>
                </div>

                <div className={styles.view_core}>

                 <div className={styles.content_module}>
                    <div className={styles.content_core}>
                        <div className={styles.area_plate}>< GiBookCover className={styles.class_icon} /></div>

                        <div className={styles.content_show}>

                         <div className={styles.module_area}>
                            <WindowText classFormat={"main_format_1"} classStyle={"main_Style_4"} txt={"254 para textos grandes"}/>
                         </div>

                        </div>
                    </div>
                 </div>

                 <div className={styles.content_comments}>
                    <div className={styles.content_core}>
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