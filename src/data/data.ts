export const commentData = {
    name: " root parent ",
    id: 0,
    parentId: 0,
    description: "grzm",
    link: "grzm",
    children: [
        {
            id: 1,
            parentId: 0,
            name: " 1 level parent ",
            description: "user2",
            link: "user2",
            children: [
                {
                    id: 2,
                    parentId: 1,
                    name: " 2 level parent ",
                    description: "user2",
                    link: "user2",
                    children: []
                },
                {
                    id: 4,
                    parentId: 1,
                    name: " 3 level parent ",
                    description: "user2",
                    link: "user2",
                    children: []
                },
                {
                    id: 5,
                    parentId: 1,
                    name: " 4 level parent ",
                    description: "user2",
                    link: "user2",
                    children: []
                },
                {
                    id: 6,
                    parentId: 1,
                    name: " 5 level parent ",
                    description: "user2",
                    link: "user2",
                    children: []
                },
            ]
        },
        {
            id: 7,
            parentId: 0,
            name: " 1 level parent ",
            description: "user5",
            link: "user5",
            children: []
        },

    ]

}