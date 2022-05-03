import React from 'react'
import { Button } from 'reactstrap'
export default function Buttonsss({ name, buttonOptions }:
    { name: string, buttonOptions: any }) {
    return (
        <Button  {...buttonOptions} >
            {name}
        </Button>
    )
}
