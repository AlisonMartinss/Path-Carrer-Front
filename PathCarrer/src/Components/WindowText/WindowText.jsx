import styles from '../WindowText/WindowText.module.css'

function WindowText (props){
    return(
        <main className={styles.main}>
            <p className={`${styles.text} ${styles.overtxt}`}>
               {props.txt}
            </p>
</main>
    )
}

export default WindowText