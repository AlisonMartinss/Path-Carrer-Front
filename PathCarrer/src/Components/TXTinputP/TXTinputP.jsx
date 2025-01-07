import styles from '../TXTinputP/TXTinputP.module.css'

//<div className={`${styles.message} ${styles.txtover}`}>{props.message}</div>
function TXTinputP (props){
    return (
        <main className={styles.main}>
            
            <input className={`${styles.input}`} 
            type="text" id={props.id} name={props.name} placeholder={props.placeholder}/>
        </main>
    )}
export default TXTinputP