import Head from "next/head";
import { FadeInDown } from "../../animations";
import { Container } from "../../styles/pageStyles";
import { Spinner, Box, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Footer from "../../components/footer";

type Routes = {
	name: string;
	description: string;
	file: string;
};

const WikiIndex: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
	routes,
}) => {
	const [isSmallScreen] = useMediaQuery("(max-width: 650px)");
	return (
		<>
			<Head>
				<title>Wiki</title>
			</Head>

			<FadeInDown>
				<Container>
					{routes.length === 0 && (
						<CenteredContainer>
							<Spinner size="xl" />
						</CenteredContainer>
					)}
				</Container>
				<Flex
					alignItems="center"
					justifyContent="center"
					direction="column"
					gap="1rem"
					height="57vh"
				>
					{routes &&
						routes.map((route) => {
							return (
								<Link
									href={route.file}
									key={route.name}
									passHref
									target={"_blank"}
								>
									<Box
										cursor="pointer"
										width={isSmallScreen ? "75vw" : "40vw"}
										backgroundColor="gray.700"
										padding="15px"
										borderRadius="5px"
									>
										<Text
											fontSize="1.5rem"
											fontWeight="extrabold"
										>
											{route.name}
										</Text>
										<Text>{route.description}</Text>
									</Box>
								</Link>
							);
						})}
				</Flex>
				<Footer />
			</FadeInDown>
		</>
	);
};
export default WikiIndex;
const CenteredContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 3rem;
`;

export const getStaticProps: GetStaticProps<{ routes: Routes[] }> = async (
	context
) => {
	const routes = await (await import("../../public/content.json")).routes;
	return {
		props: { routes: routes as Routes[] },
	};
};
