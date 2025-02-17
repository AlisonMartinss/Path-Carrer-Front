import {createContext,useState } from "react";

export const PathStepsContext = createContext();

export const PathStepsProvider = ({children}) => {

    const [oneStap,SetOneStap] = useState({
        title:"",
        categoria:"",
        adjectives:[],
        tags:[],
        desc:""
    })

    const {twoStep,setTwoStep} = useState(
        {
            titleModule:"",
            descModule:""
        }
    );

    const [classData,setClassDataState] = useState ([{
        title:"",
        link:"",
        description:"",
    }]);

    return <PathStepsContext.Provider value={{oneStap,SetOneStap,twoStep,setTwoStep,classData,setClassDataState}}>
               {children}
           </PathStepsContext.Provider>
}