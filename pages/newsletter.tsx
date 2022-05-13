import { useRef, useState } from "react";
import {
	Input,
	Button,
	Alert,
	AlertDescription,
	CloseButton,
	Flex,
	Text,
	Image,
	useMediaQuery,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Head from "next/head";
import Footer from "../components/footer";
import { FadeInDown } from "../animations";

export default function NewsLetter() {
	const emailRef = useRef(null);
	const userNameRef = useRef(null);
	const [shown, setShown] = useState(false);
	const [screenSize] = useMediaQuery("screen and (max-width: 1000px)");

	const handleSubmit = async () => {
		// handle submit
		console.log("mail submitted")
	};
	return (
		<>
			<Head>
				<title>Newsletter</title>
				<meta
					name="description"
					content="
        Subscribe to our newsletter to get the latest news and updates.
        "
				/>
				<meta name="title" content="Newsletter" />
			</Head>
			<FadeInDown>
				{shown && (
					<Alert status="success">
						<AlertDescription>
							<h1
								style={{
									fontWeight: "bold",
									textAlign: "center",
								}}
							>
								Thank you for subscribing!
							</h1>
						</AlertDescription>
						<CloseButton
							alignSelf="flex-start"
							position="relative"
							right={-1}
							top={-1}
							onClick={() => setShown(!shown)}
						/>
					</Alert>
				)}
				<Flex alignItems="center" justifyContent="center">
					<Flex alignItems="center" justifyContent="center" w="75vw">
						<Image
							src="./logo.svg"
							w="15rem"
							display={screenSize ? "none" : "block"}
						/>
						<Flex
							direction="column"
							alignItems="center"
							justifyContent="center"
						>
							<ModalContainer>
								<h3
									style={{
										fontWeight: "bold",
										fontSize: "1.4rem",
										textAlign: "center",
										marginBottom: "10px",
									}}
								>
									Get Updates About The CTF Awards
								</h3>
								<form
									onSubmit={(e) => {
										e.preventDefault();
										handleSubmit();
									}}
								>
									<Flex
										alignItems="center"
										justifyContent="center"
										flexDirection={screenSize ? "column" : "row"}
									>
										<div>
											<Input
												type="text"
												required
												placeholder="Your Name"
												ref={userNameRef}
												autoComplete="name"
												mb="5px"
												mr={screenSize ? "0px" : "5px"}
											/>
											<Input
												type="email"
												required
												placeholder="Your Email"
												ref={emailRef}
												autoComplete="email"
												mr={screenSize ? "0px" : "5px"}
											/>
										</div>
										<div>
											<Input
												type="text"
												required
												placeholder="CTF Username"
												ref={emailRef}
												mb="5px"
												ml={screenSize ? "0px" : "5px"}
												mt={screenSize ? "5px" : "0px"}
											/>
											<Input
												type="text"
												required
												placeholder="CTF Team Name"
												ref={emailRef}
												ml={screenSize ? "0px" : "5px"}
											/>
										</div>
									</Flex>
									<Button className="text-med">Submit</Button>
								</form>
							</ModalContainer>
						</Flex>
					</Flex>
				</Flex>
				<Text color="gray.400" w="100%" textAlign="center">
					<b>Note</b>: You will only receive your CTF awards if you register
					here
				</Text>
				<Footer />
			</FadeInDown>
		</>
	);
}

const ModalContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 50%;
	margin-top: 10rem;
	margin-bottom: 10rem;
	@media (max-width: 550px) {
		width: 90%;
	}
	& form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
`;
