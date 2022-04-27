import React, { useState, createContext } from "react";
import { commentData } from "../data/data";
interface AuxProps {
    children: JSX.Element[] | JSX.Element;
}
type InitStateType = {
    state: NestedData;
    setState: React.Dispatch<React.SetStateAction<NestedData>>;
    newChild: sessionStorageType;
    setNewchildren: React.Dispatch<React.SetStateAction<sessionStorageType>>;

};



//interface type for {commentdata}
interface NestedData {
    id: number;
    parentId: number;
    name: string;
    description: string;
    link: string;
    children: NestedData[];
}


interface sessionStorageType {
    parentComment: {};
    newChild: {};
}

const newChildstate: sessionStorageType = {
    parentComment: {},
    newChild: {}
}
const initState: NestedData = commentData


export const AppContext = createContext<InitStateType>({
    state: initState,
    setState: () => { },
    newChild: newChildstate,
    setNewchildren: () => { }
});

export default function AppStore({ children }: AuxProps) {
    const [state, setState] = useState(initState);
    const [newChild, setNewchildren] = useState(newChildstate);
    return (
        <AppContext.Provider value={{
            state,
            setState,
            newChild,
            setNewchildren,



        }}>{children}</AppContext.Provider>
    );
}
