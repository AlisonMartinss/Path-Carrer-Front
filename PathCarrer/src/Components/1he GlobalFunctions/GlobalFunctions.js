import httpClient from '../../APIs/PathCarrerAPI/PathCarrer'
export async function ShortPath(PathID) {
  try {
    const token = localStorage.getItem("Token");

    if (!PathID || !token) {
      alert("Erro: PathID ou Token não encontrado.");
      return null;
    }

    const response = await httpClient.get(`Short?PathID=${PathID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const JSONdata = response.data;
    localStorage.setItem("LobyInfo", JSON.stringify(JSONdata));

    return JSONdata;
  } catch (err) {
    alert("Erro na chamada do Loby!");
    console.error("Erro na requisição:", err);
    return null; // Retorna null em caso de erro para evitar valores indefinidos
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
    } catch (err) {
      alert("Erro na chamada do Loby!");
      console.error("Erro na requisição:", err);
      return null; // Retorna null em caso de erro para evitar valores indefinidos
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
  } catch (err) {
    console.error("Erro na requisição:", err);
    return null; // Retorna null em caso de erro para evitar valores indefinidos
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