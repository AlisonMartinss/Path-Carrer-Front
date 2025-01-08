import styles from '../Window/Window.module.css'
import ButtonIMG from '../ButtonIMG/ButtonIMG'

//     

function Window(props) {
    return (
        <main className={styles.main}>
         <div className={styles.icons}>
            <div className={`${styles.icon1} ${styles.overIcon}`}><ButtonIMG/></div>
            <div className={`${styles.icon2} ${styles.overIcon}`}><ButtonIMG/></div>
            <div className={`${styles.icon3} ${styles.overIcon}`}><ButtonIMG/></div>
         </div>

         <div className={styles.titleANDimg}>
            <img className={styles.img} src={props.img} alt="Icone do curso"/>
            <div className={styles.title}>{props.title}</div>
         </div>

         <div className={styles.classRelative}>{props.relative}</div>
        </main>
    )

}

export default Window
