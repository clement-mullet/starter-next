/** @format */

import Head from "next/head";
import Image from "next/image";
import Standard from "../src/styles/standard.module.scss";

export default function Home() {
	return (
		<>
			<Head>
				<title>***</title>
				<meta name='description' content='***' />
				<meta property='og:site_name' content='***' />
				<meta property='og:title' content='***' />
				<meta property='og:description' content='***' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='***' />
				<meta property='og:image' content='***' />
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:site' content='***' />
				<meta name='twitter:title' content='***t' />
				<meta name='twitter:description' content='***' />
				<meta name='twitter:image' content='***' />
			</Head>
			<div className={Standard.hello}>
				<h1>Bienvenue</h1>
			</div>
		</>
	);
}
