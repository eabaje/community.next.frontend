//import "../styles/globals.css";
import GlobalProvider from "../context/Provider";
import { AuthContextProvider } from "../context/AuthContext";
import Slide from "@material-ui/core/Slide";

const App = ({ Component, pageProps }) => {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
};
export default App;
