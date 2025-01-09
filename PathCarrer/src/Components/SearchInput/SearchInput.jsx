import styles from '../SearchInput/SearchInput.module.css'

function SearchInput (props){
    return(
        
         <form className={styles.form}>
            <input className={`${styles.input}`} 
            type="text" id={props.id} name={props.name} placeholder={props.placeholder}/>
         </form>
        
       
    )
}

export default SearchInput