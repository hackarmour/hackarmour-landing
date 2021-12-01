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
    Contents,
    Content_Heading,
    Content_Description,
    Content,
    List
} from '../styles/pageStyles'

const Community: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Hackarmour Community Page</title>
                <meta name="description"
                    content="The community page of hackarmour, including contribution guidelines and staff information."
                />
                <meta name="title" content="Hack Armour | Community Page" />
            </Head>
            <Hero>
                <FadeInDown>
                    <Container>
                        <Heading className="bold-fira" style={{ lineHeight: '4rem' }}>
                            Our Community
                        </Heading>
                        <Break />
                        <Description className="text">
                            The community info, contribution guidelines, and staff information.
                        </Description>
                        <br />
                        <a href="https://discord.gg/xBq4QSmjMp">
                            <Button
                                className="text-med"
                                backgroundColor="#2D5BFF"
                                fontSize={{ lg: "1.3rem", md: "1rem" }}
                            > Join Discord</Button>
                        </a>
                    </Container>
                </FadeInDown>
            </Hero>


            <FadeInDown>
                <Contents>
                    <Content>
                        <Content_Heading className="bold-fira">Community Information</Content_Heading>
                        <br />
                        <Content_Description className="text-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla a recusandae, enim qui cupiditate laboriosam voluptas et in earum fugiat molestias illum laudantium tenetur. Quaerat tenetur quas placeat alias magni.
                            <br />
                            <br />
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores cum dolorum perspiciatis magni corrupti reiciendis error, repellendus nobis rem hic! Debitis repellendus quisquam animi dolorem sequi aliquid sapiente iusto molestiae.
                            </p>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error eligendi voluptatibus quis! Veniam possimus ratione autem maiores delectus, similique aut eaque perspiciatis iusto alias ullam atque neque repellendus fuga.
                            </p>
                        </Content_Description>
                    </Content>

                    <Content>
                        <Content_Heading id="#contribution" className="bold-fira">Contribution Guidelines</Content_Heading>
                        <br />
                        <Content_Description className="text-2">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae odit expedita esse. Natus soluta expedita amet velit earum pariatur? Et sapiente earum quaerat mollitia minima corporis cupiditate dolorem eligendi quia?
                            <List>
                                <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </li>
                                <li> Natus soluta expedita amet velit earum pariatur </li>
                                <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </li>
                            </List>
                        </Content_Description>
                    </Content>
                </Contents>
            </FadeInDown>

            <Footer />
        </div>
    )
}

export default Community
