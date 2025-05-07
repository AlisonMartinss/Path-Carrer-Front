import httpClient from '../../APIs/PathCarrerAPI/PathCarrer';

export async function Explore() {
    try {
        const response = await httpClient.get('Explore', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("Token")}`,
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            const serverMessage = error.response.data?.erro;
            
            if (serverMessage === "Token inválido ou expirado") {
              alert(serverMessage)
              console.error("Sessão expirada. Faça login novamente !" + serverMessage);
              alert("Sessão expirada. Faça login novamente !");
              window.location.href = '/login'
              return;
            }
        }
        alert("Erro ao Buscar explorer.");
        return null;
    }
}

export async function CategoryExplorer(e) {
    try {
        const response = await httpClient.get(`Explore/CategoryExplorer?category=${e}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("Token")}`,
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            const serverMessage = error.response.data?.erro;
            
            if (serverMessage === "Token inválido ou expirado") {
              alert(serverMessage)
              console.error("Sessão expirada. Faça login novamente !" + serverMessage);
              alert("Sessão expirada. Faça login novamente !");
              window.location.href = '/login'
              return;
            }
        }
        alert("Erro ao Buscar Category Explorer.");
        return null;
    }
}

export async function MyPaths() {
    try {
        const response = await httpClient.get(`Explore/MyPaths`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("Token")}`,
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            const serverMessage = error.response.data?.erro;
            
            if (serverMessage === "Token inválido ou expirado") {
              alert(serverMessage)
              console.error("Sessão expirada. Faça login novamente !" + serverMessage);
              alert("Sessão expirada. Faça login novamente !");
              window.location.href = '/login'
              return;
            }
        }
        alert("Erro ao Buscar seus paths.");
        return null;
    }
}

