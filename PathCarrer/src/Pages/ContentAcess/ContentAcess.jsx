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
                
                <div className={`${styles.sideBar} ${isClicked ? styles.sideBar_areaB : styles.sideBar_areaA}`}>
                    <div className={styles.profile_core}>
                      <div className={styles.on_off_area}>
                        <div className={styles.button_PreArea} onClick={(e) => handleClick()}>
                            <ButtonIMG iconV={"RxHamburgerMenu"}
                            icon_style={"const"}/>
                        </div>
                      
                      </div>
                      <div className={`${styles.profile_main} ${isClicked ? styles.profile_main_area_A : styles.profile_main_area_B}`}>
                        <div className={`${styles.profile_aspects} ${isClicked ? styles.profile_aspects_A : styles.profile_aspects_B}`}>
                            <div className={`${styles.profile_img} ${isClicked ? styles.profile_img_A : styles.profile_img_B}` }>
                                <img className={styles.img} src="https://i.pinimg.com/736x/20/7b/a9/207ba93842651805eda5de67765197f2.jpg" alt="" />
                            </div>
                            <div className={`${styles.medals_area} ${isClicked ? styles.medals_area_A : styles.medals_area_B}`}>
                                <div className={styles.medals}><img className={styles.img} src="https://c4.wallpaperflare.com/wallpaper/510/751/778/akira-kaneda-motorcycle-anime-wallpaper-preview.jpg" alt="" /></div>
                                <div className={styles.medals}><img className={styles.img} src="" alt="" /></div>
                                <div className={styles.medals}><img className={styles.img} src="" alt="" /></div>
                            </div>
                        </div>


                        <div className={styles.topArea}>
                            <img className={styles.img} src="https://i.pinimg.com/736x/cc/f9/2f/ccf92f19e7045a4b7cfb9c6c6d82495d.jpg" alt="Banner" />
                        </div>
                        <div className={`${styles.bottomArea} ${styles.txtA}`}> AI CALIQUINHA</div>
                      </div>                     
                    </div>

                    <div className={`${styles.adjectives_area} ${styles.txtB} ${isClicked ? styles.adjectives_area_B : styles.adjectives_area_A}`}>
                        <div className={`${styles.adjectives} ${styles.great}`}>Muito BOM</div>
                        <div className={`${styles.adjectives} ${styles.great}`}>Muito BOM</div>
                        <div className={`${styles.adjectives} ${styles.great}`}>Muito BOM</div>
                        <div className={`${styles.adjectives} ${styles.great}`}>Muito BOM</div>
                        <div className={`${styles.adjectives} ${styles.great}`}>Muito BOM</div>
                    </div>

                    <div className={styles.desc_area}>
                        <div className={`${styles.title_desc} ${styles.txtB}`}>Descrição do Path</div>
                        <div className={`${styles.desc_area_main} ${isClicked ? styles.desc_area_main_A : styles.desc_area_main_B}`}>
                            <div className={styles.barra}></div>
                            <p  className={`${styles.desc} ${styles.txtC}`}>
                              nspiraçãoSobre a linda capitalDeste nosso grande chãoLá no Rio Grande do NorteBrilha forte essa nação.
                              No dia vinte e cincoDe dezembro ela nasceuCom seu nome tão bonitoQue o tempo engrandeceuNatal é terra 
                              queridaQue o povo sempre viveu. Cidade do sol ardenteQue brilha o ano inteiroCom suas praias formosasE 
                              um calor hospitaleiroSe o turista aqui vemVolta sempre ligeiro. Tem a praia de Ponta NegraE seu belo 
                              Morro do CarecaCartão-postal co
                            </p>
                        </div>
                        
                    </div>
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