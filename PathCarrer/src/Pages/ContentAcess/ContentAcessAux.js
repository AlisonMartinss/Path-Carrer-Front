import httpClient from '../../APIs/PathCarrerAPI/PathCarrer';
import { LobyGet } from '../../Components/1he GlobalFunctions/GlobalFunctions';

export async function GetContentByPath() {
    try {
        const response = await httpClient.get(
          `User/GetPath?PathID=${localStorage.getItem("PathID_on")}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Token")}`,
              "Content-Type": "application/json",
            },
          }
        );
    
        return response.data;
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
        console.error("Erro na requisição");
        alert("Erro da chamada GetContent");
      }
    
}

export async function AddPath() {
    try {
        const response = await httpClient.post(
            'User/AddPathID',
            {           
                userName:localStorage.getItem("UserName"),
                PathID:localStorage.getItem("PathID_on")
            },
            {   
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`, 
                    "Content-Type": "application/json"
                }
            }           
        );
    } catch (err) {
        alert("Erro ao adicionar Path.");
    }
}


export async function RemovePath() {

    try {
        const response = await httpClient.put(
            'User/RemovePath',
            { 
                userName:localStorage.getItem("UserName"),
                PathID:localStorage.getItem("PathID_on")
            },
            {   
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    "Content-Type": "application/json" 
                }
            }           
        );
    } catch (err) {
        alert("Erro ao remover o Path.");
    }
}

export async function PathDelete() {
    try {
        const response = await httpClient.post('CRUD/PathDelete',
          {
            PathID:localStorage.getItem("PathID_on")
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Token")}`,
              "Content-Type": "application/json",
            },
          }
        )
      }catch (error){
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
        alert ("Erro em remover Path")
      }  
}

export function UserPathOrder (PathID,authorPath,MyPathList){
    if (localStorage.getItem("UserName") === authorPath){
        return 2
    }
    else  {
        console.log("MyPathList");
        console.log(MyPathList);

        let x =  MyPathList.findIndex(element => element === PathID)

        if (x !== -1 ){
            return 1
        }
        else {
            return 0
        } 
    }

}