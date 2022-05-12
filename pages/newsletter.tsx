import { useRef, useState } from "react";
import {
	Input,
	Button,
	Alert,
	AlertDescription,
	CloseButton,
	Flex,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Head from "next/head";
import { db } from "../firebase";
import Footer from "../components/footer";
export default function NewsLetter() {
	const emailRef = useRef(null);
	const userNameRef = useRef(null);
	const [shown, setShown] = useState(false);
	const handleSubmit = async () => {
		const email = (emailRef.current! as any).value;
		const userName = (userNameRef.current! as any).value;
		await db.collection("newsletter").add({
			email,
			userName,
			createdAt: new Date(),
		});
		(emailRef.current! as any).value = "";
		(userNameRef.current! as any).value = "";
		setShown(true);
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
			{shown && (
				<Alert status="success">
					<AlertDescription>
						<h1
							style={{
								fontWeight: "bold",
								textAlign: "center",
								fontFamily: "'Josefin Sans', sans-serif",
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
			<Flex direction="column" alignItems="center" justifyContent="center">
				<ModalContainer>
					<h3
						style={{
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
						<Input
							type="text"
							required
							placeholder="Your Name"
							ref={userNameRef}
							autoComplete="name"
						/>
						<Input
							type="email"
							required
							placeholder="Your Email"
							ref={emailRef}
							autoComplete="email"
						/>
						<Button className="text-med">Submit</Button>
					</form>
				</ModalContainer>
			</Flex>
			<Footer />
		</>
	);
}

const ModalContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(255, 255, 255, 0.4);
	border-radius: 5px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
	width: 50%;
	padding: 1rem;
	margin-top: 20vh;
	@media (min-width: 570px) and (max-width: 767px) {
		width: 70%;
	}
	@media (max-width: 400px) {
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
