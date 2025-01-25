import styles from '../ButtonIMG/ButtonIMG.module.css'

/* =-=-=-=-= Icons =-=-=-=-= */

import { BsBookmarksFill } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiPencilRuler2Fill } from "react-icons/ri";
import { TfiFlagAlt2 } from "react-icons/tfi";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

/* =-=-=-=-= Roocks =-=-=-=-= */

import { useNavigate } from "react-router-dom"
import { useState } from 'react'



function ButtonIMG ({iconV,icon_style,icone_styles_after,buttonActive}) {
    const [isClicked, setIsClicked] = useState(false);

const comp = {
    BsBookmarksFill,FaRegTrashAlt,RiPencilRuler2Fill,TfiFlagAlt2,FaDeleteLeft,FaStar,AiFillLike,AiFillDislike
}

/* =-=-=-=-= Functions =-=-=-=-= */

const handleClick = () => {
    if(buttonActive)buttonActive();
    setIsClicked(!isClicked);
  };

    const Componente =  comp[iconV]
    const classeBase =  styles[icon_style]
    const classeAfter = styles[icone_styles_after]

    return (
        <div onClick={handleClick} className={styles.button}>
            <Componente className={`${classeBase} ${isClicked ? classeAfter:""}`}/>
        </div>
    )
}

export default ButtonIMG;