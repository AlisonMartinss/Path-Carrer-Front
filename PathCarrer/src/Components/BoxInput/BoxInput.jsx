import styles from '../BoxInput/BoxInput.module.css'

function BoxInput ({id, name ,optionE=[]}) {
    
    return (
        <form className={styles.main}>
            <select className={`${styles.options} ${styles.txtover}`} id={id} name={name}>
                {optionE.map((option, index) => (
                    <option key={index} value={option.valueA}>{option.txt}</option>
                ))}
            </select>
        </form>

    )
}

export default BoxInput