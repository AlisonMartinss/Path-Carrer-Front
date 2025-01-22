import styles from '../ContentAcess/ContentAcess.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'

function ContentAcess (){
    return(
        <main className={styles.main}>
            <header className={styles.header}><CabecalhoPadrao/></header>
            <div className={styles.core}>
                <div className={styles.sideBar}></div>
                <div className={styles.content_core}></div>
            </div>
        </main>
    )
}

export default ContentAcess