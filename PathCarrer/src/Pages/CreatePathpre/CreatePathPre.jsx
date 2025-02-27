import CreatePath from "../CreatePath/Createpath"
import styles from '../CreatePathpre/CreatePathPre.module.css'

import {useNavigate } from "react-router-dom"

function CreatePathPre (){
    /* 
        Quando um usuario for criar seu Path, a etapa 01 passa por aqui.
    */
    const navigate = useNavigate(); 

    const PreSend = (e) => {
          navigate('/createmodulo')         
    }

    return (
        <main className={styles.main}>
            <CreatePath
            PreSend={(e) => PreSend(e)}
            />
        </main>
    )
}

export default CreatePathPre