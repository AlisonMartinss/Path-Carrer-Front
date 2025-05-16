import styles from '../Login/Login.module.css'

/* ==== Componentes ==== */

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import Button from '../../Components/Button/Button'
import TXTinputP from '../../Components/TXTinputP/TXTinputP'

/* ==== Hooks ==== */
import { useEffect, useState } from 'react'
import httpClient from '../../APIs/PathCarrerAPI/PathCarrer'
import { useNavigate } from 'react-router'

/* ==== Icons ==== */

import { IoIosCheckmarkCircle } from "react-icons/io";

/* ==== AUX ==== */

import { verify } from './LoginAux'

function Login (){
    const navigate = useNavigate(); 

    const [waringMessage,SetWarringMessage] = useState(null)


    const [user,SetUser] = useState( // Estrutura usada no login
        {
            userName:"",
            password:"",
            NewuserName:"",
            passwordToNew:"",
            confirmPassword:""

        }
    );

    async function LoginFunction (userNameX,PasswordY) {
        try {
          const response = await httpClient.post('Login',
            {
                userName:userNameX,
                password:PasswordY
            })

          const token = response.data.Token;
          localStorage.clear();
          localStorage.setItem("Token",token)
          localStorage.setItem("UserName",userNameX)
          navigate('/loby');
        }catch (error){
            SetWarringMessage(error.response.data.erro)
            
        }
    }

    async function CreateAccount(NewuserName, NewPassword) {
        console.log(NewuserName);
        console.log(NewPassword);
      
        try {
          const response = await httpClient.post('Login/NewUser', {
            userName: NewuserName,
            password: NewPassword,
          });
      

          await LoginFunction(NewuserName, NewPassword);

        } catch (error) {
          SetWarringMessage(error.response.data.erro);
        }
      }

    async function createNewUser () {
        if (user.passwordToNew === user.confirmPassword) {
            try{
             await CreateAccount (user.NewuserName,user.confirmPassword);
            }catch (error) {
                console.log(error)
            }
        }
    }
    
    const setInfo = (e) => {
        const { name, value } = e.target;
        console.log(name)
        if(((name === "userName") || (name === "NewuserName") )&& (verify(value) === 3)){
            SetUser((prevState) => ({
                ...prevState,
                [name]: value
            }));
            SetWarringMessage(true)
        }
        else if (((name === "userName")  || (name === "NewuserName")) && (verify(value) === 0)) {
            
            SetWarringMessage("Insira um nome de usuario sem usar espaços! ex: usuario_numero1")
        }
        else if (((name === "userName")  || (name === "NewuserName")) && (verify(value) === 1)){
            SetWarringMessage("Numero de caracteres minimos: 10.")
        }
        else if (name === "password") {
            SetUser((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    }
        

    useEffect(() => {
        if (user.passwordToNew !== user.confirmPassword && user.passwordToNew !== ""){
            SetWarringMessage("Senhas diferentes !")
        }
        else (
            SetWarringMessage(true)
        )
    },[user.confirmPassword,user.passwordToNew])

    return (
        <main className={styles.main}>
            <div className={styles.cabecalho}>
                <CabecalhoPadrao/>
            </div>
            <div className={styles.core}>
                {waringMessage !== true ? (<div className={`${styles.waring} ${styles.txtOver_a}`}>{waringMessage}</div>):null}
                {localStorage.getItem("CreateAccount") === "false" ? (
                <div className={styles.loginArea}>
                    
                    <div className={styles.loginArea_title}>Login</div>
                    <div className={styles.UserArea}>
                        <TXTinputP
                        name={"userName"}
                        type={"text"}
                        placeholder={"Digite seu usuario"}
                        maxLengthX={"15"}
                        onChange={(e) => setInfo(e)}/>
                        
                    </div>

                    <div className={styles.UserArea}>
                        <TXTinputP
                        name={"password"}
                        type={"password"}
                        placeholder={"Digite sua senha"}
                        maxLengthX={"20"}
                        onChange={(e) => setInfo(e)}/>
                    </div>

                    <div className={styles.Button}>
                        <Button
                            func={(e) => LoginFunction(user.userName,user.password)}
                            class={"darkBlue"}
                            message={"Entrar"}
                        />
                    </div>

                    <div className={styles.othersLoginOptions}>
                        <div className={styles.othersLoginOptions_a} onClick={() => {localStorage.setItem("CreateAccount",true),window.location.reload();}} >Crie sua conta</div>
                    </div>
                </div>
                ):
                (
                <div className={styles.loginArea}>
                    <div className={styles.loginArea_title}>Cadastro</div>
                    <div className={styles.UserArea}>
                        <TXTinputP
                        name={"NewuserName"}
                        type={"text"}
                        placeholder={"Digite o nome do seu usuario"}
                        maxLengthX={"15"}
                        onChange={(e) => setInfo(e)}/>
                        
                    </div>

                    <div className={styles.UserArea}>
                       <div className={styles.inputPasswordArea}>
                            <TXTinputP
                            name={"passwordToNew"}
                            type={"password"}
                            placeholder={"Digite sua senha"}
                            maxLengthX={"20"}
                            onChange={(e) => SetUser((prev) => ({...prev,passwordToNew:e.target.value}))}/>
                        </div>
                        {user.passwordToNew !== ""? (
                          <div className={styles.iconVerifyArea}>
                            <IoIosCheckmarkCircle
                            className={styles.icon}/>
                          </div>
                        ):null}
                    </div>
                
                    <div className={styles.UserArea}>
                        <div className={styles.inputPasswordArea}>
                            <TXTinputP
                            name={"confirmPassword"}
                            type={"password"}
                            placeholder={"Confirme sua senha"}
                            maxLengthX={"20"}
                            onChange={(e) => SetUser((prev) => ({...prev,confirmPassword:e.target.value}))}/>
                        </div>
                        {waringMessage === true && user.confirmPassword !== ""? (
                          <div className={styles.iconVerifyArea}>
                            <IoIosCheckmarkCircle
                            className={styles.icon}/>
                          </div>
                        ):null}
                        
                     
                    </div>
          

                    <div className={styles.Button_setB}>
                        <Button
                            func={(e) => createNewUser(e)}
                            class={"darkBlue"}
                            message={"Criar Conta"}
                        />
                    </div>

                    <div className={styles.othersLoginOptions_a} onClick={() => {SetWarringMessage(null),localStorage.setItem("CreateAccount",false)}} >Já possui uma conta? faça Login!</div>

                </div>
                )}
                
                

            </div>

        </main>
    )
}

export default Login