import { Text } from "@chakra-ui/react"
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
          <Text fontSize={{ lg: "7xl", sm: "5xl" }} className="bold">
            Welcome To Our  <br /> Community
          </Text>
          <br />
          <Text className="text" fontSize={{lg: "3xl"}}>
          We collect resources and make cool projects related to infosec. <br /> Currently building an Infosec search engine!
          </Text>
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

const Container = styled.div`
  padding-top: 20vh;
  @media all and (max-width: 62rem) {
    paddding-top: 1vh;
  }
`

export default Home
