import { useEffect, useState } from 'react';
import styles from '../../Components/CabecalhoHomePage/CabecalhoHomePage.module.css'
import { IoLogIn } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import { useNavigate } from 'react-router';
import { FaLightbulb } from "react-icons/fa";


function CabecalhoHomePage ({sobrenosClick}) {

    const navigate = useNavigate(); 
    const Icon = {
        IoLogIn,IoAddCircle
    }
    const buttonRender =
    [
        {
            title:"Login",
            Icone:Icon["IoLogIn"],
            onClick:() => navigate('/Login')
        },
        {
            title:"Criar Conta",
            Icone:Icon["IoAddCircle"],
            onClick:() => navigate('/Login')
        }
    ]

     useEffect(() => {
         console.log(buttonRender)
    
        },[]);

    return (
        <div className={styles.main}>
            <div className={styles.rigthArea}>
              <div onClick={sobrenosClick} className={`${styles.LeftAreaCTOElement} ${styles.txtOver}`}>
                <FaLightbulb/> Sobre nós
              </div>
            </div>
            <div className={styles.leftArea}>
                <div className={styles.separador}></div>
                {buttonRender.map((element) => (
                    <div onClick={element.onClick} className={`${styles.LeftAreaCTOElement} ${styles.txtOver}`}>
                      <element.Icone className={styles.icon}/>{element.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CabecalhoHomePage;