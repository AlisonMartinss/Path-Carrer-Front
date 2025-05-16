import { createContext, useState } from "react";

export const PathContext = createContext();

export const PathProvider = ({children}) => {
    
    const [PathData,setPathData] = useState ({
        name:"",
        description:"",
        adjectives:[]
    })

    const [ModuleData,setModuleData] = useState ({
        name:"",
        description:"",
    })

    const [ClassData,setClassData] = useState ([]);

    return <PathContext.Provider value={{setPathData,setModuleData,setClassData}}>
                {children}
           </PathContext.Provider>
}