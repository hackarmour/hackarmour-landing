import { Button } from "@chakra-ui/react"
import type { NextPage } from 'next'
import Head from 'next/head'
import { FadeInDown } from '../animations'
import { Hero, Container, Heading, Break, Description } from '../styles/pageStyles'

const Community: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Hackarmour Community Page</title>
                {/* TODO: Meta Tags */}
            </Head>
            <Hero>
                <FadeInDown>
                    <Container>
                        <Heading className="bold-fira">
                            Our Community Page
                        </Heading>
                        <Break />
                        <Description className="text">
                            The community and contribution guidelines, and staff information.
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
