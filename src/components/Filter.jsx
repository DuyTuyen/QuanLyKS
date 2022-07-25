import React from 'react';
import {useState } from 'react';
import PropTypes from 'prop-types';
import { Form,Button} from 'react-bootstrap'

function Filter(props) {
    const [startPrice, setStartPrice] = useState(0)
    const [endPrice, setEndPrice] = useState(0)

    function handleSubmit(e) {
        e.preventDefault()
        props.onSearch(startPrice,endPrice)
    }
    return (
    <Form onSubmit={handleSubmit} className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
                onChange={(e) => setStartPrice(e.target.value)}
                />
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setEndPrice(e.target.value)}
                />
                <Button type="submit" variant="outline-success">Search</Button>
            </Form>
    )
}
export default Filter;