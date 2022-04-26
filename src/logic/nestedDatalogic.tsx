import React from "react"
import { commentData } from '../data/data'
import { Button } from 'reactstrap'

function Comment({ comment }: any) {
  const nestedComments = (comment.children || []).map((comment: { id: any }) => {
    return <Comment


      key={comment.id} comment={comment} type="child" />
  })

  return (
    <div>
      <div
        className="cardContainer  cardTop"
        style={{
          "marginLeft": "55px", "marginTop": "20px",
          "width": "max-content",
          "display": "flex",
          "flexDirection": "column",
          "justifyContent": "space-between"
        }}

      >
        <div>{comment.text}</div>
        {nestedComments}
        <Button
          outline
          size="sm"

          onClick={() => {
            console.log(comment)
          }}
        >
          add children for {comment.text}
        </Button>
      </div>

    </div>
  )
}

function NestedComm() {
  return (
    <div 
    style={{
      // "marginLeft": "55px", "marginTop": "20px",
      // alligh center 
      "display": "flex",
      "flexDirection": "row",
      "justifyContent": "space-between"

    }}
    >
      {commentData.comments.map((comment) => {
        return (
          <div>
            <Comment
              key={comment.id} comment={comment} />

          </div>
        )
      })}
    </div>
  )
}

export default NestedComm