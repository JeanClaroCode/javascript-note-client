import React, { Fragment } from "react";
import Header from '../../../components/header'
import { Columns, Section, Heading, Container, Card } from "react-bulma-components";
import logoImage from '../../../assets/images/logo.png'
import '../../../styles/auth.scss'
import RegisterForm from '../../../components/auth/register_form';


const RegisterScreen = ( ) => (
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
                                    <RegisterForm/>
                                </Section>
                            </Card.Content>
                        </Card>
                    </Columns.Column>
                </Columns>
            </Container>
        </Section>
    </Fragment>
)

export default RegisterScreen; 