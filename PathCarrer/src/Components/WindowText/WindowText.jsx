import styles from '../WindowText/WindowText.module.css'

function WindowText (props){
    const classModel = styles[props.classModel] || '';
    const classStyle = styles[props.classStyle] || '';
    return(
        <main className={`${classModel} ${classStyle}`}>
            <p className={`${styles.text} ${styles.overtxt}`}>
               {props.txt}
            </p>
</main>
    )
}

export default WindowText