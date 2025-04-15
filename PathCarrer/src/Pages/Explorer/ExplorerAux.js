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
        alert("Erro ao Buscar Category Explorer.");
        return null;
    }
}