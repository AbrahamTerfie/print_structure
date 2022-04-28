// import React, { useState, useContext } from 'react'
// import { Button, Modal, ModalFooter, ModalHeader, Col, FormGroup, Label, Input, ModalBody, Form, Row } from 'reactstrap'
// import { resetFormData } from '../Constant/formState';
// import { v4 as uuidv4 } from 'uuid';
// import { AppContext } from '../context/AppContext'
// export default function AddChildrenModal({ comment }: any) {
//     const { modal, setModal , currentComment } = useContext(AppContext)


//     const [formData, setFormData] = useState({
//         id: uuidv4(),
//         name: '',
//         description: '',
//         link: '',
//         children: [],
//     })
//     const onSubmit = (e: any) => {
//         e.preventDefault()

//         currentComment ? currentComment.children.push(formData) && setFormData(resetFormData) &&
//             console.log('id after submit ', formData.id)
//     }
//     const { name, description, link } = formData
//     const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value })
//     const toggle = () => setModal(!modal);
//     return (
//         <Modal
//             scrollable
//             size="xl"
//             isOpen={modal}
//             toggle={toggle}
//         >
//             <ModalHeader toggle={toggle}>
//                 <small>Add chldren to </small><>{comment.name}</>
//             </ModalHeader>
//             <ModalBody>
//                 <Form>
//                     <Row>
//                         <Col md={4}>
//                             <FormGroup>
//                                 <Label for="name">
//                                     name
//                                 </Label>
//                                 <Input
//                                     id="name"
//                                     name="name"
//                                     placeholder="carname "
//                                     type="text"
//                                     value={name}
//                                     onChange={onChange}

//                                 />
//                             </FormGroup>
//                         </Col>
//                         <Col md={4}>
//                             <FormGroup>
//                                 <Label for="description">
//                                     description
//                                 </Label>
//                                 <Input
//                                     id="description"
//                                     name="description"
//                                     placeholder="description"
//                                     type="text"
//                                     value={description}
//                                     onChange={onChange}

//                                 />
//                             </FormGroup>
//                         </Col>
//                         <Col md={4}>
//                             <FormGroup>
//                                 <Label for="link">
//                                     link
//                                 </Label>
//                                 <Input
//                                     id="link"
//                                     name="link"
//                                     placeholder="link"
//                                     type="text"
//                                     value={link}
//                                     onChange={onChange}
//                                 />
//                             </FormGroup>
//                         </Col>
//                     </Row>
//                 </Form>
//             </ModalBody>
//             <ModalFooter>
//                 <Button
//                     onClick={toggle}
//                     outline
//                     color="danger"
//                 >
//                     Cancel
//                 </Button>
//                 <Button
//                     color="success"
//                     outline
//                     onClick={(e) => {
//                         onSubmit(e);
//                         toggle()
//                     }}>
//                     add as children
//                 </Button>
//             </ModalFooter>
//         </Modal>
//     )
// }
import React from 'react'

export default function AddChildrenModal() {
  return (
    <div>AddChildrenModal</div>
  )
}
