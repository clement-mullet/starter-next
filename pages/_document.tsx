import Document, {Head, Main, NextScript, Html} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang='fr'>
                <Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Head>
            </Html>
        )
    }
}

export default MyDocument;