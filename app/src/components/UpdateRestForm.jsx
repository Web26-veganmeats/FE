import React, { useState } from "react";
import { connect } from 'react-redux';
import { updateRest } from '../actions/actions';
// import styled from "styled-components";

const initialValues = {
	name: "",
	street_address: "",
	city: "",
	state: "",
	zip_code: "",
	phone: "",
	hours: ""
}

const UpdateRestForm = (props) => {


const [updateRest, setUpdateRest] = useState(initialValues)

const handleChange = event => {
setUpdateRest({ ...updateRest, [event.target.name]: event.target.value })
// console.log(updateRest)
}

const handleSubmit = (event) => {
event.preventDefault();
// console.log('handleSubmit updateRest Object: ', updateRest)
props.updateRest(updateRest, props.match.params.id)
props.history.push(`/restaurantlist`)
}

return (
<div>
    <form onSubmit={handleSubmit}>
    <label>Restaurant Name</label>
    <br />
    <input
        name='name'
        placeholder='Restaurant Name'
        value={updateRest.name}
        onChange={handleChange}
    />
    <br />
    <label>Street Address</label>
    <br />
    <input
        name='street_address'
        placeholder='Street Address'
        value={updateRest.street_address}
        onChange={handleChange}
    />
    <br />
    <label>City</label>
    <br />
    <input
        name='city'
        placeholder='City'
        value={updateRest.city}
        onChange={handleChange}
    />
    <br />
    <label>State</label>
    <br />
    <input
        name='state'
        placeholder='State'
        value={updateRest.state}
        onChange={handleChange}
    />
    <br />
    <label>Zip Code</label>
    <br />
    <input
        name='zip_code'
        placeholder='Zip Code'
        value={updateRest.zip_code}
        onChange={handleChange}
    />
    <br />
    <label>Phone Number</label>
    <br />
    <input
        name='phone'
        placeholder='Phone Number'
        value={updateRest.phone}
        onChange={handleChange}
    />
    <br />
    <label>Hours</label>
    <br />
    <input
        name='hours'
        placeholder='Hours'
        value={updateRest.hours}
        onChange={handleChange}
    />
    <br />
    <button>Submit Changes</button>
    </form>
</div>
)
}



export default connect(state => {
return {
restData: state.restData,
isFetching: state.isFetching,
error: state.error
}
}, {updateRest})(UpdateRestForm)