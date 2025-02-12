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
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { FaFolderOpen } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { TbPencilCog } from "react-icons/tb";
import { RxPencil2 } from "react-icons/rx";


function ButtonIMG ({iconV,icon_style,handleClick,}) {


const comp = {
    BsBookmarksFill,FaRegTrashAlt,
    RiPencilRuler2Fill,TfiFlagAlt2,
    FaDeleteLeft,FaStar,AiFillLike,
    AiFillDislike,RxHamburgerMenu,
    CgProfile,FaFolderOpen,
    MdBookmarkAdd,FaHouseChimneyWindow,
    TbPencilCog,RxPencil2
}

/* =-=-=-=-= Functions =-=-=-=-= */

    const Componente =  comp[iconV]
    const classeBase =  styles[icon_style]

    return (
        <div onClick={handleClick} className={styles.button}>
            <Componente className={`${classeBase}`}/>
        </div>
    )
}

export default ButtonIMG;