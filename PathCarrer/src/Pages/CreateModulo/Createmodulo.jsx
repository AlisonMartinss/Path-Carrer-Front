import styles from '../CreateModulo/Createmodulo.module.css'

import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import TXTinputM from '../../Components/TXTinputM/TXTinputM'
import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import Button from '../../Components/Button/Button'

import {useEffect, useContext} from 'react'
import {PathStepsContext} from '../../Provider/CreatePathSteps/CreatePathSteps'
import CabecalhoV2 from '../../Components/CabecalhoV2/CabecalhoV2'

function CreateModulo ({redirec,APIroute}) {
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
      if (APIroute !== null){
        APIroute();}
      else {redirec();}
    }


   useEffect(() => {
      handlePermissionAPI();
    },[twoStep]);
    

  

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <CabecalhoV2/>
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