/* import React, { Fragment, useState } from "react";
import { Button, Columns, Form } from "react-bulma-components";
import UsersService from "../../services/users";
import { Navigate } from "react-router-dom";
import UsersEditScreen from "../../screens/users/editAccount";

const UserEdit = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [ redirectToDelete, setRedirectToDelete ] = useState(false);

    const HandleSubmit = async(event) => {
        event.preventDefault();
        try {
            const userUpdate = await UsersService.update({name: name, email: email, password: password});
            if(userUpdate){
                alert('Profile updated successfully');
            }
        } catch (error) {
            setError(true)
        }
    }
    
    if (redirectToDelete) 
        return <Navigate to="/users/delete" />;
    
    return(
        <Fragment>
                <Columns centered>
                <form onSubmit={HandleSubmit}>
                    <Columns.Column size={12}>
                    <Form.Field>
                            <Form.Control>
                                <Columns breakpoint="mobile" centered>
                                    <Columns.Column size="half">
                                        <a className="custom-purple-outlined" outlined onClick={e => setRedirectToDelete(true)}>Delete or</a>
                                    </Columns.Column>
                                    <Columns.Column size="half">
                                        <Button className="button is-white has-text-custom-purple" outlined>User edit</Button>
                                    </Columns.Column>
                                </Columns>
                            </Form.Control>
                        </Form.Field>
                        <Form.Field>
                            <Form.Label size="small">New Name: </Form.Label>
                            <Form.Control>
                                <Form.Input type="text" name="name"  required value={name} onChange={e => setName(e.target.value)}/>
                            </Form.Control>
                        </Form.Field>
                        <Form.Field>
                            <Form.Label size="small">New Email:</Form.Label>
                            <Form.Control>
                                <Form.Input type="email" name="email"  required value={email} onChange={e => setEmail(e.target.value)}/>
                            </Form.Control>
                        </Form.Field>
                        {error && <Form.Help color="danger">Error updating profile successfully</Form.Help>}
                    </Columns.Column>
                </form>
            </Columns>
        </Fragment>
    )
}

export default UserEdit */