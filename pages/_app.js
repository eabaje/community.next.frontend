//import "../styles/globals.css";
import GlobalProvider from "../context/Provider";
import { AuthContextProvider } from "../context/AuthContext";
import Slide from "@material-ui/core/Slide";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();
  return (
    <GlobalProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </GlobalProvider>
  );
};
export default App;
