import React, { useState, useContext } from 'react'
import {
    Button, ModalBody,
    Form, FormGroup, Label, Input, Col, Row

} from 'reactstrap'

import { AppContext } from '../context/AppContext'
export default function AddChildrenModal() {
    const { state, newChild, setNewchildren } = useContext(AppContext)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        link: '',
        parentId: ''
    })
    const { name, description, link } = formData
    const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log("form data", formData)
    console.log("newChild", newChild)
    const onSubmit = (e: any) => {
        e.preventDefault()

        setNewchildren({ ...newChild, newChild: formData })
        setFormData({
            name: '',
            description: '',
            link: '',
            parentId: ''
        })
    }
    console.log("new child", newChild)
    return (
        <div>
          
        </div>
    )
}
