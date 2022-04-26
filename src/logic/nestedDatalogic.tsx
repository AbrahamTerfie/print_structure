import React, { useState, useContext } from "react"

import { Button, Modal, ModalFooter, ModalHeader } from 'reactstrap'
import AddChildrenModal from "../Components/AddChildrenModal"
import { AppContext } from '../context/AppContext'



function Comment({ comment }: any) {
  const nestedComments = (comment.children || []).map((comment: { id: any }) => {
    return <Comment
      key={comment.id} comment={comment} type="child" />
  })
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
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
          onClick={toggle}
        >
          add children for {comment.text}
        </Button>
      </div>


      <Modal
        scrollable
        size="xl"
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={function noRefCheck() { }}>
          Add chldren to    "{" parent node  "}"
        </ModalHeader>
        <AddChildrenModal />



        <ModalFooter>
          <Button
            color="primary"
            onClick={toggle}
          >
            Do Something
          </Button>
          {' '}
          <Button onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  )
}

function NestedComm() {
  const { state, setState } = useContext(AppContext);

  // console.log("state", state)
  return (
    <div>
      <div
        style={{
          "display": "flex",
          "flexDirection": "row",
          "justifyContent": "space-between"
        }}
      >
        {state.comments.map((comment) => {
          return (
            <div>
              <Comment
                key={comment.id} comment={comment} />

            </div>
          )
        })}
      </div>



    </div>
  )
}

export default NestedComm