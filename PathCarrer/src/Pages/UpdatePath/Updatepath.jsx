import styles from '../UpdatePath/UpdatePath.module.css'
import CreatePath from "../CreatePath/Createpath";

import {useContext} from 'react'
import {PathStepsContext} from '../../Provider/CreatePathSteps/CreatePathSteps'
import {useNavigate } from "react-router-dom"
import httpClient from '../../APIs/PathCarrerAPI/PathCarrer';

function UpdatePath () {
    
    const navigate = useNavigate(); 
    const {oneStap} = useContext(PathStepsContext);

    async function PreSend (e) {
      try {
        const response = await httpClient.put('PathUpdate',
        {
         id:"67bd255d2970aa4c4aaea088",   
         onePathDTO: 
         {
            title:oneStap.title,
            category:oneStap.category,
            descPathOver:oneStap.descPathOver,
            tags:oneStap.tags,
            adjetives:oneStap.adjectives
         }
        })
        alert("Path atualizado")
        navigate('/')
        }catch (err){
          alert ("Erro")
          console.log(err)
        }
      }


    return (
        <main className={styles.main}>
          <CreatePath
           PreSend={(e) => PreSend(e)}
          />
        </main>
    )
} 

export default UpdatePath