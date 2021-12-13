import { Button } from "@chakra-ui/react"
import styled from "@emotion/styled"
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
  DisplayDesktop,
  DisplayMobile
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

          <Content>
            <Content_Heading className="bold-fira">Our Team</Content_Heading>
            <Content_Description className="text-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut amet totam natus, consectetur quam excepturi delectus temporibus rem dolore dignissimos soluta nemo incidunt, inventore dolores maiores libero officiis accusamus ad hic magnam quia repellat voluptatibus beatae. Similique consequatur, quas rerum quasi autem, cupiditate, pariatur magnam sunt natus voluptate fugiat est.
            </Content_Description>
            <br />
            <MainStaff>
              <MainImageGrid>
                <img src="./ujjwal.png" alt="alt" />
              </MainImageGrid>
              <MainContentGrid>
                <MainStaffHeading className="text-2">@ujjwal-kr - Founder</MainStaffHeading>
                <Content_Description className="text-2">
                  Lead of the Engineering and Product teams of the search engine and some opensource software released. Likes web dev, system programming and reverse engineering.
                </Content_Description>
              </MainContentGrid>
            </MainStaff>

            <DisplayDesktop>
              <MainStaff>
                <MainContentGrid>
                  <MainStaffHeading className="text-2">@0xGamer - CEO</MainStaffHeading>
                  <Content_Description className="text-2">
                    CEO, operations manager and Discord Admin. Organizer and challenge creator of CTFs and some infosec tools released, enjoys pentesting and pwning boxes.
                  </Content_Description>
                </MainContentGrid>
                <MainImageGrid>
                  <img src="./gamer.png" alt="alt" />
                </MainImageGrid>
              </MainStaff>
            </DisplayDesktop>

            <DisplayMobile>
              <MainStaff>
                <MainImageGrid>
                  <img src="./gamer.png" alt="alt" />
                </MainImageGrid>
                <MainContentGrid>
                  <MainStaffHeading className="text-2">@0xGamer - CEO</MainStaffHeading>
                  <Content_Description className="text-2">
                    CEO, operations manager and Discord Admin. Organizer and challenge creator of CTFs and some infosec tools released, enjoys pentesting and pwning boxes.
                  </Content_Description>
                </MainContentGrid>
              </MainStaff>
            </DisplayMobile>


          </Content>
        </Contents>
      </FadeInDown>
      <Footer />
    </div>
  )
}

const MainStaff = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
  @media all and (max-width: 1300px) {
    padding-right: 2%;
    padding-left: 2%;
    margin-top: 2rem;
  }

  @media all and (max-width: 800px) {
    display: inline;
    text-align: center;
  }
`

const MainStaffHeading = styled.h1`
  font-size: 1.5rem;
`

const MainImageGrid = styled.div`
  width: 30%;
  @media all and (max-width: 800px) {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

const MainContentGrid = styled.div`
  margin: auto;
  width: 50%;
  @media all and (max-width: 800px) {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

export default About
