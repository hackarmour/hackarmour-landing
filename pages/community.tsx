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
      <FadeInDown>
        <Hero>
          <Container>
            <Heading className="bold-fira">
              Our Community Page
            </Heading>
            <Break />
            <Description className="text">
              The community and contribution guidelines, and staff information.
            </Description>
            <br />
            <Button
              className="text-med"
              backgroundColor="#2D5BFF"
              fontSize={{ lg: "1.3rem", md: "1rem" }}
            >Contact Us</Button>
          </Container>
        </Hero>
      </FadeInDown>
    </div>
  )
}

export default Community
