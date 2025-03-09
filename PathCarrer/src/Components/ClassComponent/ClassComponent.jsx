import { useState } from 'react'
import styles from '../ClassComponent/ClassComponent.module.css'

function ClassComponent ({title,index,HandleTrue,HandleFalse,onClick}){
    const [Select,SetSelectd] = useState(false);
    const [checkted,setCheckted] = useState(false)

    const HandleClick = () => {
        if (Select == true){
            SetSelectd((prev) => (!prev))
            setCheckted((prev) => (!prev))
            HandleTrue();
            alert("Olha:" + Select)
            
        }
        else {
            SetSelectd((prev) => (!prev))
            setCheckted((prev) => (!prev))
            HandleFalse();
            alert("Olha:" + Select)
        }
    }

    return (
        
        <main onClick={onClick} className={styles.main}>
            <label className={`${styles.checkBoxArea} ${styles.txt}`}>
                <input onChange = {(e) => HandleClick()} type="checkbox" checked={checkted} className={styles.checkBox} />
                <span className={styles.checkmark}></span>
            </label>
            <div className={`${styles.titleMain} ${styles.txt}`}>
                {index}. {title}
            </div>
        </main>
    )
}

export default ClassComponent