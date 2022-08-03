import styled from "@emotion/styled";
import { Heading } from "@chakra-ui/react";

const Four0Four = () => {
	return (
		<Centered>
			<Heading fontFamily="bungee" fontSize="6em">
				404
			</Heading>
			<p>There is nothing here</p>
		</Centered>
	);
};
const Centered = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 80vh;
`;
export default Four0Four;
