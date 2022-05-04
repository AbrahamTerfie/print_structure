import { v4 as uuid } from 'uuid';

export const commentData = {
    name: " root parent ",
    id: uuid(),
    description: "root parent",
    link: "root link",
    children: [
        {
            name: " child 1 ",
            id: uuid(),
            description: "grzm",
            link: "grzm",
            children: [
                {
                    name: " child 1.1 ",
                    id: uuid(),

                    description: "grzm",
                    link: "grzm",
                    children: [
                        {
                            name: " child 1.1.1 ",
                            id: uuid(),
                            description: "grzm",
                            link: "grzm",
                            children: []
                        },
                        {
                            name: " child 1.1.2 ",
                            id: uuid(),
                            description: "grzm",
                            link: "grzm",
                            children: []
                        }
                    ]
                },
                {
                    name: " child 1.2 ",
                    id: uuid(),
                    description: "grzm",
                    link: "grzm",
                    children: []
                }

            ]
        },
        {
            name: " child 2 ",
            id: uuid(),
            description: "grzm",
            link: "grzm",
            children: []
        },
        {
            name: " child 3 ",
            id: uuid(),
            description: "grzm",
            link: "grzm",
            children: []
        }
        
    ]

}