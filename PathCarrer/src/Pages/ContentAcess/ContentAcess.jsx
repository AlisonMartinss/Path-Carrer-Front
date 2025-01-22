import styles from '../ContentAcess/ContentAcess.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'

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
                <div className={styles.content_core}>
                    <div className={styles.conten_comments}>
                        
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default ContentAcess