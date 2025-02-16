import styles from '../TXTinputP/TXTinputP.module.css'

//<div className={`${styles.message} ${styles.txtover}`}>{props.message}</div>
function TXTinputP ({onChange,placeholder,id,name,value}){
    return (
        <form className={styles.main}>
            <input onChange={onChange} className={`${styles.input}`} 
            type="text" value={value} id={id} name={name} placeholder={placeholder}/>
        </form>
    )}
export default TXTinputP