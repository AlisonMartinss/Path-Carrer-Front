import styles from '../UpdatePath/UpdatePath.module.css'
import CreatePath from "../CreatePath/Createpath";

import {useState,useEffect, useContext} from 'react'
import {PathStepsContext} from '../../Provider/CreatePathSteps/CreatePathSteps'

function UpdatePath () {
    const enviarDestino = '/'
    const {oneStap} = useContext(PathStepsContext);

    return (
        <main className={styles.main}>
            <CreatePath
            enviarDestino={enviarDestino}
            PreSend={(e) => alert("PIPOCA COM SAL")}/>
        </main>
    )
} 

export default UpdatePath