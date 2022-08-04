import type { NextPage } from "next";
import { useRouter } from "next/router";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import { FadeInDown } from "../../../animations";
import { Container } from "../../../styles/pageStyles";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import axios from "axios";
import Head from "next/head";

const components = {
	h1: (
		props: DetailedHTMLProps<
			HTMLAttributes<HTMLHeadingElement>,
			HTMLHeadingElement
		>
	) => (
		<h1
			{...props}
			style={{
				fontSize: "revert",
				fontWeight: "revert",
			}}
		/>
	),
	h2: (
		props: DetailedHTMLProps<
			HTMLAttributes<HTMLHeadingElement>,
			HTMLHeadingElement
		>
	) => (
		<h2
			{...props}
			style={{
				fontSize: "revert",
				fontWeight: "revert",
			}}
		/>
	),
	h3: (
		props: DetailedHTMLProps<
			HTMLAttributes<HTMLHeadingElement>,
			HTMLHeadingElement
		>
	) => (
		<h3
			{...props}
			style={{
				fontSize: "revert",
				fontWeight: "revert",
			}}
		/>
	),
	h4: (
		props: DetailedHTMLProps<
			HTMLAttributes<HTMLHeadingElement>,
			HTMLHeadingElement
		>
	) => (
		<h4
			{...props}
			style={{
				fontSize: "revert",
				fontWeight: "revert",
			}}
		/>
	),
	h5: (
		props: DetailedHTMLProps<
			HTMLAttributes<HTMLHeadingElement>,
			HTMLHeadingElement
		>
	) => (
		<h5
			{...props}
			style={{
				fontSize: "revert",
				fontWeight: "revert",
			}}
		/>
	),
	h6: (
		props: DetailedHTMLProps<
			HTMLAttributes<HTMLHeadingElement>,
			HTMLHeadingElement
		>
	) => (
		<h6
			{...props}
			style={{
				fontSize: "revert",
				fontWeight: "revert",
			}}
		/>
	),
};

const DynamicRepoPage: NextPage = () => {
	const { isReady, query } = useRouter();
	const [content, setContent] = useState<string>();
	const [error, setError] = useState("");
	useEffect(() => {
		console.log(query.repo);
		if (!query.repo) return;
		async function fetchRepoContent() {
			if (query.repo === ".github") {
				const content = await await axios
					.get(
						`https://raw.githubusercontent.com/hackarmour/.github/main/profile/README.md`
					)
					.catch(() => {
						setError("An Error Occured.");
					});
				if (!content) return;

				setContent((await serialize(content.data)).compiledSource);
			} else {
				const content = await await axios
					.get(
						`https://raw.githubusercontent.com/hackarmour/${query.repo}/main/README.md`
					)
					.catch(() => {
						setError("An Error Occured.");
					});
				if (!content) return;
				setContent((await serialize(content.data)).compiledSource);
			}
		}
		fetchRepoContent();
	}, [isReady]);
	return (
		<>
			<Head>
				<title>{query.repo || "Hackarmour"} - Wiki</title>
			</Head>
			<FadeInDown>
				<Container>
					{error ? (
						<h1>{error}</h1>
					) : content ? (
						<MDXRemote
							{...{ components, compiledSource: content }}
						/>
					) : null}
					<h1></h1>
				</Container>
			</FadeInDown>
		</>
	);
};
export default DynamicRepoPage;
