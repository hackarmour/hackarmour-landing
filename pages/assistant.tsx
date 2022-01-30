import { Button } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { FadeInDown } from "../animations";
import Footer from "../components/footer";
import {
    Hero,
    Container,
    Heading,
    Break,
    Description,
    Contents,
    Content,
    Content_Heading,
    Content_Description,
} from "../styles/pageStyles";

const Assistant: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Assistant</title>
                <meta
                    name="description"
                    content="A Discord bot for everyone made my HackArmour"
                />
                <meta name="title" content="Hack Armour | Assistant" />
            </Head>
            <Hero>
                <FadeInDown>
                    <Container>
                        <Heading
                            className="bold-fira"
                            style={{ lineHeight: "4rem" }}
                        >
                            Assistant
                        </Heading>
                        <Break />
                        <Description className="text">
                            An opensource discord bot for everyone.
                        </Description>
                        <br />
                        <a href="https://top.gg/bot/845154524997877770">
                            <Button
                                className="text-med"
                                backgroundColor="#2D5BFF"
                                fontSize={{ lg: "1.3rem", md: "1rem" }}
                            >
                                Top.gg
                            </Button>
                        </a>
                    </Container>
                </FadeInDown>
            </Hero>

            <FadeInDown>
                <Contents>
                    <Content className="text-2">
                        <Content_Heading className="bold-fira">
                            What is it?
                        </Content_Heading>
                        <Content_Description>
                            Yet another moderation utility bot to fancy your
                            server with!
                        </Content_Description>
                    </Content>

                    <Content className="text-2">
                        <Content_Heading className="bold-fira">
                            Example Heading
                        </Content_Heading>
                        <Content_Description style={{ padding: 2 + "%" }}>
                            <ul>
                                <li>
                                    A Warning System to warn those pesky rule
                                    breakers
                                </li>
                                <li>
                                    Logging System to keep track of things
                                    happening around your server
                                </li>
                                <li>
                                    Moderation commands to punish the rule
                                    breakers
                                </li>
                            </ul>
                        </Content_Description>
                    </Content>
                </Contents>
            </FadeInDown>
            <Footer />
        </div>
    );
};

export default Assistant;
