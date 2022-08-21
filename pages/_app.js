import '../styles/globals.css'
import { useEffect } from "react";
import '../styles/scss/carouselStyle.scss';
import '../styles/scss/carouselStyleV2.scss';
import '../styles/scss/carouselStyleV3.scss';
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/Carousel.moduleBootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import '../styles/Icons.moduleFontawesome.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
