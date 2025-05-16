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
        } catch (error) {
            if (error.response) {
                const serverMessage = error.response.data?.erro;
                
                if (serverMessage === "Token inválido ou expirado") {
                  console.error("Sessão expirada. Faça login novamente !");
                  alert("Sessão expirada. Faça login novamente !");
                  window.location.href = '/login'
                  return null;
                }
            }
            console.error("Erro tentar adicionar nota")
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
        } catch (error) {
            if (error.response) {
                const serverMessage = error.response.data?.erro;
                
                if (serverMessage === "Token inválido ou expirado") {
                  console.error("Sessão expirada. Faça login novamente !");
                  alert("Sessão expirada. Faça login novamente !");
                  window.location.href = '/login'
                  return null;
                }
            }
            console.error("Erro ao tentar remover note")}
            return "Erro Deletar Nota."      
}