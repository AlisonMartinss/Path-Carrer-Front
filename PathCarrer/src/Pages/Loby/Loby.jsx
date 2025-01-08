import styles from '../Loby/Loby.module.css'

// =-=-=-=-=- Componentes =-=-=-=-=- //

/*<div className={styles.preWindow}>
                          <Window/>
                        </div>*/

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import Window from '../../Components/window/Window'

function Loby () {
    return (
        <main className={styles.main}>
            <header className={styles.header}><CabecalhoPadrao/></header>
            <div className={styles.searchArea}></div>
            <div className={styles.core}>
             <div className={styles.classes}>
                <div className={styles.classes_focus}>
                 <div className={styles.preWindow}>
                    <Window/>
                 </div>
                 <div className={styles.preWindow}>
                    <Window/>
                 </div>
                 <div className={styles.preWindow}>
                    <Window/> 
                 </div>
                 <div className={styles.preWindow}>
                   <Window/>
                 </div>
                 <div className={styles.preWindow}>
                   <Window/>
                 </div>
                </div>
             </div>
                
                <div className={styles.shortMensage}></div>
            </div>

        </main>

    )
}

export default Loby