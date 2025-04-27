import httpClient from '../../APIs/PathCarrerAPI/PathCarrer';

/**
 * Motivação: Centralizar chamadas usadas no componente 'Class', e também suas funções fundamentais.
 * 
 * Chamadas - API:
 * 
 * - GetContent: Busca o conteudo do Path
 * - DeleteClassUnicAPI: Deleta a unica aula atual.
 * - DeleteModule: Deleta o modulo atual.
 * 
 * Funções proprias:
 * 
 * - ClassSelect: Uma vez que clicado em determinada aula, essa função delega 
 *   aos estados os atributos nescessarios para ver a aula.
 * 
 */


export async function GetContent() {
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
        return response.data
    }
    
     catch (err) {
        console.error("Erro na requisição:", err);
        alert("Erro na chamada");
    }
}



export async function DeleteClassUnicAPI(e) {
    if (e) {
        e.preventDefault(); 
    }

    try {
        const response = await httpClient.put(
            'CRUD/DeleteClassUnic',
            { 
                PathID: localStorage.getItem("PathID_on"),
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


export async function AddSeeClass(IDclass) {
    try {
        const response = await httpClient.post(
            'User/AddSeeClass',
            {           
                UserName:localStorage.getItem("UserName"),
                PathID:localStorage.getItem("PathID_on"),
                IDclass:IDclass,
                indexModule:localStorage.getItem("ModuleIndexON")
            },
            {   
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`, 
                    "Content-Type": "application/json"
                }
            }           
        );
        alert("Aula vista")
    } catch (err) {
        alert("Erro ver aula.");
    }
}

export async function RemoveSeeClass(IDclass) {
    try {
        const response = await httpClient.post(
            'User/RemoveSeeClass',
            {           
                UserName:localStorage.getItem("UserName"),
                PathID:localStorage.getItem("PathID_on"),
                IDclass:IDclass,
                indexModule:localStorage.getItem("ModuleIndexON")
            },
            {   
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`, 
                    "Content-Type": "application/json"
                }
            }           
        );
        alert("Aula des-vista")
    } catch (err) {
        alert("Erro ver desver aula.");
    }
}

export async function ElementCommentInfo(Gen, commentID) {
    try {
      const token = localStorage.getItem("Token");
      const PathID = localStorage.getItem("PathID_on");
      const indexModule = localStorage.getItem("ModuleIndexON");
  
      if (!token) {
        alert("Erro: Faça login novamente");
        return null;
      }
  
      if (!PathID || !indexModule) {
        console.error("Erro: PathID ou indexModule não encontrados no localStorage.");
        return null;
      }
  
      const url = `Short/ElementCommentInfo?PathID=${encodeURIComponent(PathID)}&indexModule=${encodeURIComponent(indexModule)}&Gen=${Gen}&commentID=${encodeURIComponent(commentID)}`;
  
      const response = await httpClient.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      return response.data;
    } catch (err) {
      console.error("Erro na requisição:", err);
      throw err; // Opcional: Lança o erro para melhor tratamento
    }
}

export async function PostCommentFunc4(Gen, fatherID, comment) {
    try {
        // Pegando valores do localStorage de forma segura
        const userName = localStorage.getItem("UserName");
        const pathID = localStorage.getItem("PathID_on");
        const indexModule = localStorage.getItem("ModuleIndexON");
        const token = localStorage.getItem("Token");

        // Verificando se há valores nulos ou indefinidos antes de fazer a requisição
        if (!userName || !pathID || !indexModule || !token) {
            console.error("Erro: Dados ausentes no localStorage");
            alert("Erro: Informações do usuário ou caminho ausentes.");
            return { success: false, message: "Dados ausentes" };
        }

        // Fazendo a requisição
        const response = await httpClient.post(
            "interactions/PostComment",
            {
                userName: userName,
                PathID: pathID,
                indexModule: indexModule,
                Gen: Gen,
                fatherID: fatherID,
                comment: comment
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );

        // Checando se a resposta da API foi bem-sucedida
        if (response.status >= 200 && response.status < 300) {
            alert("Comentário postado com sucesso!");
            return { success: true, data: response.data };
        } else {
            console.error("Erro ao postar comentário:", response.statusText);
            alert("Erro ao postar comentário. Tente novamente.");
            return { success: false, message: response.statusText };
        }
    } catch (err) {
        console.error("Erro ao postar comentário:", err);
        alert("Erro ao postar comentário. Verifique sua conexão.");
        return { success: false, message: err.message };
    }
}

export async function DeleteComment(Gen, fatherID, commentID) {
    try {
        // Pegando valores do localStorage de forma segura
        const userName = localStorage.getItem("UserName");
        const pathID = localStorage.getItem("PathID_on");
        const indexModule = localStorage.getItem("ModuleIndexON");
        const token = localStorage.getItem("Token");

        // Verificando se há valores nulos ou indefinidos antes de fazer a requisição
        if (!userName || !pathID || !indexModule || !token) {
            console.error("Erro: Dados ausentes no localStorage");
            alert("Erro: Informações do usuário ou caminho ausentes.");
            return { success: false, message: "Dados ausentes" };
        }

        const x = 
        {
            Gen0:Gen,
            fatherID0:fatherID,
            commentID0:commentID
        }
        console.log("x: ")
        console.log(x)

        // Fazendo a requisição
        const response = await httpClient.post(
            "interactions/DeleteComment",
            {
                
                PathID: pathID,
                indexModule: indexModule,
                Gen: Gen,
                fatherID: fatherID,
                commentID: commentID
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );

        // Checando se a resposta da API foi bem-sucedida
        if (response.status >= 200 && response.status < 300) {
            alert("Comentário deletado com sucesso!");
            return { success: true, data: response.data };
        } else {
            console.error("Erro ao deletar comentário:", response.statusText);
            alert("Erro ao deletar comentário. Tente novamente.");
            return { success: false, message: response.statusText };
        }
    } catch (err) {
        console.error("Erro ao deletar comentário:", err);
        alert("Erro ao deletar comentário. Verifique sua conexão.");
        return { success: false, message: err.message };
    }
}
