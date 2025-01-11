import styles from '../Conteudo/Conteudo.module.css'
import ButtonIMG from '../ButtonIMG/ButtonIMG'

function Conteudo (props){
    return (
        <div className={styles.main}>
            <div className={styles.blockMain}>
                
                    <div className={styles.blockLower}>{props.nomeCanal}</div>
                    <img className={styles.img} src={props.imgCanal} alt="Imagem do canal" />
                    <div className={styles.button}><ButtonIMG/></div>
                
                
            </div>
            <div className={styles.tituloModulo}>
                <p className={styles.titleContent}>{props.tituloModulo}</p>
            </div>

        </div>
    )
}

export default Conteudo