import { Box, Button } from "@chakra-ui/react"
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
    Content,
    Content_Heading,
    Content_Description,
} from '../styles/pageStyles'

const Community: NextPage = () => {
    return (
        <Box bg="mocha.700" color="mocha.100" paddingTop="3rem">
            <Head>
                <title>Hackarmour CTF</title>
                <meta name="description"
                    content="The CTF page of hackarmour."
                />
                <meta name="title" content="Hack Armour | CTF" />
            </Head>
            <Hero>
                <FadeInDown>
                    <Container>
                        <Heading className="bold-fira" style={{ lineHeight: '4rem' }}>
                            Hackarmour CTF
                        </Heading>
                        <Break />
                        <Description className="text">
                            We love to make and host CTF challenges.
                        </Description>
                        <br />
                        <a href="https://discord.gg/xBq4QSmjMp">
                        <Button
                            className="text-med"
                            bg="blue.300"
                            _hover={{"bg": "blue.400"}}
                            color="mocha.900"
                            fontSize={{ lg: "1.3rem", md: "1rem" }}
                        > Join Discord</Button>
                        </a>
                    </Container>
                </FadeInDown>
            </Hero>

            <FadeInDown>
                <Contents>
                    <Content className="text-2">
                        <Content_Heading className="bold-fira">Lorem Ipsum</Content_Heading>
                        <Content_Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae doloremque, velit fuga asperiores quam assumenda ratione consectetur mollitia, temporibus veritatis ut odit accusantium tempora earum dignissimos totam, voluptates cum nam dolorem doloribus labore nihil repellendus! A non doloribus beatae perferendis vel inventore error accusantium exercitationem facilis sapiente. Maiores nihil ut beatae veritatis hic obcaecati commodi aut soluta iure provident ea ipsam atque laboriosam, sapiente dolore ex asperiores saepe doloremque eius?
                        </Content_Description>
                    </Content>

                    <Content className="text-2">
                        <Content_Heading className="bold-fira">Example Heading</Content_Heading>
                        <Content_Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. assumenda ratione consectetur mollitia, temporibus veritatis ut odit accusantium tempora earum dignissimos totam, voluptates cum nam dolorem doloribus labore nihil repellendus! A non doloribus beatae perferendis vel inventore error accusantium exercitationem facilis sapiente. Maiores nihil ut beatae veritatis hic obcaecati commodi aut soluta iure provident ea ipsam atque laboriosam, sapiente dolore ex asperiores saepe doloremque eius?
                        </Content_Description>
                        <Content_Description style={{ padding: 2 + '%' }}>
                            <ul>
                                <li>dolor sit, amet consectetur adipisicing elit</li>
                                <li>assumenda ratione consectetur mollitia</li>
                                <li>tempora earum dignissimos totam,</li>
                            </ul>
                        </Content_Description>
                    </Content>
                </Contents>
            </FadeInDown>

            <Footer />
        </Box>
    )
}

export default Community
