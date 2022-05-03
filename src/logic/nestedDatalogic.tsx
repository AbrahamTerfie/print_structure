import React, { useState, useContext } from "react"
import { Modal, ModalFooter, ModalHeader, Col, ModalBody, Form, Row } from 'reactstrap'
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../context/AppContext'
import Forminput from '../Components/FormInput'
import Buttonsss from '../Components/Buttonsss'



function Comment({ comment }: any) {
  const { state, deleteFunction, formData, setFormData } = useContext(AppContext)
  const { name, description, link } = formData
  const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = (e: Event) => {
    e.preventDefault()
    comment.children.push(formData)
    setFormData({
      id: uuidv4(),
      name: '',
      description: '',
      link: '',
      children: [],

    })
  }

  const nestedComments = (comment.children || []).map((comment: { id: any }) => {
    return <Comment
      key={comment.id} comment={comment} type="child" />
  })
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);



  function modalBodyForm() {
    return (
      <Form>
        <Row>
          <Col md={3}>
            <Forminput
              label="name"
              inputOptions={{
                id: "name",
                name: "name",
                placeholder: "child name  ",
                type: "text",
                value: name,
                onChange: onChange
              }} />
          </Col>
          <Col md={3}>
            <Forminput
              label="description"
              inputOptions={{
                id: "description",
                name: "description",
                placeholder: "description",
                type: "text",
                value: description,
                onChange: onChange
              }}
            />
          </Col>
          <Col md={4}>
            <Forminput
              label="link"
              inputOptions={{
                id: "link",
                name: "link",
                placeholder: "link",
                type: "text",
                value: link,
                onChange: onChange
              }}
            />
          </Col>
          <Col md={1} className="m-4"  >
            <Buttonsss

              name="add"
              buttonOptions={{
                outline: true,
                onClick: (e: Event) => {
                  onSubmit(e);
                },
                color: "success",
              }} />
          </Col>
        </Row>
      </Form>
    )
  }

  return (
    <div>
      <div
        className="cardContainer  cardTop"
        style={{ "flexDirection": "column", }} >
        <div> name :  {comment.name}</div>
        <div> description :  {comment.description}</div>
        <div> link:  {comment.link}</div>
        {nestedComments}
        <Row className="m-4" >
          <Col>

            <Buttonsss
              name="add"
              buttonOptions={{
                outline: true,
                size: "sm",
                onClick: toggle,
                color: "success",
              }} />
          </Col>
          <Col>
            <Buttonsss
              name="delete"
              buttonOptions={{
                size: "sm",
                color: "danger",
                outline: true,
                onClick: () => deleteFunction(comment.id, state),
              }} />

          </Col>
        </Row>
      </div>
      <Modal
        scrollable
        size="xl"
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>
          <small>Add chldren to </small><>{comment.name}</>
        </ModalHeader>
        <ModalBody>

          <div>
            {modalBodyForm()}
          </div>

        </ModalBody>
        <ModalFooter>

          <Buttonsss
            name="close"
            buttonOptions={{
              outline: true,
              color: "danger",

              onClick: toggle
            }} />
        </ModalFooter>
      </Modal>

    </div>
  )
}

function NestedComm() {
  const { state } = useContext(AppContext);
  return (
    <div>
      <div
        style={{
          "display": "flex",
          "flexDirection": "row",
          "justifyContent": "center",
        }}
      >
        {state.children.map((comment) => {
          return (
            <div>
              <Comment
                key={comment.name} comment={comment} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NestedComm