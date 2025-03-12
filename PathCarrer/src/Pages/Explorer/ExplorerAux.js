import httpClient from '../../APIs/PathCarrerAPI/PathCarrer';

export async function Explore() {
    try {
        const response = await httpClient.get('Explore', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("Token")}`,
                "Content-Type": "application/json"
            }
        });

        // Retorna os dados da resposta da API
        return response.data;
    } catch (error) {
        // Em caso de erro, exibe um alerta e retorna null ou uma mensagem de erro
        alert("Erro ao Buscar explorer.");
        return null; // ou return { error: "Erro ao Buscar explorer." };
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

        // Retorna os dados da resposta da API
        return response.data;
    } catch (error) {
        // Em caso de erro, exibe um alerta e retorna null ou uma mensagem de erro
        alert("Erro ao Buscar Category Explorer.");
        return null; // ou return { error: "Erro ao Buscar explorer." };
    }
}