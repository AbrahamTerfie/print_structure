import React from 'react'
import { Button } from 'reactstrap'
export default function AddButton(onClick: any) {
    return (
        <div>
            <Button
                onClick={onClick}
                color='primary'
                size='lg'

                outline
            >
                + children
            </Button>


        </div>
    )
}
