import React, { Fragment, useState } from "react";
import { Button, Columns, Form } from "react-bulma-components";
import { Navigate } from "react-router-dom";
import UsersService from "../../../services/users";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToRegister, setRedirectToRegister] = useState(false);
    const [redirectToNotes, setRedirectToNotes] = useState(false);
    const [error, setError] = useState(false);

    const HandleSubmit = async(event) => {
        event.preventDefault();
        try {
            const user = await UsersService.login({email: email, password: password});
            setRedirectToNotes(true)
        } catch (error) {
            setError(true)
        }
    }



    if(redirectToRegister)
        return < Navigate to={{pathname: "/register"}}/>
    else if(redirectToNotes)
        return < Navigate to={{pathname: '/notes'}}/>


    return(
        <Fragment>
            <Columns centered>
                <form onSubmit={HandleSubmit}>
                    <Columns.Column size={12}>
                        <Form.Field>
                            <Form.Label size="small">Email: </Form.Label>
                            <Form.Control>
                                <Form.Input type="email" required name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                            </Form.Control>
                        </Form.Field>
                        <Form.Field>
                            <Form.Label size="small">Password: </Form.Label>
                            <Form.Control>
                                <Form.Input type="password" required name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                            </Form.Control>
                        </Form.Field>
                        <Form.Field>
                            <Form.Control>
                                <Columns breakpoint="mobile" centered>
                                    <Columns.Column size="half">
                                        <a className="button is-white has-text-custom-purple" outlined onClick={e => setRedirectToRegister(true)}>Register or</a>
                                    </Columns.Column>
                                    <Columns.Column size="half">
                                        <Button className="custom-purple-outlined" outlined>Login</Button>
                                    </Columns.Column>
                                </Columns>
                            </Form.Control>
                        </Form.Field>
                        {error && <Form.Help color="danger">Email or Password invalid</Form.Help>}
                    </Columns.Column>
                </form>
            </Columns>
        </Fragment>
    )

}

export default LoginForm