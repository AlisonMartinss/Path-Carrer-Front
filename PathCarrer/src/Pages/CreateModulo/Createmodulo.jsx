import styles from '../CreateModulo/Createmodulo.module.css'

import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import TXTinputM from '../../Components/TXTinputM/TXTinputM'
import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import Button from '../../Components/Button/Button'


import { PathContext } from '../../Provider/Provider'
import {useState,useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom"
import {PathStepsContext} from '../../Provider/CreatePathSteps/CreatePathSteps'

function CreateModulo () {
    const navigate = useNavigate();
    const {twoStep,setTwoStep,SetAPImodel} = useContext(PathStepsContext);



    const handlePermissionAPI = () => {
      SetAPImodel((prev) => ({
         ...prev,
         twoPathDTO: { ...prev.twoPathDTO, ...twoStep} 
      })); 
    }

    const setInfo = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
    
      setTwoStep((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const nextpage = () => {
      navigate('/createclass')

    }


   useEffect(() => {
      handlePermissionAPI();
    },[twoStep]);
    

  

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
                func={(e) => nextpage(e)}
                message={"Enviar"}
                class={"button"}
                />
              </div>
            </form>
           
        </main>

    )
}

export default CreateModulo