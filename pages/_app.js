import '../src/styles/global.scss'
import Standard from '../src/styles/standard.module.scss'
import Meta from '../components/Meta/Meta'
import Axeptio from '../components/Axeptio/Axeptio'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Axeptio />
      <div id={Standard.main}>
        <div id={Standard.wrapper}>
          <Component {...pageProps} />
        </div>
      </div>  
    </>
  )
}

export default MyApp
