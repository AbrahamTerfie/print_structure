
type NestedData = {
    id: string;
    name: string;
    description: string;
    link: string;
    children: NestedData[];
}
type formDataInterface = {
    id: string;
    name: string;
    description: string;
    link: string;
    children: [];
}
type AuxProps = {
    children: JSX.Element[] | JSX.Element;
}
type InitStateType = {
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    state: NestedData;
    setState: React.Dispatch<React.SetStateAction<NestedData>>;

    deleteFunction: (id: string, parentNode: any) => void;
    addParentNode: (parentNode: any) => void;
    formData: formDataInterface;
    setFormData: React.Dispatch<React.SetStateAction<formDataInterface>>;

};

export type {
    NestedData,
    formDataInterface,
    AuxProps,
    InitStateType

}