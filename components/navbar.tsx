import {
	SimpleGrid,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
	Box,
	useMediaQuery,
	Flex,
} from "@chakra-ui/react";
import { HamburgerIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import { FadeInDown } from "../animations";
import Link from "next/link";
import { useRouter } from "next/router";

const ROUTES = [
	{
		href: "https://github.com/hackarmour",
		title: "Github",
		openInNewTab: true,
	},
	{
		href: "https://ctftime.org/event/1622",
		title: "CTFs",
		openInNewTab: true,
		pathname: "/ctf",
	},
	{
		href: "/about",
		title: "About",
		openInNewTab: false,
	},
	{
		href: "/wiki",
		title: "Wiki",
		openInNewTab: false,
	},
];

const Navbar = () => {
	const router = useRouter();
	const route = router.pathname;
	const [isSmallScreen] = useMediaQuery("(max-width: 1120px)");

	return (
		<Nav>
			<FadeInDown>
				<SimpleGrid columns={isSmallScreen ? 2 : 3}>
					<Link href="/" passHref>
						<Logo>
							<img src="/logo.svg" alt="logo" />
							<strong>
								<code>HackArmour</code>
							</strong>
						</Logo>
					</Link>
					<Box
						display={isSmallScreen ? "none" : "inline"}
						textAlign="center"
						fontWeight="bold"
						margin="auto"
					>
						<SimpleGrid columns={4} spacing={10}>
							{ROUTES.map((ROUTE) => {
								return ROUTE.openInNewTab ? (
									<a
										target="_blank"
										rel="noreferrer"
										href={ROUTE.href}
										key={ROUTE.href}
										style={{
											textDecoration:
												route ===
												(ROUTE.pathname || ROUTE.href)
													? "underline"
													: "none",
										}}
									>
										{ROUTE.title}
									</a>
								) : (
									<Link href={ROUTE.href} key={ROUTE.href}>
										<a
											style={{
												textDecoration:
													route ===
													(ROUTE.pathname ||
														ROUTE.href)
														? "underline"
														: "none",
											}}
										>
											{ROUTE.title}
										</a>
									</Link>
								);
							})}
						</SimpleGrid>
					</Box>
					<Box
						textAlign="right"
						margin="auto"
						display={isSmallScreen ? "none" : "inline"}
					>
						<a 
							href="https://discord.gg/mxHtj8q3c4"
							target="_blank"
							rel="noreferrer"
							className="text-2"
						>
							Discord
						</a>
					</Box>
					<Flex
						alignItems="center"
						justifyContent="right"
						display={isSmallScreen ? "flex" : "none"}
					>
						<Menu>
							<MenuButton
								as={IconButton}
								aria-label="Options"
								icon={<HamburgerIcon w={6} h={6} />}
								marginRight="3rem"
							/>

							<MenuList className="text-2">
								<Link href="/" passHref>
									<MenuItem>Home</MenuItem>
								</Link>
								<Link href="/about" passHref>
									<MenuItem>About Us</MenuItem>
								</Link>
								<Link href="/wiki" passHref>
									<MenuItem>Wiki</MenuItem>
								</Link>
								<a
									href="https://ctftime.org/event/1622"
									target="_blank"
									rel="noreferrer"
								>
									<MenuItem icon={<ExternalLinkIcon />}>
										CTF
									</MenuItem>
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://github.com/hackarmour"
								>
									<MenuItem icon={<ExternalLinkIcon />}>
										GitHub
									</MenuItem>
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://discord.gg/mxHtj8q3c4"
								>
									<MenuItem icon={<ExternalLinkIcon />}>
										Discord
									</MenuItem>
								</a>
							</MenuList>
						</Menu>
					</Flex>
				</SimpleGrid>
			</FadeInDown>
		</Nav>
	);
};

const Nav = styled.nav`
	padding: 0.5rem;
	font-size: 1.12rem;
`;

const Logo = styled.div`
	font-size: 1.4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export default Navbar;
