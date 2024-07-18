import React, { Fragment } from "react";
import Header from "../../../components/header";
import { Card, Columns, Container, Heading, Section } from "react-bulma-components";
import '../../../styles/auth.scss'
import logoImage from '../../../assets/images/logo.png'
import LoginForm from "../../../components/auth/login_form";

const LoginScreen = ( ) => (
    <Fragment>
        <Header/>
        <Section size="medium" className="auth">
            <Container>
                <Columns centered>
                    <Columns.Column size={4}>
                        <Card>
                            <Card.Content>
                                <Section>
                                    <Columns centered>
                                        <Columns.Column size={12}>
                                            <img src={logoImage} alt="logo"/>
                                        </Columns.Column>
                                    </Columns>
                                    <Columns>
                                        <Columns.Column size={12}>
                                            <Heading size={6} className="has-text-grey has-text-centered">
                                                Your notes on the cloud
                                            </Heading>
                                        </Columns.Column>
                                    </Columns>
                                    <LoginForm/>
                                </Section>
                            </Card.Content>
                        </Card>
                    </Columns.Column>
                </Columns>
            </Container>
        </Section>
    </Fragment>
)

export default LoginScreen; 