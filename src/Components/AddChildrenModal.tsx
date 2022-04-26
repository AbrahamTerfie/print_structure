import React, { useState } from 'react'
import {
    Button, ModalBody,
    Form, FormGroup, Label, Input, ModalFooter, Modal, ModalHeader, Col, Row

} from 'reactstrap'
export default function AddChildrenModal() {

    return (
        <div>
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
                                    // text area row 
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
                                />
                            </FormGroup>
                        </Col>
                    </Row>




                </Form>
            </ModalBody>

        </div>


    )
}
