import styles from '../Window/Window.module.css'
import ButtonIMG from '../ButtonIMG/ButtonIMG'


import Mat from '../../../src/assets/Midias/Icones/Icone_01.png'
import Por from '../../../src/assets/Midias/Icones/Icone_02.png'
import Ing from '../../../src/assets/Midias/Icones/Icone_03.png'
import TI  from '../../../src/assets/Midias/Icones/Icone_04.png'
import Fin from '../../../src/assets/Midias/Icones/Icone_05.png'
import Emp from '../../../src/assets/Midias/Icones/Icone_06.png'
import Des from '../../../src/assets/Midias/Icones/Icone_07.png'
import Mkt from '../../../src/assets/Midias/Icones/Icone_08.png'
import Ia  from '../../../src/assets/Midias/Icones/Icone_09.png'



function Window(props) {
    const icones = {
        Mat,Por,Ing,TI,Fin,Emp,Des,Mkt,Ia,
    }
    

    const Icon = icones[props.iconnnn] || '';

    
    return (
        <main className={styles.main}>
         <div className={styles.icons}>
            <div className={`${styles.icon1} ${styles.overIcon}`}><ButtonIMG/></div>
            <div className={`${styles.icon2} ${styles.overIcon}`}><ButtonIMG/></div>
            <div className={`${styles.icon3} ${styles.overIcon}`}><ButtonIMG/></div>
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
