import { Button } from "@chakra-ui/react"
import type { NextPage } from 'next'
import Head from 'next/head'
import { FadeInDown } from '../animations'
import Footer from "../components/footer"
import {
  Hero,
  Container,
  Heading,
  Break,
  Description,
  Content_Description,
  Content_Heading,
  Content,
  Contents,
} from '../styles/pageStyles'

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="About hackarmour, hackarmour CTF and the infosec search engine."
        />
        <meta name="title" content="Hack Armour | About Us" />
      </Head>
      <Hero>
        <FadeInDown>
          <Container>
            <Heading className="bold-fira" style={{ lineHeight: '3.87rem' }}>
              About Our Vision
            </Heading>
            <Break />
            <Description className="text">
              We are aimed towards organizing all the infosec resources available.
            </Description>
            <br />
            <a href="about#contact">
              <Button
                className="text-med"
                backgroundColor="#2D5BFF"
                fontSize={{ lg: "1.3rem", md: "1rem" }}
              >Contact Us</Button>
            </a>
          </Container>
        </FadeInDown>
      </Hero>
      <FadeInDown>
        <Contents>
          <Content>
            <Content_Heading className="bold-fira">The Search Engine</Content_Heading>
            <br />
            <Content_Description className="text-2">
              Our primary goal is to make an outstanding infosec community where people can collaborate and help each other. Currently, we are picking up the best resources available on the internet to index for everyone. We are working on a search engine, which only indexes cybersecurity content from different places like GitHub, Reddit, CVEs, and exploits, aggregating all of them in one place.                <br />
              <br />
              <p>
                Our other goal is to make quality CTF challenges so our members can have fun and learn with the community at the same time. We are also aiming to make some teams where people can collaborate on different projects for example the &quot;malware team&quot; may work together in making malware-based challenges.
              </p>
            </Content_Description>
          </Content>
        </Contents>
      </FadeInDown>
      <Footer />
    </div>
  )
}

export default About
