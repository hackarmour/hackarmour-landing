import { Button } from "@chakra-ui/react"
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'
import { motion } from 'framer-motion'
import { FadeInDown } from "../animations"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HackArmour</title>
        {/* TODO: Meta Tags */}
      </Head>
      <motion.div initial="hidden" animate="visible" 
        variants = {FadeInDown}
        transition={{ duration: 0.3, }}
        >
      <Navbar />

      </motion.div>
      
      <Hero>
        <motion.div initial="hidden" animate="visible" 
        variants = {FadeInDown}
        transition={{ duration: 0.3, }}
        >
          <Container>
            <Heading className="bold">
              Welcome To <Break /> Hackarmour
            </Heading>
            <br />
            <Description className="text">
              We collect resources and make CTFs and cool projects related to infosec. <Break /> Currently building an Infosec search engine!
            </Description>
            <br />
            <Button
              className="text-med"
              backgroundColor="blue.400"
              fontSize="1xl"
            >Learn More</Button>
          </Container>
        </motion.div>
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
    paddding-top: 0.8vh;
  }
`

const Heading = styled.h1`
  font-size: 5rem;
  @media all and (max-width: 62rem) {
    font-size: 3rem;
  }
`

const Description = styled.p`
  font-size: 1.9rem;
  @media all and (max-width: 62rem) {
    font-size: 1.4rem;
  }
`

export default Home
