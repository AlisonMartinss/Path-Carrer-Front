import styles from '../messageIMG/messageIMG.module.css'

function MessageIMG (props) {
    return (
        <a className={styles.main} href={props.href}>
          <div className={styles.message}>{props.message}</div>
          <img src={props.img} alt="Imagem" />
        </a>
            
  

    )
}

export default MessageIMG