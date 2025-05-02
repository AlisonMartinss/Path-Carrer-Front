import styles from '../TXTinputP/TXTinputP.module.css'

//<div className={`${styles.message} ${styles.txtover}`}>{props.message}</div>
function TXTinputP ({onChange,placeholder,id,name,value,type ,maxLengthX}){
    return (
        <form className={styles.main}>
            <input maxLength={maxLengthX} onChange={onChange} className={`${styles.input}`} 
            type={type} value={value} id={id} name={name} placeholder={placeholder}/>
        </form>
    )}
export default TXTinputP