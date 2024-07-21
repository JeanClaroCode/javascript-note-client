import React, { Fragment, useState } from "react";
import UsersService from "../../../services/users";
import { Columns, Form, Button } from 'react-bulma-components';

function UsersEditFormPassword() {
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (password == password_confirmation) {
      try {
        await UsersService.updatePassword({ password: password });
        setStatus("success");
      } catch (err) {
        setStatus("error");
      }
    } else {
      setStatus("error_confirmation_password");
    }
  };

    return (
    <Fragment>
        <form onSubmit={handleSubmit}>
        <Form.Field>
            <Form.Control>
            <Form.Label className="has-text-grey">Password</Form.Label>
            <Form.Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}s
                required
                name="password"
            />
            </Form.Control>
        </Form.Field>
        <Form.Field>
            <Form.Control>
            <Form.Label className="has-text-grey">Password Confirmation</Form.Label>
            <Form.Input
              type="password"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
              name="password_confirmation"
            />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Control>
            <Columns>
              <Columns.Column className="has-text-right">
                <Button className="custom-purple-outlined" outlined>
                  Update Password
                </Button>
              </Columns.Column>
            </Columns>
          </Form.Control>
        </Form.Field>
        {status == "error_update" && (
          <Form.Help color="danger">Problem in password update</Form.Help>
        )}
        {status == "error_confirmation_password" && (
          <Form.Help color="danger">Password don't match</Form.Help>
        )}
        {status == "success" && (
          <Form.Help color="primary">Updated with success</Form.Help>
        )}
      </form>
    </Fragment>
  );
}

export default UsersEditFormPassword;