import React, { useState, createContext } from "react";
interface AuxProps {
    children: JSX.Element[] | JSX.Element;
}
type InitStateType = {
    state: Questionare;
    setState: React.Dispatch<React.SetStateAction<Questionare>>;
};

interface Questionare {
    activeCatagory: string;
    activeCategoryData: {};
    categoryAnswers: {};
    parentNode: string;
    name: string;
    description: string;
    link: string;
    color: string;

}

const initState: Questionare = {
    activeCatagory: "opportunities",
    activeCategoryData: {},
    categoryAnswers: {},
    parentNode: "",
    name: "",
    description: "",
    link: "",
    color: "",

};

export const AppContext = createContext<InitStateType>({
    state: initState,
    setState: () => { },
});

export default function AppStore({ children }: AuxProps) {
    const [state, setState] = useState(initState);
    return (
        <AppContext.Provider value={{ state, setState }}>{children}</AppContext.Provider>
    );
}
