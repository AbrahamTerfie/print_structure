import React, { useState, createContext } from "react";
import { commentData } from "../data/data";
// import { v4 as uuidv4 } from 'uuid';
import {
    NestedData,
    formDataInterface,
    AuxProps,
    InitStateType
} from "../types/types";



const initState: NestedData = commentData
const formDataState: formDataInterface = {
    id: '',
    name: '',
    description: '',
    link: '',
    children: [],

}
export const AppContext = createContext<InitStateType>({
    modal: false,
    setModal: () => { },
    state: initState,
    setState: () => { },
    deleteFunction: () => { },
    addParentNode: () => { },
    formData: formDataState,
    setFormData: () => { },


});

export default function AppStore({ children }: AuxProps) {
    const [state, setState] = useState(initState);
    const [modal, setModal] = useState(false);
    const [formData, setFormData] = useState(formDataState)

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

    function addParentNode(parentNode: any) {
        setState({ ...state, children: [...state.children, parentNode] })
    }


    const values = {
        modal,
        setModal,
        state,
        setState,
        deleteFunction,
        addParentNode,
        formData, setFormData
    }
    return (
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    );
}
