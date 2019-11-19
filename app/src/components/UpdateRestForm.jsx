import React, {useState } from 'react';
import styled from "styled-components";
import {updateRest} from "../actions/actions";
// import { homeBoiesReduxAction } from "../actions/homeBoiesReduxAction" // this is for you Carlos

// use useDispatch to run action function // this is for you Carlos
// import { useDispatch } from "react-redux" // this is for you Carlos

        const Form = styled.form`
            margin: 0 auto;
            padding: 20px;
            font-size: 1.5rem;
            text-align: center;
            font-family: 'Raleway', sans-serif; 
           display: flex;
           flex-direction: column;
           button {
               font-size: 1.25rem;
           }
           margin-bottom: 10px;
        `;

        const Label = styled.label`
        // border: 2px solid green;
        font-size: 1.5rem;
        padding: 10px;
        `;

        const Input = styled.input`
        // border: 2px solid green;
        text-align:center;
        font-size: 1rem;
        padding: 10px;
        `;

        const Button = styled.button`
        margin: 0 auto;
        background-color:white;
        padding: 10px;
        width: 20%;
        display:flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 20px;
        `;


const UpdateRestForm = () => {
    // const dispatch = useDispatch() // this is for you Carlos

        const [RForm,setRForm] = useState({
                Id: "",
                Description: "",
                MenuItems: "",
                Price: "",
                Rating: "",
                Location: ""
            })
    
        const changeThis = e => {
            setRForm({...RForm, [e.target.name]: e.target.value})
        };

       
        const handleUpdate = e => {
            e.preventDefault();
        
            updateRest(RForm);
            // useDispatch(homeBoiesReduxAction(RForm)) // this is for you Carlos
            
            e.target.reset()
        };

    return (
        <div className="updateForm">

            <Form onSubmit={handleUpdate} >
                <Label htmlFor="Id">Id</Label>

                <Input
                    name="Id"
                    id="Id"
                    type="text"
                    placeholder="Add Id"
                    onChange={changeThis}
                    
                />
                <Label htmlFor="Description">Description</Label>
                <Input
                    name="Description"
                    id="Description"
                    type="text"
                    placeholder="Add Description"
                    onChange={changeThis}
                    
                />
                <Label htmlFor="MenuItems">MenuItems</Label>
                <Input
                    name="MenuItems"
                    id="MenuItems"
                    type="text"
                    placeholder="Add MenuItems"
                    onChange={changeThis}
                    
                />
                <Label htmlFor="Price">Price</Label>
                <Input
                    name="Price"
                    id="Price"
                    type="text"
                    placeholder="Add Price"
                    onChange={changeThis}
                    
                /> 
                <Label htmlFor="Ratings">Ratings</Label>
                <Input
                    name="Ratings"
                    id="Ratings"
                    type="text"
                    placeholder="Add Ratings"
                    onChange={changeThis}
                    
                />
                <Label htmlFor="Location">Location</Label>
                <Input
                    name="Location"
                    id="Location"
                    type="text"
                    placeholder="Add Location"
                    onChange={changeThis}
                    
                />
                <Button type="submit">Submit</Button>
            </Form>
        </div>   
   );
};

export default UpdateRestForm;