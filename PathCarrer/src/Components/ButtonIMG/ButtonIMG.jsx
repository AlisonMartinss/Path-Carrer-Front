import styles from '../ButtonIMG/ButtonIMG.module.css'
import { BsBookmarksFill } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiPencilRuler2Fill } from "react-icons/ri";
import { TfiFlagAlt2 } from "react-icons/tfi";



function ButtonIMG (props) {
    const comp = {
        BsBookmarksFill,FaRegTrashAlt,RiPencilRuler2Fill,TfiFlagAlt2
    }

    const Componente =  comp[props.iconi]
    const classe =      styles[props.iconi2]
    return (
        <div onClick={props.func} className={styles.button}>
            <Componente className={classe} />
        </div>
    )
}

export default ButtonIMG