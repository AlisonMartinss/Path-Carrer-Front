import httpClient from '../../APIs/PathCarrerAPI/PathCarrer'

export async function LobyGet() {
    alert("Chamando loby")
    try {
      const username = localStorage.getItem("UserName");
      const token = localStorage.getItem("Token");
  
      // Verifica se os valores necessários estão disponíveis
      if (!username || !token) {
        alert("Erro: Usuário ou Token não encontrado no localStorage.");
        return null; // Retorna null para indicar erro
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