import CreateModulo from "../CreateModulo/Createmodulo"
import { useNavigate } from "react-router-dom"

function UpdateModulo ({route}) {
    const navigate = useNavigate();

    const routes = {
        /* Rotas, para onde vamos após clicar em 'enviar' ? (estando na step 2) */
        UpdateClass: "/UpdateClass",
        UpdateModulo:"/UpdateModulo/UpdateClass",
        CreateClass:"/CreateClass"    
    };

    const redirec = () => {
        navigate(routes[route]);
    };
    return (
        <CreateModulo
         redirec={(e) => redirec(e)}/>
    )
}

export default UpdateModulo