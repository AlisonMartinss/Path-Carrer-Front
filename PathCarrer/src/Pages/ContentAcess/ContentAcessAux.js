import httpClient from '../../APIs/PathCarrerAPI/PathCarrer';

export async function AddPath(e) {
    if (e) {
        e.preventDefault();
    }

    try {
        const response = await httpClient.post(
            'User/AddPath',
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


export async function RemovePath(e) {
    if (e) {
        e.preventDefault(); 
    }

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