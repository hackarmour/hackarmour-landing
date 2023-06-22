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

  var about = false;
	var ctf = false;
	var transparency = 1;

	switch (path) {
		case "/":
			var transparency = 0
			break;
		case "/about":
			var about = true;
			break;
		case "/ctf":
			var ctf = true;
			break;
	}

	return (
		<Nav>
			<FadeInDown>
				<SimpleGrid columns={{ base: 2, md: 2, lg: 3 }} color="mocha.100" bg={`rgba(24, 24, 37, ${transparency})`}>
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
							<a
								href="https://github.com/hackarmour"
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
							{ctf ? (
								<u>
									<a
										href="https://odyssey.hackarmour.com/"
										target="_blank"
										rel="noreferrer"
									>
										CTFs
									</a>
								</u>
							) : (
								<a
									href="https://ctftime.org/event/1622"
									target="_blank"
									rel="noreferrer"
								>
									CTFs
								</a>
							)}
							{about ? (
								<u>
									<Link href="/about">About</Link>
								</u>
							) : (
								<Link href="/about">About</Link>
							)}
						</SimpleGrid>
					</Links>
					<Discord
						href="https://discord.gg/mxHtj8q3c4"
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
								colorScheme="Black"
								icon={<HamburgerIcon w={6} h={6} />}
							/>

							<MenuList className="text-2" bg="mocha.800" color="mocha.100">
								<Link href="/" passHref>
									<MenuItem _focus={{"bg": "mocha.700"}}>Home</MenuItem>
								</Link>
								<Link href="/about" passHref>
									<MenuItem _hover={{"bg": "mocha.900"}} _focus={{"bg": "mocha.700"}}>About Us</MenuItem>
								</Link>
								<a
									href="https://ctftime.org/event/1622"
									target="_blank"
									rel="noreferrer"
								>
									<MenuItem _hover={{"bg": "mocha.900"}} _focus={{"bg": "mocha.700"}} icon={<ExternalLinkIcon />} >CTF</MenuItem>
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://github.com/hackarmour"
								>
									<MenuItem _hover={{"bg": "mocha.900"}} _focus={{"bg": "mocha.700"}} icon={<ExternalLinkIcon />} >GitHub</MenuItem>
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://discord.gg/mxHtj8q3c4"
								>
									<MenuItem _hover={{"bg": "mocha.900"}} _focus={{"bg": "mocha.700"}} icon={<ExternalLinkIcon />} >Discord</MenuItem>
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
	z-index: 1;
	font-size: 1.12rem;
	position: fixed;
	width: 100%;
	top: 0%;
`;

const Links = styled.div`
	text-align: center;
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
