import { useState } from 'react'
import styles from '../ClassComponent/ClassComponent.module.css'

function ClassComponent ({title,index,HandleTrue,HandleFalse}){
    const [Select,SetSelectd] = useState(false);

    const HandleClick = () => {
        if (Select == true){
            SetSelectd((prev) => (!prev))
            HandleTrue();
            alert("Olha:" + Select)
            
        }
        else {
            SetSelectd((prev) => (!prev))
            HandleFalse();
            alert("Olha:" + Select)
        }
    }

    return (
        
        <main className={styles.main}>
            <label className={`${styles.checkBoxArea} ${styles.txt}`}>
                <input onChange = {(e) => HandleClick()} type="checkbox" className={styles.checkBox} />
                <span className={styles.checkmark}></span>
            </label>
            <div className={`${styles.titleMain} ${styles.txt}`}>
                {index}. {title}
            </div>
        </main>
    )
}

export default ClassComponent