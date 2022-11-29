import { Box, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { FadeInDown } from "../animations";
import Footer from "../components/footer";
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
  DisplayMobile,
} from "../styles/pageStyles";

const StaffImages = [
  {
    src: "/shadow.png",
    githubUsername: "Shad0wMazt3r",
    discordUsername: "ƉηѦ ł Shadow#5311",
  },
  {
    src: "/mrnight.png",
    githubUsername: "0xMrNight",
    discordUsername: "Mr Night#6181",
  },
  {
    src: "/birdie.png",
    githubUsername: "itsmebirdie",
    discordUsername: "itsmebirdie#4557",
  },
  {
    src: "/phantom.png",
    githubUsername: "PhantomKnight287",
    discordUsername: "PHANTOM KNIGHT#9254",
  },
  {
    src: "/emperor.png",
    githubUsername: "TheEmperor342",
    discordUsername: "[ᴛʜᴇ ᴇᴍᴘᴇʀᴏʀ]#5417",
  },
];

const About: NextPage = () => {
  return (
    <Box bg="mocha.700" color="mocha.100" paddingTop="3rem">
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
            <Heading className="bold-fira" style={{ lineHeight: "3.87rem" }}>
              About Our Vision
            </Heading>
            <Break />
            <Description className="text">
              We are aimed towards organizing all the infosec resources
              available.
            </Description>
            <br />
            <a href="about#contact">
              <Button
                className="text-med"
                bg="blue.300"
                _hover={{"bg": "blue.400"}}
                color="mocha.900"
                fontSize={{ lg: "1.3rem", md: "1rem" }}
              >
                Contact Us
              </Button>
            </a>
          </Container>
        </FadeInDown>
      </Hero>
      <FadeInDown>
        <Contents>
          <Content>
            <Content_Heading className="bold-fira">
              The Search Engine
            </Content_Heading>
            <br />
            <Content_Description className="text-2">
              Our primary goal is to make an outstanding infosec community where
              people can collaborate and help each other. Currently, we are
              picking up the best resources available on the internet to index
              for everyone. We are working on a search engine, which only
              indexes cybersecurity content like CVEs and exploits from different places 
              such as GitHub, Reddit and ExpoitDB, aggregating all of them 
              in one place.
              <br />
              <br />
              <p>
                Our other goal is to make quality CTF challenges so our members
                can have fun and learn with the community at the same time. We
                are also aiming to make some teams where people can collaborate
                on different projects and hone their teamwork skills. 
              </p>
            </Content_Description>
          </Content>

          <Content>
            <Content_Heading className="bold-fira">Our Team</Content_Heading>
            <Content_Description className="text-2">
             We are students, cybersec enthusiasts and developers who believe in opensource and free distribution of knowledge and resources about the art of hacking. We are open to public contributions and welcome people who want to be a part of our team. All our guides and resources will be available to contribute on GitHub, and our community is currently active on Discord. If you are an infosec aficionado and want to help us, please go through the <a href="https://github.com/hackarmour/contribution"><u>contribution page.</u></a>
            </Content_Description>
            <br />
            <MainStaff>
              <MainImageGrid>
                <img src="./staff/ujjwal.png" alt="alt" />
              </MainImageGrid>
              <MainContentGrid>
                <MainStaffHeading className="text-2">
                  <a
                    href="https://github.com/ujjwal-kr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @ujjwal-kr - Founder
                  </a>
                </MainStaffHeading>
                <Content_Description className="text-2">
                  Lead of the Engineering and Product teams of the search engine
                  and some opensource software released. Likes web dev, system
                  programming and reverse engineering.
                </Content_Description>
              </MainContentGrid>
            </MainStaff>

            <DisplayDesktop>
              <MainStaff>
                <MainContentGrid>
                  <MainStaffHeading className="text-2">
                    <a
                      href="https://github.com/0xGamer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Rishiraj - CEO
                    </a>
                  </MainStaffHeading>
                  <Content_Description className="text-2">
                    Co-Founder, Operations and Community Manager. Lead of Frontend development and Creator of some infosec tools released,
                    enjoys pentesting and web dev.
                  </Content_Description>
                </MainContentGrid>
                <MainImageGrid>
                  <img src="./staff/gamer.png" alt="alt" />
                </MainImageGrid>
              </MainStaff>
            </DisplayDesktop>

            <DisplayMobile>
              <MainStaff>
                <MainImageGrid>
                  <img src="./staff/gamer.png" alt="alt" />
                </MainImageGrid>
                <MainContentGrid>
                  <MainStaffHeading className="text-2">
                    Rishiraj - CEO
                  </MainStaffHeading>
                  <Content_Description className="text-2">
                    Co-Founder, Operations and Community Manager. Lead of Frontend development and Creator of some infosec tools released,
                    enjoys pentesting and web dev.
                  </Content_Description>
                </MainContentGrid>
              </MainStaff>
            </DisplayMobile>
          </Content>
          <Content style={{ textAlign: "center" }}>
            <br />
            <Content_Heading className="bold-fira">
              Staff Members
            </Content_Heading>
            <br />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StaffImageContainer>
                {StaffImages &&
                  StaffImages.map((image, index) => {
                    return (
                      <a
                        href={`https://github.com/${image.githubUsername}`}
                        key={index}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <StaffImg
                          src={`/staff/${image.src}`}
                          alt={image.githubUsername}
                        />
                        <p
                          style={{
                            fontFamily: "Fira Sans",
                            marginTop: "1rem",
                            fontWeight: "bold",
                          }}
                        >
                          {image.discordUsername}
                        </p>
                      </a>
                    );
                  })}
              </StaffImageContainer>
            </div>
          </Content>
        </Contents>
      </FadeInDown>
      <Footer />
    </Box>
  );
};

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
`;

const MainStaffHeading = styled.h1`
  font-size: 1.5rem;
  & a {
    text-decoration: underline;
  }
`;

const MainImageGrid = styled.div`
  width: 30%;
  @media all and (max-width: 800px) {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    & img {
      width: 310px;
    }
  }
`;

const MainContentGrid = styled.div`
  margin: auto;
  width: 50%;
  @media all and (max-width: 800px) {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const StaffImg = styled.img`
  width: 10rem;
  height: 10rem;
  /* @media all and (max-width: 900px) {
    height: 8.6rem;
  } */
`;

const StaffImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  @media all and (max-width: 350px) {
    gap: 1rem;
  }
`;

export default About;
