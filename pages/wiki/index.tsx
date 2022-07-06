import Head from "next/head";
import { useEffect, useState } from "react";
import { FadeInDown } from "../../animations";
import { Container } from "../../styles/pageStyles";
import { Spinner, Container as ChakraContainer } from "@chakra-ui/react";
import styled from "@emotion/styled";
import axios from "axios";
import Link from "next/link";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

type Routes = {
    name: string;
    description: string;
    file: string;
};

const WikiIndex: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ routes }) => {

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
                <ChakraContainer>
                    {routes &&
                        routes.map((route) => {
                            return (
                                <Link
                                    href={route.file}
                                    key={route.name}
                                    passHref
                                    target={"_blank"}
                                >
                                    <Holder>
                                        <Title>{route.name}</Title>
                                        <Description>
                                            {route.description}
                                        </Description>
                                    </Holder>
                                </Link>
                            );
                        })}
                </ChakraContainer>
            </FadeInDown>
        </>
    );
}
export default WikiIndex
const CenteredContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 3rem;
`;

const Title = styled.h1`
	font-size: 1.1rem;
	text-align: center;
`;

const Holder = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 25px;
	border: 0.01px solid #232b3b;
	padding: 1rem;
	margin-bottom: 1rem;
	box-shadow: 1px 2px 10px 1px #232b3b;
	cursor: pointer;
	transition: 200ms ease linear;
	&:hover {
		scale: 105%;
	}
`;
const Description = styled.p`
	font-size: 0.85rem;
	margin-top: 1.25rem;
`;

export const getStaticProps: GetStaticProps<{ routes: Routes[] }> = async (context) => {
    const routes = await (await import("../../public/content.json")).routes
    return {
        props: { routes: (routes as Routes[]) }
    }
}