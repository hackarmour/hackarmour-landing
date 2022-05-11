import { useRef, useState } from "react";
import {
  Input,
  Button,
  Alert,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Head from "next/head";
import { db } from "../firebase";
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
      <Centered>
        <ModalContainer>
          <h3
            style={{
              fontFamily: "'Josefin Sans'",
              fontSize: "1.4rem",
              textAlign: "center",
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
            <Button type="submit">Submit</Button>
          </form>
        </ModalContainer>
      </Centered>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const Centered = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled(Centered)`
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #ccc;
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
