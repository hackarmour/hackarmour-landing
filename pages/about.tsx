import { Button } from "@chakra-ui/react"
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Head from 'next/head'
import { FadeInDown } from "../animations"

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        {/* TODO: Meta Tags */}
      </Head>
      <FadeInDown>
        <Hero>
          <Container>
            <Heading className="bold-fira">
              About Our Vision
            </Heading>
            <Break />
            <Description className="text">
              We are aimed towards organizing all the infosec resources available <Break />
              and bring more order in the tech comminity.
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

const Hero = styled.main`
  width: 100%;
  padding: 2.5%;
`

const Break = styled.br`
  @media all and (max-width: 62rem) {
    display: none;
  }
`

const Container = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 5vh;
  @media all and (max-width: 62rem) {
    text-align: center;
  }
`

const Heading = styled.h1`
  font-size: 4.5rem;
  @media all and (max-width: 62rem) {
    font-size: 3rem;
  }
`

const Description = styled.p`
  font-size: 1.9rem;
  color: #e71235;
  @media all and (max-width: 62rem) {
    font-size: 1.47rem;
  }
`

export default About
