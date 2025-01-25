import styles from '../ContentAcess/ContentAcess.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import WindowText from '../../Components/WindowText/WindowText'
import WindowComment from '../../Components/WindowComment/WindowComment'


function ContentAcess (){
    return(
        <main className={styles.main}>
            <header className={styles.header}><CabecalhoPadrao/></header>
            <div className={styles.core}>
                <div className={styles.sideBar}>
                    <div className={styles.profile_core}>
                      <div className={styles.name_medals}>
                        <div className={styles.name}></div>
                        <div className={styles.medals}></div>
                      </div>
                      <div className={styles.imgProfile}></div>
                    </div>
                    <div className={styles.adjectives}></div>
                    <div className={styles.desc}></div>
                </div>
                <div className={styles.view_core}>
                    <div className={styles.content_core}>
                        <div className={styles.content_show}>
                         
                          <div className={styles.module_area}>
                            <WindowText classFormat={"main_format_1"} classStyle={"main_Style_4"} txt={"254 para textos grandes"}
                             paragrafo={"Lore ipsul Lore ipsul Lore ipsul Lore ipsul Lore ipsul Lore ipsul Lore ipsul Lore ipsul Lore ipsul Lore ipsul Lore ipsul Lore ipsul Lore ipsul Lore ipsul Lore ipsul Lore ipsul"}/>
                          </div>
                          
                        </div>
                    </div>

                    <div className={styles.content_comments}>
                        <div className={styles.comments_options}></div>

                        <div className={styles.comment_show}>
                           <div className={styles.comment_area}><WindowComment/></div>
                                                  
                        </div>
                       
                       
                        
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default ContentAcess