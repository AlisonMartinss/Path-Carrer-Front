import { useEffect, useState } from 'react';
import style from '../WindowModule/WindowModule.module.css'

import IA from '../../../src/assets/Midias/SVGs/AI.svg'
import BUS from '../../../src/assets/Midias/SVGs/BUS.svg'
import CRI from '../../../src/assets/Midias/SVGs/CRI.svg'
import DG from '../../../src/assets/Midias/SVGs/DG.svg'
import PROD from '../../../src/assets/Midias/SVGs/PROD.svg'
import TI from '../../../src/assets/Midias/SVGs/TI.svg'
import EF from '../../../src/assets/Midias/SVGs/Educação financeira.svg'
import MK from '../../../src/assets/Midias/SVGs/Marketing.svg'


function WindowModule ({titleMain,subTile,nClassYep,nClass,onClick,category}){
    const [img,SetImg] = useState(null);

    function defImg () {
        
        if (category === "Inteligência Artificial"){
            SetImg(IA)
        }else if (category === "Marketing Digital"){
            SetImg(MK)
        }else if (category === "Educação Financeira"){
            SetImg(EF)
        }else if (category === "Tecnologia da Informação"){
            SetImg(TI)
        }else if (category === "Modelo de Negócio"){
            SetImg(BUS)
        }else if (category === "Produtividade"){
            SetImg(PROD)
        }else if (category === "Design Gráfico"){
            SetImg(DG)
        }
        else if (category === "Criptomoedas"){
            SetImg(CRI)
        }
    }

    let porcent = Math.trunc(nClassYep*100/nClass);
    function SetColor () {
        if (nClass !== null && nClass !== undefined  && nClassYep !== null && nClassYep !== undefined){
            if (porcent < 50){
                return "red"
            }
            else if (porcent > 50 && porcent < 75){
                return "Yellow"
            }
            else {
                return "Green"
            }
        }
        return null
    }

    useEffect(() => {defImg()},[])
    return (
        <main onClick={onClick} className={`${style.main} ${style.style1}`}>
            <div className={style.Pre_img}>
                <img  className={style.img} src={img} alt="Icone do curso" />
            </div>
            <div className={style.title_SubTitle}>
                <div className={`${style.title_Main} ${style.txtOver}`}>{titleMain}</div>
                <div className={`${style.sub_title} ${style.txtOver2}`}>{subTile}</div>              
            </div>
            {
            SetColor() !== null ? (
                <div className={`${style.Relative} ${style[SetColor()]}`}>
                    <div className={`${style.relative_content} ${style.txtOver}`}>
                        {`${Math.trunc(nClassYep*100/nClass)} %`}
                    </div>
                </div>
            ):null}
            
        </main>

    )

}

export default WindowModule