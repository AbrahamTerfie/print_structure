import React, { useContext } from 'react'
import { CardComponent, AddButton } from '../Components/index'
import { Col, Row, Button } from 'reactstrap'
import NestedComm from '../logic/nestedDatalogic'
import { AppContext } from '../context/AppContext'
export default function Home() {
    const { state, addParentNode } = useContext(AppContext)
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
                        onClick={() => addParentNode(
                            {
                                id: '',
                                name: '',
                                description: '',
                                link: '',
                                children: []

                            }
                        )}> add parent </Button></Col>
            </Row>
            <NestedComm />

        </div>
    )
}
