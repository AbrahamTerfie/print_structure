export const commentData = {
    title: " root parent ",
    author: "grzm",
    comments: [
      {
        id: 1,
        text: " 1 level parent ",
        author: "user2",
        children: [
          {
            id: 2,
            text: " 2 level parent ",
            author: "user3",
            children: [
              {
                id: 3,
                text: " 3 level parent ",
                author: "user4",
                children: []
              },
              {
                id: 5,
                text: " 3 level parent ",
                author: "user4",
                children: []
              },
  
  
            ]
          },
          {
            id: 4,
            text: " 2 level parent ",
            author: "user3",
            children: []
          }
        ]
      },
      {
        id: 4,
        text: " 1 level parent ",
        author: "user5",
        children: []
      },
      {
        id: 6,
        text: " 1 level parent ",
        author: "user6",
        children: [
          {
            id: 7,
            text: " 2 level parent ",
            author: "user7",
            children: [
              {
                id: 8,
                text: " 3 level parent ",
                author: "user8",
                children: []
              },
              {
                id: 9,
                text: " 3 level parent ",
                author: "user9",
                children: [
                  {
                    id: 10,
                    text: " 4 level parent ",
                    author: "user10",
                    children: []
                  }
                ]
              },
  
            ]
          },
        ]
      }
    ]
  
  }