import React, { useContext, useState } from 'react'
import { Button, Modal, ModalFooter, ModalHeader, Col, ModalBody, Form, Row } from 'reactstrap'
import Forminput from '../Components/FormInput'
import Buttonsss from '../Components/Buttonsss'
import NestedComm from '../logic/nestedDatalogic'
import { AppContext } from '../context/AppContext'
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
    const { addParentNode, formData, setFormData } = useContext(AppContext)
    const { name, description, link } = formData
    const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value })
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const handleSubmit = (e: Event) => {
        e.preventDefault()
        addParentNode(formData)
        setFormData({
            id: uuidv4(),
            name: '',
            description: '',
            link: '',
            children: [],

        })
        toggle()

    }
    return (
        <div>
            <Row className="headerTitle" sm={12} md={12} lg={12}  >
                <Col lg={4} md={4} sm={4} >
                    <h1> manage hirearchy  </h1>
                </Col>
                <Col>
                    <Button
                        outline
                        color='success'
                        onClick={toggle}> add parent </Button></Col>
            </Row>
            <NestedComm />
            <div>
                <Modal
                    scrollable
                    size="xl"
                    isOpen={modal}
                    toggle={toggle}
                >
                    <ModalHeader toggle={toggle}>  add new  parent    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row>
                                <Col md={4}>
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
                                <Col md={4}>
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
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>

                        <Buttonsss
                            name="cancel"
                            buttonOptions={{
                                outline: true,
                                color: "danger",

                                onClick: toggle
                            }} />

                        <Buttonsss
                            name="add"
                            buttonOptions={{
                                outline: true,
                                color: "success",
                                onClick: handleSubmit
                            }} />
                    </ModalFooter>
                </Modal>
            </div>

        </div>
    )
}
