import styles from '../TXTinputM/TXTinputM.module.css'

function TXTinputM (props) {
    return (
        <main className={styles.main}>
            <div className={`${styles.message} ${styles.txtover}`}>{props.message}</div>
            
            <textarea className={`${styles.input}`} 
            placeholder={props.placeholder} id="description" name="descripitions" rows="4" cols="50" 
            maxlength="620"></textarea>
        </main>

    )
}

export default TXTinputM