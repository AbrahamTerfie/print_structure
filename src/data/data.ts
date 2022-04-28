import { v4 as uuid } from 'uuid';

export const commentData = {
    name: " root parent ",
    id: uuid(),
    description: "grzm",
    link: "grzm",
    children: [
        {
            id: uuid(),
            name: " 1 level parent ",
            description: "user2",
            link: "user2",
            children: [
                {
                    id: uuid(),
                    name: " 2 level parent ",
                    description: "user2",
                    link: "user2",
                    children: []
                },
                {
                    id: uuid(),
                    name: " 3 level parent ",
                    description: "user2",
                    link: "user2",
                    children: [
                        {
                            id: uuid(),
                            name: " 4 level parent ",
                            description: "user2",
                            link: "user2",
                            children: [
                                {
                                    id: uuid(),
                                    name: " 5 level parent ",
                                    description: "user2",
                                    link: "user2",
                                    children: []
                                },
                                {
                                    id: uuid(),
                                    name: " 6 level parent ",
                                    description: "user2",
                                    link: "user2",
                                    children: []
                                },
                            ]
                        },
                        {
                            id: uuid(),
                            name: " 7 level parent ",
                            description: "user2",
                            link: "user2",
                            children: []
                        },
                    ]
                },
                {
                    id: uuid(),
                    name: " 4 level parent ",
                    description: "user2",
                    link: "user2",
                    children: []
                },
                {
                    id: uuid(),
                    name: " 5 level parent ",
                    description: "user2",
                    link: "user2",
                    children: []
                },
            ]
        },
        {
            id: uuid(),
            name: " 1 level parent ",
            description: "user5",
            link: "user5",
            children: []
        },

    ]

}