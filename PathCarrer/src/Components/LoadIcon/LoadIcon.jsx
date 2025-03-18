import styles from '../LoadIcon/LoadIcon.module.css'
import { BiSolidMessageSquareError } from "react-icons/bi";
import { AiFillAlipayCircle } from "react-icons/ai";



function LoadIcon ({msg,iconV}) {

    const comp = {
        BiSolidMessageSquareError,AiFillAlipayCircle
    }
    
    const Componente =  comp[iconV]
    return (
        <div className={styles.main}>
            {Componente !== undefined ? (
                <div className={styles.IconArea}>
                    <Componente
                     className={styles.icon}
                    />
                </div>
                
            ):<div className={styles.perfilArea}></div>}
            <div className={`${styles.msgLoad} ${styles.txt}`}> 
                {msg}
            </div>
        </div>
    )
}

export default LoadIcon