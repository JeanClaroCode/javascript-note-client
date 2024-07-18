import React, { Fragment, useState } from "react";
import { Button, Form, Columns, Section, Help } from "react-bulma-components";
import { Navigate } from "react-router-dom";
import UsersService from "../../../services/users";

function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    const HandleSubmit = async(event) => {
        event.preventDefault();
        try {
            const user = await UsersService.register({name: name, email: email, password: password});
            setRedirectToLogin(true)
        } catch (error) {
            setError(true)
        }
    }

    if(redirectToLogin)
        return <Navigate to={{pathname: "/login"}}/>


    return (
        <Fragment>
            <Columns centered>
                <form onSubmit={HandleSubmit}>
                    <Columns.Column size={12}>
                        <Form.Field>
                            <Form.Label size="small">Name:</Form.Label>
                            <Form.Control>
                                <Form.Input type="text" required name="name" value={name} onChange={e => setName(e.target.value)}/>
                            </Form.Control>
                        </Form.Field>
                        <Form.Field>
                            <Form.Label size="small">Email:</Form.Label>
                            <Form.Control>
                                <Form.Input type="email" required name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                            </Form.Control>
                        </Form.Field>
                        <Form.Field>
                            <Form.Label size="small">Password:</Form.Label>
                            <Form.Control>
                                <Form.Input type="password" required name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                            </Form.Control>
                        </Form.Field>
                        <Form.Field>
                            <Form.Control>
                                <Columns breakpoint="mobile" centered>
                                    <Columns.Column size="half">
                                        <a className="button is-white has-text-custom-purple" onClick={e => setRedirectToLogin(true)}>Login or</a>
                                    </Columns.Column>
                                    <Columns.Column size="half">
                                        <Button className="custom-purple-outlined" outlined>Register</Button>
                                    </Columns.Column>
                                </Columns>
                            </Form.Control>
                        </Form.Field>
                        {error && <Form.Help color="danger">Email or Password invalid</Form.Help>}
                    </Columns.Column>
                </form>
            </Columns>
        </Fragment>
    );
}

export default RegisterForm;
