import { Text, Button } from "@chakra-ui/react"
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HackArmour</title>
        {/* TODO: Meta Tags */}
      </Head>
      <Navbar />

      <Hero>
        <Container>
          <Heading className="bold">
            Welcome To Our <br /> Community
          </Heading>
          <Break />
          <Text className="text" fontSize={{lg: "3xl", sm: "1xl"}}>
          We collect resources and make cool projects related to infosec. <Break /> Currently building an Infosec search engine!
          </Text>
          <br />
          <Button
           className="text-med"
           backgroundColor="blue.400"
           fontSize="1xl"
          >Learn More</Button>
        </Container>
      </Hero>
    </div>
  )
}

const Hero = styled.main`
  width: 100%;
  text-align: center;
  height: 90vh;
`

const Break = styled.br`
  @media all and (max-width: 62rem) {
    display: none;
  }
`

const Container = styled.div`
  padding-top: 17vh;
  @media all and (max-width: 62rem) {
    paddding-top: 1vh;
  }
`

const Heading = styled.h1 `
  font-size: 5rem;
  @media all and (max-width: 62rem) {
    font-size: 2rem;
  }
`

export default Home
