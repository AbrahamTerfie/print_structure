import React from 'react'
import { Input, FormGroup, Label } from 'reactstrap'
export default function Forminput({ label, inputOptions }:
    { label: string, inputOptions: any }) {
    return (
        <FormGroup>
            <Label for="name">{label}</Label>
            <Input {...inputOptions} />
        </FormGroup>
    )
}
