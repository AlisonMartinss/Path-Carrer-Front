import httpClient from '../../APIs/PathCarrerAPI/PathCarrer';

export async function AddNote(Note) {
    if (Note.length >= 5){
        try {
            const response = await httpClient.post(
                'User/AddNote',
                {           
                    UserName:localStorage.getItem("UserName"),
                    message:Note
                },
                {   
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`, 
                        "Content-Type": "application/json"
                    }
                }           
            );
        } catch (erro) {
            console.error ("Erro ao adicionar Nota.");
            return "Erro ao adicionar Nota."
        }
    }
    else {
        return "Erro ao adicionar Nota. Modelo de nota não aceitavel. "
    }
}

export async function RemoveNote(key) {
        try {
            const response = await httpClient.post(
                'User/RemoveNote',
                {           
                    UserName:localStorage.getItem("UserName"),
                    key:key
                },
                {   
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`, 
                        "Content-Type": "application/json"
                    }
                }           
            );
        } catch (erro) {
            console.error ("Erro Deletar Nota.");
            return "Erro Deletar Nota."
        }  
}