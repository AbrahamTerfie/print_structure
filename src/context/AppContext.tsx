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
    deleteFunction: (id: string, parentNode: any) => void;
    addParentNode: (parentNode: any) => void;
};



//interface type for {commentdata}
interface NestedData {
    id: string;
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
    setNewchildren: () => { },
    deleteFunction: () => { },
    addParentNode: () => { }
});

export default function AppStore({ children }: AuxProps) {
    const [state, setState] = useState(initState);
    const [newChild, setNewchildren] = useState(newChildstate);
    function deleteFunction(id: string, parentNode: any) {
        parentNode.children.forEach((item: any) => {
            if (item.id === id) {
                parentNode.children.splice(parentNode.children.indexOf(item), 1)
            }
            item.children.forEach((child: any, index: any) => {
                if (child.id === id) {
                    item.children.splice(index, 1)
                }
                if (child.children.length > 0) {
                    deleteFunction(id, child)
                }
            })
        });
        setState({ ...state, children: state.children })
    }
    //function add parent node to state
    function addParentNode(parentNode: any) {
        setState({ ...state, children: [...state.children, parentNode] })
    }

    return (
        <AppContext.Provider value={{
            state,
            setState,
            newChild,
            setNewchildren,
            deleteFunction,
            addParentNode
        }}>{children}</AppContext.Provider>
    );
}
