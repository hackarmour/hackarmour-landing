import { SimpleGrid } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { FadeInDown } from '../animations'
import Link from 'next/link'

const Navbar = () => {
    return (
        <Nav>
            <FadeInDown>
                <SimpleGrid columns={{ sm: 1, lg: 3 }} >
                    <Logo>
                    <img src="./logo.svg" alt="logo" />
                        <Link href="/">
                            <strong>
                               <code>HackArmour</code>
                            </strong>
                        </Link>
                    </Logo>
                    <Links className="text-med">
                        <SimpleGrid columns={3} spacing={10}>
                            <a href="https://github.com/hackarmour">GitHub</a>
                            <a>Community</a>
                            <Link href="/about">About</Link>
                        </SimpleGrid>
                    </Links>
                    <Discord href="https://discord.gg/xBq4QSmjMp" className="text-med">
                        Discord
                    </Discord>
                </SimpleGrid>
            </FadeInDown>
        </Nav>
    )
}

const Nav = styled.nav`
    padding: .5rem;
    font-size: 1.12rem;
`

const Links = styled.div`
    text-align: center;
    margin: auto;
    @media all and (max-width: 62rem) {
        display: none !important;
    }
`

const Discord = styled.a`
    text-align: right;
    margin: auto;
    @media all and (max-width: 62rem) {
        display: none !important;
    }
`

const Logo = styled.div`
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`



export default Navbar