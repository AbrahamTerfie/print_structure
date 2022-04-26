import React, { useState } from 'react'
import {
  Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText,
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'
import { AddButton } from '../Components/index'
import AddChildrenModal from './AddChildrenModal';
export default function CardComponent() {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className='cardTop m-4' >
        <Card
          body
          color="success"
          outline
          className="cardContainer"
        >
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>

          </CardBody>
        </Card>
        <div className='m-4' >
          <Button
            onClick={toggle}
            color='primary'
            size='lg'

            outline
          >
            + children
          </Button>
        </div>
      </div>
      <div className='cardBottom  m-4 ' >
        <Button
          onClick={toggle}
          color='primary'
          size='lg'
          outline
        >
          + parent
        </Button>
      </div>
      <div>
        <Modal
          scrollable
          size="xl"
          isOpen={modal}
          toggle={toggle}
        >
          <ModalHeader toggle={function noRefCheck() { }}>
           Add chldren to    "{ " parent node  " }"
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


    </div>
  )
}
