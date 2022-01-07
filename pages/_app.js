import { useEffect } from "react";
import "../styles/globals.scss";
/* window.innerWidth
1366 
window.innerHeight
346
*/
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
