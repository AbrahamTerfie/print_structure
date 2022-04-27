import React, { useState, useContext } from "react"

import { Button, Modal, ModalFooter, ModalHeader, Col, FormGroup, Label, Input, ModalBody, Form, Row } from 'reactstrap'

import { AppContext } from '../context/AppContext'


const resetFormData = {
  id: 0,
  name: '',
  description: '',
  link: '',
  children: [],
}


function Comment({ comment }: any) {

  const { state, newChild, setNewchildren , setState} = useContext(AppContext)
  const [formData, setFormData] = useState({
    // id: comment.id + 1,
    //assign random ew id
    id: Math.floor(Math.random() * 100),
    name: '',
    description: '',
    link: '',
    children: [],
  })
  const { name, description, link } = formData
  const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value })
  console.log("form data", formData)
  console.log("newChild", newChild)
  const onSubmit = (e: any) => {
    e.preventDefault()
    setNewchildren({ ...newChild, newChild: formData })
    comment.children.push(formData)
    setFormData(resetFormData)
  }

//pop comment from newChild
  const onDelete = (e: any) => {
    e.preventDefault()
    setNewchildren({ ...newChild, newChild: resetFormData.children })
    comment.children.pop()
  }



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
          "justifyContent": "space-evenly"
        }}

      >
        <div> name :  {comment.name}</div>
        <div> description :  {comment.description}</div>
        <div> link:  {comment.link}</div>
        {nestedComments}
        <Row className="m-4" >
          <Col>
            <Button
              outline
              size="sm"
              onClick={toggle}
              color="success"
            >
              add
            </Button>
          </Col>
          <Col>
            <Button
              outline
              size="sm"
              onClick={onDelete}
              color="danger"
            >
              delete
            </Button></Col>
        </Row>
      </div>
      <Modal
        scrollable
        size="xl"
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>
          <small>Add chldren to </small><>{comment.text}</>
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="name">
                    name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="card name "
                    type="text"
                    value={name}
                    onChange={onChange}

                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="description">
                    description
                  </Label>
                  <Input
                    id="description"
                    name="description"
                    placeholder="description"
                    type="textarea"
                    value={description}
                    onChange={onChange}
                    rows={3}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="link">
                    link
                  </Label>
                  <Input
                    id="link"
                    name="link"
                    placeholder="link"
                    type="text"
                    value={link}
                    onChange={onChange}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={toggle}
            outline
            color="danger"
          >
            Cancel
          </Button>
          <Button
            color="success"
            outline
            onClick={(e) => {
              onSubmit(e);
              toggle()
            }
            }
          >
            add as children
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  )
}

function NestedComm() {
  const { state, setState, newChild } = useContext(AppContext);
  console.log(newChild)
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
                key={comment.id} comment={comment} />
            </div>
          )
        })}
      </div>



    </div>
  )
}

export default NestedComm