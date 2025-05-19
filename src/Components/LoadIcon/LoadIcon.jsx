import styles from '../LoadIcon/LoadIcon.module.css'
import { HiArrowPath } from "react-icons/hi2";



function LoadIcon ({msg}) {

    return (
        <div className={styles.main}>
            <div className={styles.perfilArea}><HiArrowPath className={styles.loadImage}/></div>
            {msg !== null && msg !== undefined && msg !== "" ? (
            <div className={`${styles.msgLoad} ${styles.txt}`}> 
                {msg}
            </div>
            ):null}
        </div>
    )
}

export default LoadIcon