import styles from '../Window/Window.module.css'
import ButtonIMG from '../ButtonIMG/ButtonIMG'
import Trash from '../Trash/Trash'



import ING from '../../../src/assets/Midias/Icones/Icone_01.png'
import TI from '../../../src/assets/Midias/Icones/Icone_02.png'
import FIN from '../../../src/assets/Midias/Icones/Icone_03.png'
import MKT  from '../../../src/assets/Midias/Icones/Icone_04.png'
import IA from '../../../src/assets/Midias/Icones/Icone_05.png'
import POR from '../../../src/assets/Midias/Icones/Icone_06.png'
import EMP from '../../../src/assets/Midias/Icones/Icone_07.png'
import DES from '../../../src/assets/Midias/Icones/Icone_08.png'
import FAV from '../../../src/assets/Midias/Icones/Icone2_02.png'
import TRH from '../../../src/assets/Midias/Icones/Icone2_01.png'





function Window(props) {
    const icones = {
        ING,TI,FIN,MKT,IA,POR,EMP,DES
    }
    

    const Icon = icones[props.iconnnn] || '';

    
    return (
        <main className={styles.main}>
         <div className={styles.icons}>
            <div className={`${styles.overIcon}`}><ButtonIMG img={FAV}/></div>
            <div className={`${styles.overIcon}`}><ButtonIMG img={TRH}/></div>
         </div>

         <div className={styles.titleANDimg}>
            <div className={styles.preIcon}>
             <img className={styles.img} src={Icon} alt="Icone do curso"/>
            </div>
            
            <div className={`${styles.title} ${styles.overTXT}`}>{props.title}</div>
         </div>

         <div className={`${styles.classRelative} ${styles.overTXT}`}>{props.relative}</div>
        </main>
    )

}

export default Window
