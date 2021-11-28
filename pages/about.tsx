import { Button } from "@chakra-ui/react"
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        {/* TODO: Meta Tags */}
      </Head>
      <Navbar />

      <Hero>
        <Container>
          <Heading className="bold-fira">
          Lorem ipsum dolor sit amet
          </Heading>
          <br />
          <Description className="text">
          Lorem ipsum dolor sit amet, consectetur <Break />adipiscing elit.. 
          </Description>
          <br />
          <Button
           className="text-med"
           backgroundColor= "#2D5BFF"
           fontSize="1.5rem"
          >Contact Us</Button>
        </Container>
      </Hero>
    </div>
  )
}

const Hero = styled.main`
  width: 100%;
  text-align: left;
  height: 167;
  padding: 2.5%;
`

const Break = styled.br`
  @media all and (max-width: 62rem) {
    display: none;
  }
`

const Container = styled.div`
  padding-top: 1vh;
  padding-left: 14rem;
  @media all and (max-width: 62rem) {
    paddding-top: 1.1vh;
  }
`

const Heading = styled.h1 `
  font-size: 5rem;
  @media all and (max-width: 62rem) {
    font-size: 3.2rem;
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
