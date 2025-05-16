import styles from '../WindowText/WindowText.module.css'

function WindowText (props){
    const classFormat = styles[props.classFormat] || '';
    const classStyle = styles[props.classStyle] || '';
    return(
        <main className={`${classFormat} ${classStyle}`}>           
          <p className={`${styles.titulo} ${styles.textFunc} ${styles.stylesText}`}>
            {props.txt}
          </p>                          
        </main>
    )
}

export default WindowText