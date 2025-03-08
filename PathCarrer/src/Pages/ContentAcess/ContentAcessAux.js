/* Função para recuperar os dados do Loby armazenados no localStorage
    a) Definir qual o tipo de entidade em relação ao Path em questão (author,Student_on e Student_off). 
*/
export const RecuperandoLoby = (setLobyInfo) => {
    // setLobyinfo: Local para colocar as informações obtidas com essa func
    const lobyInfoString = localStorage.getItem("LobyInfo");
    if (lobyInfoString) {
        try {
            const lobyInfoObject = JSON.parse(lobyInfoString);
            setLobyInfo(lobyInfoObject);
        } catch (error) {
            console.error("Erro ao fazer JSON.parse:", error);
        }
    } else {
        console.warn("LobyInfo não encontrado no localStorage");
    }
};

// Função para definir a entidade do usuário com base nas informações recuperadas
export const EntityDef = (contentJSON, lobyInfo, setClasse) => {
    if (!lobyInfo || !contentJSON) return console.warn("lobyInfo ou contentJSON não definidos");

    const userName = localStorage.getItem("UserName");
    
    if (contentJSON.IdAuthor === userName) {
        setClasse("author");
        return;
    }

    if (lobyInfo.myPaths?.some(path => path.pathID === contentJSON.IdAuthor)) {
        setClasse("studentOn");
    } else {
        setClasse("studentOff");
    }
};;

/* API_JSON - User/GetPath

{
    "IdAuthor": "Primeiro_Usuario",
    "title": "Segundo Path",
    "description": "Feito para testar API",
    "adjectives": [
        {
            "name": "Objetivo",
            "score": null
        },
        {
            "name": "interativo",
            "score": null
        },
        {
            "name": "exercicios",
            "score": null
        },
        {
            "name": "topico",
            "score": null
        },
        {
            "name": "aulas longas",
            "score": null
        }
    ],
    "modulos": [
        {
            "modulocontent": [
                {
                    "title": "1 aula",
                    "description": "1 desc",
                    "link": "1 link"
                },
                {
                    "title": "2 aula",
                    "description": "2 desc",
                    "link": "2 link"
                },
                {
                    "title": "3 aula",
                    "description": "3 desc",
                    "link": "3 link"
                },
                {
                    "title": "4 aula",
                    "description": "4 desc",
                    "link": "4 link"
                }
            ],
            "name": "Primeiro Modulo",
            "description": "Testando o controller da API",
            "qtdAulasModulo": 4
        }
    ],
    "comments": []
}


*/