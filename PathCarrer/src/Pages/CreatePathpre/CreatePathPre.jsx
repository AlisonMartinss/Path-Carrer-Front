import CreatePath from "../CreatePath/Createpath"
import styles from '../CreatePathpre/CreatePathPre.module.css'

import {useNavigate } from "react-router-dom"

function CreatePathPre (){
    /* 
        Criei esse componente, pq 'CreatePath' é usado em mais de 1 circustancia. Aqui é a step one do path
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