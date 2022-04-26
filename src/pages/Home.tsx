import React from 'react'
import { CardComponent, AddButton } from '../Components/index'
import { Col, Row } from 'reactstrap'
import NestedComm from '../logic/nestedDatalogic'
export default function Home() {
    return (
        <div>
            <Row
                className="headerTitle"
                sm={12}
                md={12}
                lg={12}  >
                <h3> manage hirearchy  </h3>
            </Row>

            {/* <CardComponent /> */}
            <NestedComm />

        </div>
    )
}
