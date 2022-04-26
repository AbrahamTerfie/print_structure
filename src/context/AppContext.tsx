import React, { useState, createContext } from "react";
import { commentData } from "../data/data";
interface AuxProps {
    children: JSX.Element[] | JSX.Element;
}
type InitStateType = {
    state: NestedData;
    setState: React.Dispatch<React.SetStateAction<NestedData>>;
};
interface NestedData {
    title: string;
    author: string;
    comments: Array<{
        id: number;
        text: string;
        author: string;
        children: Array<{
            text: string;
        }>;
    }>;
}
const initState: NestedData = commentData


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
