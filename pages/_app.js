import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/button.scss"
import '../styles/globals.scss';
import '../styles/mint.scss';



function MyApp({ Component, pageProps }) {
  return (
    // <Store>
      <Component {...pageProps} />
    // {/* </Store> */}

  )
}

export default MyApp
