import styles from '../ButtonIMG/ButtonIMG.module.css'

function ButtonIMG (props) {
    return (
        <button onClick={props.func} className={styles.button}>
            <img className={styles.img} src={props.img} alt="imagem do botao"/>
        </button>
    )
}

export default ButtonIMG