import { useEffect, useState } from 'react'
import styles from '../ClassComponent/ClassComponent.module.css'

function ClassComponent({ title, index, HandleTrue, HandleFalse, Start, onClick }) {
    const [isSelected, setIsSelected] = useState(false);

    const handleToggle = () => {
        setIsSelected((prev) => {
            const newState = !prev;
            newState ? HandleTrue() : HandleFalse(); // Chama a função correta
            return newState;
        });
    };

    useEffect(() => {
        console.log(Start)
        if (Start !== "noAdd"){
            setIsSelected(true)
        }
        else {
            setIsSelected("noAdd")
        }
    },[])

    

    return (
        <main onClick={onClick} className={styles.main}>
            {Start !== "noAdd" ? (
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
