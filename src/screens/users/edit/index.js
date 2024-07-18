import React, { Fragment } from "react";
import "../../../styles/users.scss";
import UsersEditForm from "../../../components/users_edit/user_edit_form";
import UsersEditFormPassword from "../../../components/users_edit/editPassword";
import UsersDelete from "../../../components/users_edit/deleteAccount";
import { Columns, Heading, Section, Container, Card } from "react-bulma-components";
import HeaderLoggedEdit from "../../../components/header_edit";

const UserEdit = () => (
  <Fragment>
    <HeaderLoggedEdit />
    <Section size="medium" className="users">
      <Container>
        <Columns centered className="users-editt">
          <Columns.Column size={4}>
            <Heading size={5} className="has-text-white has-text-left">
              Informações Pessoais
            </Heading>
            <Card>
              <Card.Content>
                <UsersEditForm />
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>

        <Columns centered className="users-edit">
          <Columns.Column size={4}>
            <Heading size={5} className="has-text-white has-text-left">
              Password
            </Heading>
            <Card>
              <Card.Content>
                <UsersEditFormPassword />
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>
        <Columns centered>
          <Columns.Column size={4} className="has-text-right">
            <UsersDelete />
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  </Fragment>
);

export default UserEdit;
