import { IconButton, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaNewspaper, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<div
			id="contact"
			style={{ textAlign: "center", width: "100%", padding: 2.5 + "rem" }}
		>
			<Flex alignItems="center" justifyContent="center" fontSize="1.2rem">
				<br />
				<a href="https://twitter.com/hackarmour">
					<IconButton aria-label="Twitter" icon={<FaTwitter />} mr="10px" bg="mocha.900" _hover={{"bg":"mocha.800"}} />
				</a>
				<a href="https://github.com/hackarmour">
					<IconButton aria-label="GitHub" icon={<FaGithub />} mr="10px" bg="mocha.900" _hover={{"bg":"mocha.800"}} />
				</a>
				<a href="https://www.linkedin.com/company/hackarmour">
					<IconButton aria-label="GitHub" icon={<FaLinkedin />} mr="10px" bg="mocha.900" _hover={{"bg":"mocha.800"}} />
				</a>
				
			</Flex>
			<br />
			<a className="bold-fira" href="mailto:staff@hackarmour.com">
				staff@hackarmour.com
			</a>
		</div>
	);
};

export default Footer;
