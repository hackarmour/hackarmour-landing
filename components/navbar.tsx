import {
  SimpleGrid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import { FadeInDown } from "../animations";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [path, changePath]: any = useState();
  useEffect(() => {
    changePath(router.pathname);
    const handleRouteChange = (url: any) => {
      changePath(url);
    };
    router.events.on("routeChangeStart", handleRouteChange);
  }, [router.events, router.pathname]);

  let about = false;
  let ctf = false;
	let assistant = false;

  if (path == "/about")
    about = true;
  else if (path == "/ctf")
    ctf = true;
  else if (path == "/assistant") 
		assistant = true;

  return (
    <Nav>
      <FadeInDown>
        <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }}>
          <Link href="/" passHref>
            <Logo>
              <img src="./logo.svg" alt="logo" />
              <strong>
                <code>HackArmour</code>
              </strong>
            </Logo>
          </Link>
          <Links className="text-2">
            <SimpleGrid columns={4} spacing={1.2}>
              <a
                href="https://github.com/hackarmour"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {ctf ? (
                <u>
                  <Link href="/ctf">CTFs</Link>
                </u>
              ) : (
                <Link href="/ctf">CTFs</Link>
              )}
              {about ? (
                <u>
                  <Link href="/about">About</Link>
                </u>
              ) : (
                <Link href="/about">About</Link>
              )}
							{assistant ? (
                <u>
                  <Link href="/assistant">Assistant</Link>
                </u>
              ) : (
                <Link href="/assistant">Assistant</Link>
              )}
            </SimpleGrid>
          </Links>
          <Discord
            href="https://discord.gg/xBq4QSmjMp"
            target="_blank"
            rel="noreferrer"
            className="text-2"
          >
            Discord
          </Discord>
          <MenuC>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon w={6} h={6} />}
              />

              <MenuList className="text-2">
                <Link href="/" passHref>
                  <MenuItem>Home</MenuItem>
                </Link>
                <Link href="/about" passHref>
                  <MenuItem>About Us</MenuItem>
                </Link>
                <Link href="/ctf" passHref>
                  <MenuItem>CTFs</MenuItem>
                </Link>
								<Link href="/assistant" passHref>
									<MenuItem>Assistant</MenuItem>
								</Link>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/hackarmour"
                >
                  <MenuItem icon={<ExternalLinkIcon />}>GitHub</MenuItem>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord.gg/xBq4QSmjMp"
                >
                  <MenuItem icon={<ExternalLinkIcon />}>Discord</MenuItem>
                </a>
              </MenuList>
            </Menu>
          </MenuC>
        </SimpleGrid>
      </FadeInDown>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 0.5rem;
  font-size: 1.12rem;
`;

const Links = styled.div`
  text-align: center;
  font-weight: bold;
  margin: auto;
  @media all and (max-width: 62rem) {
    display: none !important;
  }
`;

const Discord = styled.a`
  text-align: right;
  margin: auto;
  @media all and (max-width: 62rem) {
    display: none !important;
  }
`;

const Logo = styled.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

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
`;

export default Navbar;
