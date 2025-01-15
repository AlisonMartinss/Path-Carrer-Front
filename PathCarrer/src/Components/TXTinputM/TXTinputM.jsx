import styles from '../TXTinputM/TXTinputM.module.css'

function TXTinputM (props) {
    return (
        <form onChange={props.onChange} className={styles.main}>
            <div className={`${styles.message} ${styles.txtover}`}>{props.message}</div>
            
            <textarea className={`${styles.input}`} 
            placeholder={props.placeholder} id="description" name={props.name} rows="4" cols="50" 
            maxlength="620"></textarea>
        </form>

    )
}

export default TXTinputM