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
import axios from "axios";

export default function NewsLetter() {
  const emailRef = useRef(null);
  const userNameRef = useRef(null);
  const teamNameRef = useRef(null);
  const nameRef = useRef(null);
  const [shown, setShown] = useState(false);
  const [screenSize] = useMediaQuery("screen and (max-width: 1000px)");

  const handleSubmit = async () => {
    const email = (emailRef.current as any).value;
    const username = (userNameRef.current as any).value;
    const teamName = (teamNameRef.current as any).value;
    const name = (nameRef.current as any).value;
    const data = {
      email,
      username,
      teamName,
      name,
    };
    try {
      await axios.post("/api/newsletter", data);
      setShown(true);
    } catch (error) {
      console.log(error);
    }
    (emailRef.current as any).value = "";
    (userNameRef.current as any).value = "";
    (teamNameRef.current as any).value = "";
    (nameRef.current as any).value = "";
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
          <Flex alignItems="center" justifyContent="center" w="60vw">
            <ImageContainer>
              <Image
                src="./ctf.png"
                w="19.5rem"
                display={screenSize ? "none" : "block"}
              />
            </ImageContainer>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <ModalContainer>
                <h3
                  className="bold-fira"
                  style={{
                    fontWeight: "bolder",
                    fontSize: "1.7rem",
                    textAlign: "center",
                    marginBottom: "10px",
                  }}
                >
                  Get Updates About The CTF
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
                        ref={nameRef}
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
                        ref={userNameRef}
                        mb="5px"
                        ml={screenSize ? "0px" : "5px"}
                        mt={screenSize ? "5px" : "0px"}
                      />
                      <Input
                        type="text"
                        required
                        placeholder="CTF Team Name"
                        ref={teamNameRef}
                        ml={screenSize ? "0px" : "5px"}
                      />
                    </div>
                  </Flex>
                  <Button type="submit" className="text-med">Submit</Button>
                </form>
              </ModalContainer>
            </Flex>
          </Flex>
        </Flex>
        <Text
          className="bold-fira"
          color="gray.400"
          w="100%"
          textAlign="center"
        >
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

const ImageContainer = styled.span`
  @media (max-width: 550px) {
    display: none;
  }
`;
