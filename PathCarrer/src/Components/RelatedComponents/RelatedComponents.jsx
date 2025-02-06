import styles from '../RelatedComponents/RelatedComponents.module.css'

import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

import { useContext, useState,useEffect } from 'react'



function RelatedComponents({icon_Aa,icon_Bb,ClasseAfterA,ClasseAfterB,buttonActive,mensagemA,mensagemB}){
    const [isClickedA, setIsClickedA] = useState(false);
    const [isClickedB, setIsClickedB] = useState(false);

    const handleClick = (event) => {
        buttonActive(event);
        const {id} = event.currentTarget;
        if (id == "comp_A"){
            setIsClickedA((prev) => (!prev))
            if(isClickedB == true){
                setIsClickedB((prev) => (!prev))
            }
        }
        else if(id == "comp_B"){
            setIsClickedB((prev) => (!prev))
            if(isClickedA == true){
                setIsClickedA((prev) => (!prev))
            }
        }
    };

    const icon = {
        GrLike,GrDislike,AiFillLike,AiFillDislike
    };

    const Icon_A = icon[icon_Aa];
    const Icon_B = icon[icon_Bb];
    return (
        <main className={styles.main}>
            <div onClick={handleClick} id='comp_A' className={styles.icon_Area}>
                <Icon_A className={`${styles.classeBase} ${isClickedA ? styles[ClasseAfterA] : ""}`}/>
                <div className={`${styles.txtLayout} ${styles.txtOver}`}>{mensagemA}</div>
            </div>

            <div onClick={handleClick} id='comp_B' className={styles.icon_Area}>
                <Icon_B className={`${styles.classeBase}  ${isClickedB ? styles[ClasseAfterB] : ""}`}/>
                <div className={`${styles.txtLayout} ${styles.txtOver}`}>{mensagemB}</div>
            </div>
        </main>
    )
}

export default RelatedComponents