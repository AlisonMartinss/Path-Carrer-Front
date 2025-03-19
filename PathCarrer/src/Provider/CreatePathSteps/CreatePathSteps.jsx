import {createContext,useState } from "react";

export const PathStepsContext = createContext();

export const PathStepsProvider = ({children}) => {

    const [oneStap,SetOneStap] = useState({
        title:"",
        category:"",
        descPathOver:"",
        banner:"",
        tags:[],
        adjectives:[]
    })

    const [twoStep,setTwoStep] = useState(
        {
            titleModule:"",
            descModule:"",
        }
    );

    const [threeStep,setThreeStep] = useState ([]);



    const [APImodel,SetAPImodel] = useState(
        {
            onePathDTO:oneStap,
            twoPathDTO:twoStep
        }
    )

    const [modeleON,SetModeleON] = useState([]);

    return <PathStepsContext.Provider value={{oneStap,SetOneStap,twoStep,setTwoStep,threeStep,setThreeStep,APImodel,SetAPImodel,modeleON,SetModeleON}}>
               {children}
           </PathStepsContext.Provider>
}