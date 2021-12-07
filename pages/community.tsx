import { Button } from "@chakra-ui/react"
import type { NextPage } from 'next'
import Head from 'next/head'
import { FadeInDown } from '../animations'
import Footer from "../components/footer"
import {
    Hero,
    Container,
    Heading,
    Break,
    Description,
    Contents,
    Content_Heading,
    Content_Description,
    Content,
    List
} from '../styles/pageStyles'

const Community: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Hackarmour Community Page</title>
                <meta name="description"
                    content="The community page of hackarmour, including contribution guidelines and staff information."
                />
                <meta name="title" content="Hack Armour | Community Page" />
            </Head>
            <Hero>
                <FadeInDown>
                    <Container>
                        <Heading className="bold-fira" style={{ lineHeight: '4rem' }}>
                            Our Community
                        </Heading>
                        <Break />
                        <Description className="text">
                            The community info, contribution guidelines, and staff information.
                        </Description>
                        <br />
                        <a href="https://discord.gg/xBq4QSmjMp">
                            <Button
                                className="text-med"
                                backgroundColor="#2D5BFF"
                                fontSize={{ lg: "1.3rem", md: "1rem" }}
                            > Join Discord</Button>
                        </a>
                    </Container>
                </FadeInDown>
            </Hero>


            <FadeInDown>
                <Contents>
                    <Content>
                        <Content_Heading className="bold-fira">Community Information</Content_Heading>
                        <br />
                        <Content_Description className="text-2">
                            Our community consists of hackers and developers. We work on making projects and CTFs and solving hacking challenges together. All of our projects are related to infosec and our community. We also believe in opensouce and lots of stuff we do could be found on our github page.
                            <br />
                            <br />
                            <p>
                                We have members from all over the globe. Hence, we strictly support the use of english as the language of communication and have rules and active moderators to make the chat well moderated, inclusive and friendly to everyone. 
                            </p>
                            <br />
                            <p>
                                We are also working on a team based system where people can collaborate on their projects with people of different interests for instance the &quot; malware team &quot; may work on making malware based CTFs together. 
                            </p>
                        </Content_Description>
                    </Content>

                    <Content>
                        <Content_Heading id="#contribution" className="bold-fira">Contribution Guidelines</Content_Heading>
                        <br />
                        <Content_Description className="text-2">
                            These are the guidelines to be followed if you want to contribute to our projects. There might be special ones for each, so please refer to the readme of the particular project.
                            <List>
                                <li>Always before contributing, use the Issue Tracker to check about what you can improve in the project. You can also use it to file bugs and self assign it if you can fix them!</li>
                                <li>Lint your project for potential bugs using the recommended linter before pushing the code. Guidelines could be found in the respective readme.</li>
                                <li>Make sure the commit message is in present tense and helps to understand what feature is implemented and which section has been edited. For instance- <code> &quot; nav: add homepage link &quot;</code></li>
                            </List>
                        </Content_Description>
                    </Content>
                </Contents>
            </FadeInDown>

            <Footer />
        </div>
    )
}

export default Community
