import styles from '../Login/Login.module.css'

/* ==== Componentes ==== */

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import Button from '../../Components/Button/Button'
import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import LoadIcon from '../../Components/LoadIcon/LoadIcon'

/* ==== Hooks ==== */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

/* ==== Icons ==== */

import { IoIosCheckmarkCircle } from "react-icons/io";

/* ==== AUX ==== */

import { verify,CreateNewAccount,LoginCall} from './LoginAux'

function Login (){
    const navigate = useNavigate(); 
    const [AuxStates,SetAuxStates] = useState(
        {
           waringMessage:null,
           isLoad:false 
        }
    )


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
          SetAuxStates((prev) => ({...prev,isLoad:true}))
          await LoginCall(userNameX,PasswordY);
          localStorage.setItem("UserName",userNameX)
          navigate('/loby');
        }catch (error){
            SetAuxStates((prev => ({...prev,waringMessage:error.response.data.erro})))       
        }
        finally {
             SetAuxStates((prev => ({...prev,isLoad:false})))   
        }
    }

    async function createNewUser () {
        if (user.passwordToNew === user.confirmPassword) {
            try{
             SetAuxStates((prev) => ({...prev,isLoad:true}))
             await CreateNewAccount (user.NewuserName,user.confirmPassword);
             await LoginFunction(user.NewuserName,user.confirmPassword)
            }catch (error) {
                SetAuxStates((prev => ({...prev,waringMessage:error.response.data.erro}))) 
            }finally{
                SetAuxStates((prev => ({...prev,isLoad:false}))) 
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
            SetAuxStates((prev => ({...prev,waringMessage:true})))
        }
        else if (((name === "userName")  || (name === "NewuserName")) && (verify(value) === 0)) {
            
            SetAuxStates((prev => ({...prev,waringMessage:"Insira um nome de usuario sem usar espaços! ex: usuario_numero1"})))
        }
        else if (((name === "userName")  || (name === "NewuserName")) && (verify(value) === 1)){
            SetAuxStates((prev => ({...prev,waringMessage:"Numero de caracteres minimos: 10."})))
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
            SetAuxStates((prev) => ({...prev,waringMessage:"Senhas diferentes !"}))
        }
        else (
            SetAuxStates((prev) => ({...prev,waringMessage:true}))
        )
    },[user.confirmPassword,user.passwordToNew])

    return (
        <main className={styles.main}>
            <div className={styles.cabecalho}>
                <CabecalhoPadrao/>
            </div>
            <div className={styles.core}>
                {AuxStates.waringMessage !== true ? (<div className={`${styles.waring} ${styles.txtOver_a}`}>{AuxStates.waringMessage}</div>):null}
                {AuxStates.isLoad === true ? (
                    <div className={styles.LoadArea}>
                        <LoadIcon
                        msg={"Carregando . . ."}/>
                    </div>
                ): localStorage.getItem("CreateAccount") === "false" ? (
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
                ): localStorage.getItem("CreateAccount") === "true" ? (
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
                        {AuxStates.waringMessage === true && user.confirmPassword !== ""? (
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

                    <div className={styles.othersLoginOptions_a} onClick={() => {SetAuxStates((prev) => ({...prev,waringMessage:null})),localStorage.setItem("CreateAccount",false)}} >Já possui uma conta? faça Login!</div>

                </div>
                )):
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
                </div>}
                
                

            </div>

        </main>
    )
}

export default Login