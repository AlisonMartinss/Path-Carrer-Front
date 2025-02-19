import styles from '../CreateModulo/Createmodulo.module.css'

import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import TXTinputM from '../../Components/TXTinputM/TXTinputM'
import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import Button from '../../Components/Button/Button'


import { PathContext } from '../../Provider/Provider'
import { useNavigate } from "react-router-dom"
import { useContext } from 'react'

import {PathStepsContext} from '../../Provider/CreatePathSteps/CreatePathSteps'

function CreateModulo () {
    const {twoStep,setTwoStep} = useContext(PathStepsContext);

    const setInfo = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
    
      setTwoStep((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

   const mostrar = () => {
    console.log(JSON.stringify(twoStep))
   }
    

  

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <CabecalhoPadrao/>
            </header>
            <form className={styles.form}>
              <div className={styles.moduloName}>
                <TXTinputP
                onChange={(e) => setInfo(e)}
                name={"titleModule"}
                placeholder={"Digite o nome do modulo"}/>
              </div>

              <div className={styles.moduloDesc}>
                <TXTinputM
                onChange={(e) => setInfo(e)}
                name={"descModule"}
                placeholder={"Descreva o seu modulo"}/>
              </div>

              <div className={styles.Button}>
                <Button
                func={(e) => mostrar(e)}
                message={"Enviar"}
                class={"button"}
                />
              </div>
            </form>
           
        </main>

    )
}

export default CreateModulo