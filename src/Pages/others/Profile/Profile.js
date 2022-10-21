import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLFef = useRef(user.photoURL)

    const handleSubmit = event =>{
        event.preventDefault();
        console.log(photoURLFef.current.value);
    }

    const handleNameChange = event =>{
        setName(event.target.value);
    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control readOnly type="email" defaultValue={user?.email} placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>User Name</Form.Label>
          <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>photo URL</Form.Label>
          <Form.Control ref={photoURLFef} defaultValue={user?.photoURL} type="text" placeholder="photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Profile;