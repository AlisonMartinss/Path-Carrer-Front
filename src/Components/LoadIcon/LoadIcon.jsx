import styles from '../LoadIcon/LoadIcon.module.css'
import { BiSolidMessageSquareError } from "react-icons/bi";
import { AiFillAlipayCircle } from "react-icons/ai";
import { HiArrowPath } from "react-icons/hi2";

// Midia

import loadIcon from '../../assets/Midias/PNGs/images/loadicon.svg'



function LoadIcon ({msg,iconV}) {

    const comp = {
        BiSolidMessageSquareError,AiFillAlipayCircle
    }
    
    const Componente =  comp[iconV]
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