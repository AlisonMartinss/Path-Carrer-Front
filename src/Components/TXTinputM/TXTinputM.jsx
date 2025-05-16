import styles from '../TXTinputM/TXTinputM.module.css'

function TXTinputM ({onChange,placeholder,name,maxlength}) {
    return (
        <form onChange={onChange} className={styles.main}>
            <textarea className={`${styles.input}`} 
            placeholder={placeholder} id="description" name={name} rows="4" cols="50" 
            maxlength={maxlength}></textarea>
        </form>

    )
}

export default TXTinputM