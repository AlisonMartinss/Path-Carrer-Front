import styles from '../CreateModulo/Createmodulo.module.css'

import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import TXTinputM from '../../Components/TXTinputM/TXTinputM'
import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import Button from '../../Components/Button/Button'


import { PathContext } from '../../Provider/Provider'
import { useNavigate } from "react-router-dom"
import { useContext } from 'react'

function CreateModulo () {
    const navigate = useNavigate();
    const {setModuleData} = useContext(PathContext);

    const handleChange = (event) => {
        event.preventDefault();
        const {name,value} = event.target;
        setModuleData({[name]:value});
    }

    const redirect = (event) =>{
        event.preventDefault();
        navigate('/createaulas');

    }

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <CabecalhoPadrao/>
            </header>
            <form className={styles.form}>
                <div className={styles.moduloName}>
                    <TXTinputP
                    func={handleChange}
                    name={"name"}
                    placeholder={"Digite o nome do modulo"}/>
                </div>

                <div className={styles.moduloDesc}>
                    <TXTinputM
                     func={handleChange}
                     name={"description"}
                     placeholder={"Descreva o seu modulo"}/>
                </div>

                <div className={styles.Button}>
                <Button
                  func={redirect}
                  message={"Enviar"}
                  class={"button"}/>
                </div>
            </form>
           
        </main>

    )
}

export default CreateModulo