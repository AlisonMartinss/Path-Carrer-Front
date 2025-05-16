import styles from '../Viewprofile/ViewProfile.module.css'
import httpClient from '../../APIs/PathCarrerAPI/PathCarrer';

// Componentes
import CabecalhoV2 from '../../Components/CabecalhoV2/CabecalhoV2'
import TXTinputM from '../../Components/TXTinputM/TXTinputM';
import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import Button from '../../Components/Button/Button';
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG';
import { AiFillProfile } from "react-icons/ai";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { PiSwapDuotone } from "react-icons/pi";
import { HiOutlineTrash } from "react-icons/hi2";

//import img from '../../../src/assets/Midias/SVGs/Logo.svg'

// ==== Arquivos nescessarios ==== //

import { LobyGet } from '../../Components/1he GlobalFunctions/GlobalFunctions';


//==== AUX ==== //

import { verify } from '../Login/LoginAux';


// Hooks
import { useState } from 'react';
import { useNavigate } from 'react-router';

function ViewProfile (){
    const navigate = useNavigate();
    const [option,SetOption] = useState(true)
    const [waring,SetWaring] = useState({ message:"",active:false,messageByDelete:""})
    const [newPassword,SetnewPassword] = useState({password:"",newPassword:"",CurrentPassword:"",CurrentPasswordDelete:""})
    const [LobyInfo,SetLobyInfo] = useState(JSON.parse(localStorage.getItem("LobyInfo")));
    const [ProfileAt,SetProfileAt] = useState(
        {
            nickName:localStorage.getItem("UserName"),
            banner:JSON.parse(localStorage.getItem("LobyInfo")).BannerProfile,
            perfil:JSON.parse(localStorage.getItem("LobyInfo")).PictureProfile,
            desc:"",
            waring:"Certifique-se que o link das imagens tem dominio aberto(publico) e não é de uso circustancial indevido."
        }
    )

    async function NewName(e) { 
        if (e) {
            e.preventDefault(); 
        }
        try {
            const response = await httpClient.put(
                'User/NewName',
                { 
                    userName: localStorage.getItem("UserName"),
                    newUsername: ProfileAt.nickName
                },
                {   
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                        "Content-Type": "application/json" 
                    }
                }           
            );
            
            localStorage.setItem("UserName", ProfileAt.nickName);
            alert("Faça login novamente");
            setTimeout(() => navigate('/Login'), 500);
    
        } catch (error) {
            if (error.response) {
                const serverMessage = error.response.data?.erro;
                
                if (serverMessage === "Token inválido ou expirado") {
                  alert(serverMessage)
                  console.error("Sessão expirada. Faça login novamente !" + serverMessage);
                  alert("Sessão expirada. Faça login novamente !");
                  window.location.href = '/login'
                  return;
                }
              }
            const serverMessage = error.response.data?.erro;

            if (error.response) {
                
                if (serverMessage === "Token inválido ou expirado") {
                  console.error("Sessão expirada. Faça login novamente !" + serverMessage);
                  alert("Sessão expirada. Faça login novamente !");
                  window.location.href = '/login'
                  return null;
                }

                else if (
                    error.response.data.erro?.trim().toLowerCase() === 
                    "nome de usuario nao disponivel"
                  ) {
                      alert("Nome de Usuario não disponivel !");
                      return null;
                }
            }

            alert("Erro ao criar novo Nome.");
        }
    }
    
    async function PictureProfile(e) {
        if (e) {
            e.preventDefault(); 
        }
    
        try {
            const response = await httpClient.put(
                'User/UpdatePictureProfile',
                { 
                    userName:localStorage.getItem("UserName"),
                    PictureProfile:ProfileAt.perfil,
                    BannerProfile:ProfileAt.banner
                },
                {   
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                        "Content-Type": "application/json" 
                    }
                }           
            );
            GetLobyON();
        } catch (error) {
            if (error.response) {
                const serverMessage = error.response.data?.erro;
                
                if (serverMessage === "Token inválido ou expirado") {
                  console.error("Sessão expirada. Faça login novamente !" + serverMessage);
                  alert("Sessão expirada. Faça login novamente !");
                  window.location.href = '/login'
                  return null;
                }
              }
            alert("Erro ao atualizar fotos.");
        }
    }

    async function UpdateDesc(e) { // Função para atualizar descrição
        if (e) {
            e.preventDefault(); 
        }
    
        try {
            const response = await httpClient.put(
                'User/UpdateDesc',
                { 
                    userName:localStorage.getItem("UserName"),
                    desc:ProfileAt.desc
                },
                {   
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                        "Content-Type": "application/json" 
                    }
                }           
            );
            GetLobyON();
        } catch (error){
            if (error.response) {
                const serverMessage = error.response.data?.erro;
                
                if (serverMessage === "Token inválido ou expirado") {
                  console.error("Sessão expirada. Faça login novamente !" + serverMessage);
                  alert("Sessão expirada. Faça login novamente !");
                  window.location.href = '/login'
                  return null;
                }
              }
            alert("Erro ao atualizar fotos.");
        }
    }

    async function NewPassword(e) { // Função para atualizar senha do usuario
        if (e) {
            e.preventDefault(); 
        }
    
        try {
            const response = await httpClient.put(
                'User/NewPassword',
                { 
                    userName:localStorage.getItem("UserName"),
                    curretPassword:newPassword.CurrentPassword,
                    newPassWord:newPassword.newPassword
                },
                {   
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                        "Content-Type": "application/json" 
                    }
                }           
            );
            
        } catch (error){
            if (error.response) {
                const serverMessage = error.response.data?.erro;
                
                if (serverMessage === "Token inválido ou expirado") {
                  console.error("Sessão expirada. Faça login novamente !" + serverMessage);
                  alert("Sessão expirada. Faça login novamente !");
                  window.location.href = '/login'
                  return null;
                }
                else if (
                        error.response.data.erro === 
                        "As senhas que deveriam ser iguais não são."
                ) {
                          alert("Você digitou errado sua senha atual.");
                          return null;
                }

                console.log(error.response.data.erro)
            }
            
            alert("Erro ao atualizar senha.");
        }
    }

    async function DeleteProfile(e) { // Função deletar conta usuario
        try {
            const response = await httpClient.post(
                'User/DeleteProfile',
                { 
                    userName:localStorage.getItem("UserName"),
                    curretPassword:newPassword.CurrentPasswordDelete
                },
                {   
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                        "Content-Type": "application/json" 
                    }
                }           
            );
            localStorage.clear();
            navigate('/')
        } catch (error) {
            if (error.response) {
                const serverMessage = error.response.data?.erro;
                
                if (serverMessage === "Token inválido ou expirado") {
                  console.error("Sessão expirada. Faça login novamente !" + serverMessage);
                  alert("Sessão expirada. Faça login novamente !");
                  window.location.href = '/login'
                  return null;
                }
                else if (
                    error.response.data.erro === 
                    "DeleteProfile - Senha incorreta !"
            )   {
                      SetWaring((prev) => ({...prev,messageByDelete:"Senha incorreta !"}))
                      return null;
                }
            }
            alert("Erro ao deletar conta.");
        }
    }

    async function GetLobyON() {
        try {
            const dados = await LobyGet();
            if (!dados) {
            console.log("Erro ao buscar informações do Loby.");
            }
        }
        catch (error){
            if (error.response) {
                const serverMessage = error.response.data?.erro;
                
                if (serverMessage === "Token inválido ou expirado") {
                  alert(serverMessage)
                  console.error("Sessão expirada. Faça login novamente !" + serverMessage);
                  alert("Sessão expirada. Faça login novamente !");
                  window.location.href = '/login'
                  return;
                }
              }
        }
    }

    const setObjectClass = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        if (name === "password" || name === "newPassword" || name === "CurrentPassword" || name === "CurrentPasswordDelete"){
            SetnewPassword((prevState) => (
              {
                ...prevState,
                [name]:value
              }
            ))
        }

        else if (name === "banner"){
            SetProfileAt((prev) => ({...prev,banner:value}))
        }

         else if (name === "perfil"){
            SetProfileAt((prev) => ({...prev,perfil:value}))
        }

        else if (name === "nickName"){
        const result = verify(value);
        if (result === 3){
            SetProfileAt((prevState) => ({
                ...prevState,
                [name]: value
            }));
            SetWaring((prev) => ({...prev,active:false}))

          }
          else if (result === 0) {
                SetWaring(({active:true,message:"Insira um nome de usuario sem usar espaços! ex: usuario_numero1."}))
          }
          else if (result === 1){
                SetWaring(({active:true,message:"Numero de caracteres minimos: 10."}))
          }
        }
    
        
    };

    const SelectOption = (event) => {
        event.preventDefault();
    
        const name = event.target.dataset.name;
        if (option === true && name === "EPerfil"){
        }
        else {
            SetOption((prev) => !prev)
        }
    }

    return (
        <main className={styles.main}>
            <div className={styles.head}>
                <CabecalhoV2/>
            </div>
            <div className={styles.core}>               
                <div className={styles.pseudoSideBar}>
                    <div data-name="EPerfil" onClick={(e) => SelectOption(e)} className={`${styles.operacao} ${styles.pos1} ${styles.txtover3}`}>
                        <AiFillProfile/>
                        Editar perfil
                    </div>
                    <div data-name="InfoSensiveis" onClick={(e) => SelectOption(e)} className={`${styles.operacao} ${styles.pos2} ${styles.txtover3}`}>
                        <TbAlertTriangleFilled/>
                        Editar Informações sensiveis
                    </div>    
                </div>                                 
                <div className={styles.profile}>

                {option === true ? (
                    <div className={styles.ProfileEdit}>

                        <div className={styles.profile_area}>
                            <div className={styles.bannerArea}>
                                
                                <img className={styles.img}  src={ProfileAt.banner !== null && ProfileAt.banner !== undefined && ProfileAt.banner !== "" ? (
                                    ProfileAt.banner
                                ):"../../../src/assets/Midias/PNGs/images/BannerDefault.png"} alt="Foto do Banner" />
                            </div>
                            <div className={styles.perfilArea}>
                                <img className={styles.img} src={ProfileAt.perfil !== null && ProfileAt.perfil !== undefined && ProfileAt.perfil !== ""  ? ProfileAt.perfil : 
                                "../../../src/assets/Midias/PNGs/images/DefaultProfile.png"} alt="Perfil Foto" />
                            </div>
                            <div className={`${styles.bottomArea} ${styles.txtover}`}>{ProfileAt.nickName !== "" ? (ProfileAt.nickName): localStorage.getItem("UserName")} </div>
                        </div>

                        <div className={`${styles.aviso} ${styles.txtover2}`}>{ProfileAt.waring}</div>
                        {waring.active === true ? (
                            <div className={styles.waringLite}>{waring.message}</div>
                        ):null}
                        
                        <div className={styles.inputName_area}>                       
                            <div className={styles.inputName}>
                                <TXTinputP
                                name={"nickName"}
                                onChange={(e) => setObjectClass(e)}
                                placeholder={"Digite aqui o novo nome de usuario"}
                                maxLengthX={"15"}/>
                            </div>

                            {waring.active === false ? (
                                 <div className={styles.actionButton}>
                                    <ButtonIMG
                                    iconV={"RxPencil2"}
                                    icon_style={"evenConstStyle"}
                                    title={"Atualizar nick name"}
                                    handleClick={(e) => NewName(e)}
                                    />
                                </div>
                            ):null}

                           
                        </div>

                        <div className={styles.inputName_area}>                       
                            <div className={styles.inputName}>
                                <TXTinputP
                                name={"banner"}
                                onChange={(e) => setObjectClass(e)}
                                placeholder={"Digite o link do novo banner"}/>
                            </div>

                            <div className={styles.actionButton}>
                                <ButtonIMG
                                iconV={"RxPencil2"}
                                icon_style={"evenConstStyle"}
                                title={"Atualizar Banner"}
                                handleClick={(e) => PictureProfile(e)}
                                />
                            </div>
                        </div>

                        <div className={styles.inputName_area}>                       
                            <div className={styles.inputName}>
                                <TXTinputP
                                name={"perfil"}
                                onChange={(e) => setObjectClass(e)}
                                placeholder={"Cole aqui o link da nova foto de perfil"}/>
                            </div>

                            <div className={styles.actionButton}>
                                <ButtonIMG
                                iconV={"RxPencil2"}
                                icon_style={"evenConstStyle"}
                                title={"Atualizar foto de perfil"}
                                handleClick={(e) => PictureProfile(e)}
                                />
                            </div>
                        </div>

                        <div className={styles.inputDesc}>
                            <TXTinputM
                            name={"desc"}
                            onChange={(e) => setObjectClass(e)}
                            placeholder={"Digite aqui sua nova descrição"}/>
                            
                        </div>

                        <div className={styles.button}>
                            <Button
                            func={(e) => UpdateDesc(e)}
                            class={"button"}
                            message={"Atualizar Descrição"}/>
                        </div>
                    </div>               
                ):
                 <div className={styles.sensive}>
                    <div className={`${styles.newPassword} ${styles.noticeBoard} ${styles.txtover}`}>
                      <PiSwapDuotone/>
                      Trocar senha 
                    </div>
                    <div className={styles.passworldArea}>
                        <div className={styles.password}>
                            <TXTinputP
                            name={"CurrentPassword"}
                            placeholder={"Digite sua senha atual"}
                            type={"password"}
                            onChange={(e) => setObjectClass(e)}/>
                        </div>

                        <div className={styles.password}>
                            <TXTinputP
                            name={"password"}
                            placeholder={"Digite sua nova senha"}
                            type={"password"}
                            onChange={(e) => setObjectClass(e)}/>
                        </div>

                        <div className={styles.password}>
                            <TXTinputP
                            name={"newPassword"}
                            placeholder={"Digite sua nova senha novamente"}
                            type={"password"}
                            onChange={(e) => setObjectClass(e)}/>
                        </div>

                        {newPassword.password !== newPassword.newPassword ||
                         newPassword.newPassword == (null || "")  ||
                         newPassword.CurrentPassword == (null || "")?(
                          <div className={`${styles.waring} ${styles.txtover2}`}> O que foi digitado é inconsistente com o que se espera. </div>)
                        :
                        <div className={styles.buttonPassword}>
                          <Button
                          func={(e) => NewPassword(e)}
                          class={"button"}
                          message={"Atualizar"}/>
                        </div>
                        
                        }
                    </div>

                    <div className={`${styles.deleteProfile}  ${styles.noticeBoard} ${styles.txtover}`}>
                      <HiOutlineTrash/>
                       Excluir conta 
                    </div>

                    <div className={styles.deleteArea}>
                        <div className={styles.password}>
                            <TXTinputP
                            name={"CurrentPasswordDelete"}
                            placeholder={"Digite sua senha atual"}
                            type={"password"}
                            onChange={(e) => setObjectClass(e)}/>
                        </div>
                        {newPassword.CurrentPasswordDelete == (null || "") ? 
                        (<div className={`${styles.waring} ${styles.txtover2}`}> O que foi digitado é inconsistente com o que se espera. </div>):
                        <div onClick={(e) => DeleteProfile(e)} className={`${styles.deleteAreaButton} ${styles.txtover2}`}>
                            <TbAlertTriangleFilled/>
                            Deletar Conta
                        </div>}
                        {(waring.messageByDelete !== null && waring.messageByDelete !== undefined && waring.messageByDelete !== "") ? (
                            <div className={`${styles.waringLite} ${styles.waringPasswordLocation}`}>{waring.messageByDelete}</div>
                        ):null}
                        
                    </div>

                    
                    
                 </div>
                
                }    
                    
                </div>

            </div>
           
        </main>
    )
}

export default ViewProfile