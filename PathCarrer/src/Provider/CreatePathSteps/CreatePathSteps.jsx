import {createContext,useState } from "react";

export const PathStepsContext = createContext();

export const PathStepsProvider = ({children}) => {

    const [oneStap,SetOneStap] = useState({
        title:"",
        categoria:"",
        adjectives:[],
        tagspath:[],
        desc:""
    })

    const [twoStep,setTwoStep] = useState(
        {
            titleModule:"",
            descModule:""
        }
    );

    const [threeStep,setThreeStep] = useState ([{
        title:"",
        link:"",
        description:"",
    }]);

    return <PathStepsContext.Provider value={{oneStap,SetOneStap,twoStep,setTwoStep,threeStep,setThreeStep}}>
               {children}
           </PathStepsContext.Provider>
}