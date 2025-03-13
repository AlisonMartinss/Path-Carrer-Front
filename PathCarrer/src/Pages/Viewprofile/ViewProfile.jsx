import styles from '../Viewprofile/ViewProfile.module.css'
import httpClient from '../../APIs/PathCarrerAPI/PathCarrer';

// Componentes
import CabecalhoV2 from '../../Components/CabecalhoV2/CabecalhoV2'
import TXTinputM from '../../Components/TXTinputM/TXTinputM';
import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import Button from '../../Components/Button/Button';
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG';


// Hooks
import { useState } from 'react';
import { useNavigate } from 'react-router';

function ViewProfile (){
    const navigate = useNavigate;
    const [LobyInfo,SetLobyInfo] = useState(JSON.parse(localStorage.getItem("LobyInfo")));
    const [ProfileAt,SetProfileAt] = useState(
        {
            nickName:localStorage.getItem("UserName"),
            banner:"",
            perfil:"",
            desc:"",
            waring:"Não preencha os campos que você não pretende mudar"
        }
    )

    async function NewName(e) { // Função para atualizar nome do usuario
        if (e) {
            e.preventDefault(); 
        }
    
        try {
            const response = await httpClient.put(
                'User/NewName',
                { 
                    userName:localStorage.getItem("UserName"),
                    newUsername:ProfileAt.nickName
                },
                {   
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                        "Content-Type": "application/json" 
                    }
                }           
            )
            navigate('/login');
        } catch (err) {
            alert("Erro ao remover o Path.");
        }
    }

    async function PictureProfile(e) { // Função para foto e/ou banner de usuario
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
        } catch (err) {
            alert("Erro ao atualizar fotos.");
        }
    }

    async function UpdateDesc(e) { // Função para atualizar nome do usuario
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
        } catch (err) {
            alert("Erro ao atualizar fotos.");
        }
    }


    const setObjectClass = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
    
        SetProfileAt((prevState) => ({
          ...prevState,
          [name]: value
        }));
    };
    return (
        <main className={styles.main}>
            <div className={styles.head}>
                <CabecalhoV2/>
            </div>
            <div className={styles.core}>
                <div className={styles.sideBar}></div>
                <div className={styles.profile}>
                    <div className={styles.profile_area}>
                        <div className={styles.bannerArea}>
                            <img className={styles.img} src={ProfileAt.banner !== "" ? (ProfileAt.banner): ProfileAt.banner === "" && LobyInfo.BannerProfile !== "" ? (LobyInfo.BannerProfile) : "https://preview.redd.it/tymdy6hjlyxb1.png?auto=webp&s=6e4a7eb5ead8f730e487938ad26a530b155ee6a6"} alt="Capa do perfil do usuario" />
                        </div>
                        <div className={styles.perfilArea}>
                            <img className={styles.img} src={ProfileAt.perfil !== "" ? (ProfileAt.perfil): ProfileAt.perfil === "" && LobyInfo.PictureProfile !== "" ? (LobyInfo.PictureProfile) : "https://maquinadoinfinito.wordpress.com/wp-content/uploads/2014/04/baa8e-tumblr_lxltgcr5pr1qak4c2o1_500_large.gif?w=500&h=269"} alt="Foto do perfil do usuario" />
                        </div>
                        <div className={`${styles.bottomArea} ${styles.txtover}`}>{ProfileAt.nickName !== "" ? (ProfileAt.nickName): localStorage.getItem("UserName")} </div>
                    </div>

                    <div className={`${styles.aviso} ${styles.txtover2}`}>{ProfileAt.waring}</div>

                    <div className={styles.inputName_area}>                       
                        <div className={styles.inputName}>
                            <TXTinputP
                            name={"nickName"}
                            onChange={(e) => setObjectClass(e)}
                            placeholder={"Digite aqui o novo nome de usuario"}/>
                        </div>

                        <div className={styles.actionButton}>
                            <ButtonIMG
                            iconV={"RxPencil2"}
                            icon_style={"evenConstStyle"}
                            title={"Atualizar nick name"}
                            handleClick={(e) => NewName()}
                            />
                        </div>
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
                            handleClick={(e) => PictureProfile()}
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
                            handleClick={(e) => PictureProfile()}
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
                        func={(e) => UpdateDesc()}
                        class={"button"}
                        message={"Atualizar Descrição"}/>
                    </div>
                    
                </div>

            </div>
           
        </main>
    )
}

export default ViewProfile