import { Heading } from "../styles/pageStyles";
import { Flex } from "@chakra-ui/react";

const Four0Four = () => {
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			height="100vh"
			bg="mocha.700"
			color="mocha.100"
		>
			<Heading>404</Heading>
			<p>Looks like there is nothing here</p>
		</Flex>
	);
}
export default Four0Four;
