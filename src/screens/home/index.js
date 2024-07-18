import React, { Fragment } from "react";
import presentationImage from '../../assets/images/presentation.png';
import Header from "../../components/header";
import { Columns, Section, Container, Heading, Content, Button } from 'react-bulma-components';
import '../../styles/home.scss'

const HomeScreen = () => (
    <Fragment>
        <Header/>
        
        <Section size="medium" className="home">
            <Container>
                <Columns>
                    <Columns.Column size={5}>
                        <Heading size={2} spaced className="has-text-white">
                            Create notes easily and access when you wants on the cloud
                        </Heading>
                        <Content size={5} className="has-text-light">
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                            graphic or web designs. <br/><br/>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.
                        </Content>
                        <Button color="" className="is-outlined is-white is-large">
                            <strong>Register for free Now</strong>
                        </Button>
                    </Columns.Column>
                    <Columns.Column size={6} offset={1}>
                        <img src={presentationImage} alt="Presentation Img"/>
                    </Columns.Column>
                </Columns>
            </Container>
        </Section>
    </Fragment>
)

export default HomeScreen;
