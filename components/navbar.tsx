import { SimpleGrid, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import { HamburgerIcon, ExternalLinkIcon } from '@chakra-ui/icons'
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
                <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }} >
                    <Link href="/" passHref>
                        <Logo>
                            <img src="./logo.svg" alt="logo" />
                            <strong>
                                <code>HackArmour</code>
                            </strong>
                        </Logo>
                    </Link>
                    <Links className="text-2">
                        <SimpleGrid columns={3} spacing={10}>
                            <a href="https://github.com/hackarmour">GitHub</a>
                            {community ? <u><Link href="/community">Community</Link></u> : <Link href="/community">Community</Link>}
                            {about ? <u><Link href="/about">About</Link></u> : <Link href="/about">About</Link>}
                        </SimpleGrid>
                    </Links>
                    <Discord href="https://discord.gg/xBq4QSmjMp" className="text-2">
                        Discord
                    </Discord>
                    <MenuC>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon w={6} h={6} />}
                            />

                            <MenuList className="text-2">
                            <Link href="/">
                                    <MenuItem>Home</MenuItem>
                                </Link>
                                <Link href="/about">
                                    <MenuItem>About Us</MenuItem>
                                </Link>
                                <Link href="/community">
                                    <MenuItem>Community</MenuItem>
                                </Link>
                                <a href="https://github.com/hackarmour">
                                    <MenuItem icon={<ExternalLinkIcon />}>Github</MenuItem>
                                </a>
                                <a href="https://discord.gg/xBq4QSmjMp">
                                    <MenuItem icon={<ExternalLinkIcon />}>
                                        Discord
                                    </MenuItem>
                                </a>
                            </MenuList>
                        </Menu>
                    </MenuC>
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
    font-weight: bold;
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

const MenuC = styled.div`
    display: flex;
    justify-content: right;
    margin-top: auto;
    align-items: center;
    height: 100%;
    width: 100%;
    @media all and (min-width: 62rem) {
        display: none !important;
    }
`


export default Navbar