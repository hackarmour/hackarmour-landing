import styled from "@emotion/styled";
import { Heading } from "../styles/pageStyles";
import Link from "next/link";

const Four0Four = () => {
	return (
		<Centered>
			<Heading>404</Heading>
			<p>Looks like there is nothing here</p>
		</Centered>
	);
}
const Centered = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 80vh;
`
export default Four0Four;
