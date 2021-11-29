import { SimpleGrid } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { FadeInDown } from '../animations'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
    const [path, changePath]: any = useState()
    useEffect(() => {
        changePath(router.pathname)
        const handleRouteChange = (url: any) => {
            changePath(url)
        }
        router.events.on('routeChangeStart', handleRouteChange)
    }, [router.asPath])

    let about = false
    let community = false
    
    if (path == '/about') {
        about = true
    } else if (path == '/community') {
        community = true
    }

    return (
        <Nav>
            <FadeInDown>
                <SimpleGrid columns={{ sm: 1, lg: 3 }} >
                    <Logo>
                    <img src="./logo.svg" alt="logo" />
                        <Link href="/" passHref>
                            <strong>
                               <code>HackArmour</code>
                            </strong>
                        </Link>
                    </Logo>
                    <Links className="text-med">
                        <SimpleGrid columns={3} spacing={10}>
                            <a href="https://github.com/hackarmour">GitHub</a>
                            {community ? <u><Link href="/community">Community</Link></u> : <Link href="/community">Community</Link>}
                            {about ? <u><Link href="/about">About</Link></u> : <Link href="/about">About</Link>}
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