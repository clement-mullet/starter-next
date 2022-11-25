/** @format */

import Standard from "../src/styles/standard.module.scss";
import Meta from "../components/Meta/Meta";
import Axeptio from "../components/Axeptio/Axeptio";
import { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Meta />
			{/* <Axeptio /> */}
			<div id={Standard.main}>
				<div id={Standard.wrapper}>
					<Component {...pageProps} />
				</div>
			</div>
		</>
	);
}
