import styles from '../Login/Login.module.css'

/* ==== Componentes ==== */

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import Button from '../../Components/Button/Button'
import TXTinputP from '../../Components/TXTinputP/TXTinputP'

/* ==== Hooks ==== */
import { useEffect, useState } from 'react'
import httpClient from '../../APIs/PathCarrerAPI/PathCarrer'
import { useNavigate } from 'react-router'

function Login (){
    const navigate = useNavigate(); 
    const [user,SetUser] = useState(
        {
            userName:"",
            password:""
        }
    );

    async function UpdateModulo (e) {
        e.preventDefault()
        try {
          const response = await httpClient.post('Login',
            {
                userName:user.userName,
                password:user.password
            })

          alert("Login");
          const token = response.data.Token;
          localStorage.setItem("Token",token)
          localStorage.setItem("UserName",user.userName)
          navigate('/loby');
        }catch (err){
          alert("User: " + user.userName)
          alert("password: " + user.password)
          alert ("Erro")
          console.log(err)
        }
    }
    

    const setInfo = (e) => {
        const { name, value } = e.target;
        SetUser((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    useEffect(() => 
        {
            console.log("UserName: "+ user.userName)
        },[user])



    return (
        <main className={styles.main}>
            <div className={styles.cabecalho}>
                <CabecalhoPadrao/>
            </div>
            <div className={styles.core}>
                <div className={styles.loginArea}>
                    <div className={styles.UserArea}>
                        <TXTinputP
                        name={"userName"}
                        type={"text"}
                        placeholder={"Digite seu usuario"}
                        onChange={(e) => setInfo(e)}/>
                        
                    </div>

                    <div className={styles.UserArea}>
                        <TXTinputP
                        name={"password"}
                        type={"password"}
                        placeholder={"Digite sua senha"}
                        onChange={(e) => setInfo(e)}/>
                    </div>

                    <div className={styles.Button}>
                        <Button
                        func={(e) => UpdateModulo(e)}
                        class={"button"}
                        message={"Entrar"}
                        />
                    </div>

                    <div>

                    </div>
            
                </div>
                

            </div>

        </main>
    )
}

export default Login