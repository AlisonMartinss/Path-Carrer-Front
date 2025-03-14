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
        const response = await httpClient.put('CRUD/PathUpdate',
            {
            PathID:localStorage.getItem("PathID_on"),   
            onePathDTO: 
            {
                title:oneStap.title,
                category:oneStap.category,
                descPathOver:oneStap.descPathOver,
                banner:oneStap.banner,
                tags:oneStap.tags,
                adjetives:oneStap.adjectives
            }
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("Token")}`,
                "Content-Type": "application/json",
              },
            }
        )
        alert("Path atualizado")
        navigate('/loby')
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