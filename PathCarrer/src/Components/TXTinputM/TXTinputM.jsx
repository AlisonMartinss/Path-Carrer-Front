import styles from '../TXTinputM/TXTinputM.module.css'

function TXTinputM ({onChange,placeholder,name}) {
    return (
        <form onChange={onChange} className={styles.main}>
            <textarea className={`${styles.input}`} 
            placeholder={placeholder} id="description" name={name} rows="4" cols="50" 
            maxlength="620"></textarea>
        </form>

    )
}

export default TXTinputM