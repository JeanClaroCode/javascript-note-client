import React, { Fragment, useState, useEffect } from "react";
import { Button, Field, Control, Input, Column, Heading, Help, Label, Form, Columns } from "react-bulma-components"
import UsersService from "../../../services/users";

function UsersEditForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const initializeUser = async () => {
    const user = await JSON.parse(localStorage.getItem("user"));
    setName(user["name"]);
    setEmail(user["email"]);
  };

  useEffect(() => {
    initializeUser();
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UsersService.update({ email: email, name: name });
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <Form.Field>
          <Form.Control>
            <Form.Label className="has-text-grey">Full Name</Form.Label>
            <Form.Input
              type="name"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
              required
              name="name"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Control>
            <Form.Label className="has-text-grey">Email</Form.Label>
            <Form.Input
              type="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
            />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Control>
            <Columns>
              <Columns.Column className="has-text-right">
                <Button className="custom-purple-outlined" outlined>
                  Update
                </Button>
              </Columns.Column>
            </Columns>
          </Form.Control>
        </Form.Field>
        {status == "error" && <Form.Help color="danger">Problem in update</Form.Help>}
        {status == "success" && (
          <Form.Help color="primary">Updated with success</Form.Help>
        )}
      </form>
    </Fragment>
  );
}

export default UsersEditForm;