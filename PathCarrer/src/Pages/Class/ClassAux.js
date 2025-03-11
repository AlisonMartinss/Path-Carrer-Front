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
