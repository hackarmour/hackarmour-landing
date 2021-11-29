import { Button } from "@chakra-ui/react"
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FadeInDown } from '../animations'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HackArmour</title>
        {/* TODO: Meta Tags */}
      </Head>
      <Hero>
        <FadeInDown>
          <Container>
            <Heading className="bold">
              Welcome To <Break /> Hackarmour
            </Heading>
            <br />
            <Description className="text">
              We collect resources and make CTFs and cool projects related to infosec. <Break /> Currently building an Infosec search engine!
            </Description>
            <br />
            <Link href="/about">
              <Button
                className="text-med"
                backgroundColor="#2D5BFF"
                fontSize={{ lg: "1.3rem", md: "1rem" }}
              >Learn More</Button>
            </Link>
          </Container>
        </FadeInDown>
      </Hero>
    </div>
  )
}

const Hero = styled.main`
  width: 100%;
  text-align: center;
  height: 90vh;
  padding: 2.5%;
`

const Break = styled.br`
  @media all and (max-width: 62rem) {
    display: none;
  }
`

const Container = styled.div`
  padding-top: 17vh;
  @media all and (max-width: 62rem) {
    paddding-top: 0.5vh;
  }
`

const Heading = styled.h1`
  font-size: 5rem;
  white-space: pre-wrap !important;
  @media all and (max-width: 62rem) {
    font-size: 3rem;
  }

  @media all and (max-width: 23.5rem) {
    font-size: 2.55rem;
  }
`

const Description = styled.p`
  font-size: 1.9rem;
  white-space: pre-wrap !important;
  @media all and (max-width: 62rem) {
    font-size: 1.28rem;
  }
`

export default Home
