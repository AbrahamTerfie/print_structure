import { v4 as uuid } from 'uuid';

export const commentData = {
    name: "",
    id: uuid(),
    description: "",
    link: "root link",
    children: [
        {
            name: "",
            id: uuid(),
            description: "",
            link: "",
            children: []
        },
    ]

}
