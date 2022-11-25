import Head from 'next/head'

export default function Meta() {
  return (
    <>
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" /> 
            <meta name="robots" content="index, follow"/> 
            <link rel="icon" href="/public/favicon.ico" />
            <meta name="MobileOptimized" content="width" />
            <meta name="HandheldFriendly" content="true" />
        </Head>
    </>
  )
}
