import styles from '../ButtonIMG/ButtonIMG.module.css'

/* =-=-=-=-= Icons =-=-=-=-= */

import { BsBookmarksFill } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiPencilRuler2Fill } from "react-icons/ri";
import { TfiFlagAlt2 } from "react-icons/tfi";
import { FaDeleteLeft } from "react-icons/fa6";

/* =-=-=-=-= Roocks =-=-=-=-= */

import { useNavigate } from "react-router-dom"
import { useContext, useState,useEffect } from 'react'

/* =-=-=-=-= Functions =-=-=-=-= */

const handleClick = () => {
    setIsClicked(!isClicked);
  };



function ButtonIMG (props) {
    const [isClicked, setIsClicked] = useState(false);

    const comp = {
        BsBookmarksFill,FaRegTrashAlt,RiPencilRuler2Fill,TfiFlagAlt2,FaDeleteLeft
    }

    const Componente =  comp[props.iconi]
    const classeBase =  styles[props.iconi2]
    const classeAfter = styles[props.icone_styles_after]
    return (
        <div onClick={props.func} className={styles.button}>
            <Componente className={`${classeBase} ${classeAfter}`}/>
        </div>
    )
}

export default ButtonIMG;