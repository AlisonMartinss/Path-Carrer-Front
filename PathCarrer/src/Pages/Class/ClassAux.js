import httpClient from '../../APIs/PathCarrerAPI/PathCarrer';

/**
 * Motivação: Centralizar chamadas usadas no componente 'Class', e também suas funções fundamentais.
 * 
 * Chamadas - API:
 * 
 * - DeleteClassUnicAPI: Deleta a unica aula atual.
 * - DeleteModule: Deleta o modulo atual.
 * 
 * Funções proprias:
 * 
 * - ClassSelect: Uma vez que clicado em determinada aula, essa função delega 
 *   aos estados os atributos nescessarios para ver a aula.
 * 
 */



export async function DeleteClassUnicAPI(e) {
    if (e) {
        e.preventDefault(); 
    }

    try {
        const response = await httpClient.put(
            'CRUD/DeleteClassUnic',
            { 
                id: localStorage.getItem("PathID_on"),
                indexModule: localStorage.getItem("ModuleIndexON"),
                indexClass: localStorage.getItem("ClassIndex"),
            },
            {   
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    "Content-Type": "application/json" 
                }
            }           
        );
    } catch (err) {
        alert("Erro ao excluir a aula.");
    }
}

export async function DeleteModule(e) {
    if (e) {
        e.preventDefault();
    }

    try {
        const response = await httpClient.post(
            'CRUD/DeleteModule',
            {           
                PathID:localStorage.getItem("PathID_on"),
                indexMoudulo:localStorage.getItem("ModuleIndexON")
            },
            {   
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`, 
                    "Content-Type": "application/json"
                }
            }           
        );
    } catch (err) {
        alert("Erro ao excluir modulo.");
    }
}

export async function PostCommentFunc(addressCore,commentCore) {
    try {
        const response = await httpClient.post(
            'interactions/PostComment',
            {           
                PathID:localStorage.getItem("PathID_on"),
                userID:localStorage.getItem("UserName"),
                comment:commentCore,
                address:addressCore
            },
            {   
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`, 
                    "Content-Type": "application/json"
                }
            }           
        );
        alert("Comentario postado com sucesso")
    } catch (err) {
        alert("Erro ao postar comentario.");
    }
}

export async function DeleteComment(addressCore) {
    try {
        const response = await httpClient.post(
            'interactions/DeleteComment',
            {           
                PathID:localStorage.getItem("PathID_on"),
                userID:localStorage.getItem("UserName"),
                address:addressCore
            },
            {   
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`, 
                    "Content-Type": "application/json"
                }
            }           
        );
        alert("Comentario deletado com sucesso")
    } catch (err) {
        alert("Erro ao deletar comentario.");
    }
}
