import GlobalStyle from '../style/globalStyle'

function MyApp({ Component, pageProps }) {

  return (
  <>
    <GlobalStyle/>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
