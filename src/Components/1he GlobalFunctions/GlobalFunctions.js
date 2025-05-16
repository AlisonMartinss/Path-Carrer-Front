
import httpClient from "../../APIs/PathCarrerAPI/PathCarrer";

export async function ShortPath(PathID) {
  try {
    const token = localStorage.getItem("Token");

    if (!PathID || !token) {
      return null;
    }

    const response = await httpClient.get(`Short?PathID=${PathID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const JSONdata = response.data;
    return JSONdata;
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
    return null; 
  }
}

export async function LobyGet() {
    try {
      const username = localStorage.getItem("UserName");
      const token = localStorage.getItem("Token");

      if (!username || !token) {
        alert("Erro: Usuário ou Token não encontrado no localStorage.");
        return null;
      }
  
      const response = await httpClient.get(`User/Getloby?username=${username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      const JSONdata = response.data;
      localStorage.setItem("LobyInfo", JSON.stringify(JSONdata));
  
      return JSONdata;
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
      alert("Erro na chamada do Loby!");
      return null;
      
    }
}

export async function GetInfoUser(userName) {
  try {
    const token = localStorage.getItem("Token");

    if (!token) {
      alert("Erro: Faça login novamente");
      return null;
    }

    const response = await httpClient.get(`CRUD/GetInfoUser?username=${userName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
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
    console.error("Erro em buscar dados nescessarios para o preenchimento do loby")
    console.error("Erro na requisição:", error);
    return null
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
    console.error("Erro em buscar informações sobre comentario")
    console.error("Erro na requisição:", error);
    return null
    
  }
}