import { Button } from "@chakra-ui/react"
import type { NextPage } from 'next'
import Head from 'next/head'
import { FadeInDown } from '../animations'
import Footer from "../components/footer"
import { Hero, Container, Heading, Break, Description } from '../styles/pageStyles'

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        {/* TODO: Meta Tags */}
      </Head>
      <Hero>
        <FadeInDown>
          <Container>
            <Heading className="bold-fira" style={{lineHeight: '3.87rem'}}>
              About Our Vision
            </Heading>
            <Break />
            <Description className="text">
              We are aimed towards organizing all the infosec resources available.
            </Description>
            <br />
            <Button
              className="text-med"
              backgroundColor="#2D5BFF"
              fontSize={{ lg: "1.3rem", md: "1rem" }}
            >Contact Us</Button>
          </Container>
        </FadeInDown>
      </Hero>
    </div>
  )
}

export default About
