import styles from '../ContentAcess/ContentAcess.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import WindowText from '../../Components/WindowText/WindowText'

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
                         <div className={styles.content_container}>

                          <div className={styles.moduleElement}>
                            <WindowText classModel={"mainModel2"} classStyle={"mainStyle4"} txt={"254 para textos grandes"}/>
                          </div>

                         </div>                      
                        </div>
                    </div>
                    <div className={styles.conten_comments}>
                        
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default ContentAcess