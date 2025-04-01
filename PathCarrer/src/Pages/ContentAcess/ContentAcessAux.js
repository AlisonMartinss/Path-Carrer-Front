import httpClient from '../../APIs/PathCarrerAPI/PathCarrer';
import { LobyGet } from '../../Components/1he GlobalFunctions/GlobalFunctions';

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

export function UserPathOrder (PathID,authorPath,MyPathList){
    console.info("Definindo relação Path x User")
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