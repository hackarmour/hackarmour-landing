import { Flex, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Footer from "../components/footer";

const Four0Four = () => {
	return (
		<>
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			height="100vh"
			bg="mocha.700"
			color="mocha.100"
		>
			<H1>404</H1>
			<p>Looks like there is nothing here</p>
		</Flex>
		<Footer/>
		</>
	);
}
export default Four0Four;

const H1 = styled.h1`
	font-family: "ArgentumSans";
	background: linear-gradient(#fff, #96b4ec);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
	font-size: 7rem;
	margin-bottom: 3rem;
`;