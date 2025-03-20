import httpClient from '../../APIs/PathCarrerAPI/PathCarrer'

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