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
import { FaTrash } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { HiOutlineTrash } from "react-icons/hi2";
import { TiGroup } from "react-icons/ti";
import { CgComment } from "react-icons/cg";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { MdSend } from "react-icons/md";
import { CiEdit } from "react-icons/ci"; // lapis - soft
import { BsSendFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { IoIosCompass } from "react-icons/io";

function ButtonIMG ({iconV,icon_style,handleClick,IDValue,title}) {


const comp = {
    BsBookmarksFill,FaRegTrashAlt,
    RiPencilRuler2Fill,TfiFlagAlt2,
    FaDeleteLeft,FaStar,AiFillLike,
    AiFillDislike,RxHamburgerMenu,
    CgProfile,FaFolderOpen,
    MdBookmarkAdd,FaHouseChimneyWindow,
    TbPencilCog,RxPencil2,FaTrash,IoIosAddCircle,
    HiOutlineTrash,TiGroup,CgComment,
    IoChevronBackCircleSharp,IoIosCloseCircle,
    MdSend,CiEdit,BsSendFill,IoHome,IoIosCompass
    
}

    const Componente =  comp[iconV]
    const classeBase =  styles[icon_style]

    return (
        <div title={title} id={IDValue} onClick={(e) => handleClick(e)} className={styles.button}>
            < Componente className={`${classeBase}`}/>
        </div>
    )
}

export default ButtonIMG;