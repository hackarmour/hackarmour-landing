import { Button } from "@chakra-ui/react"
import type { NextPage } from 'next'
import Head from 'next/head'
import { FadeInDown } from '../animations'
import {
    Hero,
    Container,
    Heading,
    Break,
    Description,
} from '../styles/pageStyles'

const Community: NextPage = () => {
    return (
        <div>
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
        </div>
    )
}

export default Community
