import { useEffect, useState } from 'react'
import styles from '../ClassComponent/ClassComponent.module.css'

function ClassComponent({ title, index, HandleTrue, HandleFalse, Start, onClick, implmented }) {
    const [isSelected, setIsSelected] = useState(false);

    const handleToggle = () => {
        setIsSelected((prev) => {
            const newState = !prev;
            newState ? HandleTrue() : HandleFalse(); // Chama a função correta
            return newState;
        });
    };

    useEffect(() => {
        if (Start){
            setIsSelected(true)
        }
        else {
            setIsSelected(false)
        }
    },[])

    

    return (
        <main onClick={onClick} className={styles.main}>
            {Start !== null && implmented ?(
                <label className={`${styles.checkBoxArea} ${styles.txt}`}>
                    <input 
                        type="checkbox" 
                        checked={isSelected} 
                        onChange={handleToggle} 
                        className={styles.checkBox} 
                    />
                    <span className={styles.checkmark}></span>
                </label>
            ):null}
            
            <div className={`${styles.titleMain} ${styles.txt}`}>
                {index}. {title}
            </div>
        </main>
    );
}

export default ClassComponent;
