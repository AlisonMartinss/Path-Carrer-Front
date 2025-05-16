import { useNavigate } from "react-router"
import CabecalhoV2 from "../../Components/CabecalhoV2/CabecalhoV2"
import styles from '../NotFound/NotFound.module.css'

function NotFound () {
    const navigate  = useNavigate();
    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <CabecalhoV2/>
            </header>
            <div className={`${styles.waring} ${styles.txtover}`}>
                <div>Pagina não encontrada!</div>
                <div onClick={() => navigate('/')} className={`${styles.txtoverB} ${styles.botao}`}>(Clique aqui para Voltar o inicio !)</div>
            </div>
        </div>
    )
}

export default NotFound