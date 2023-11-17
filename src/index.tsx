import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./lib/GlobalStyle";
import theme from "./lib/theme";
import { store, persistor } from "./state/store";

if (process.env.REACT_APP_GOOGLE_ANALYTICS) {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID ?? "");
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      retry: 0,
      refetchOnWindowFocus: false,
    },
    mutations: {
      throwOnError: true,
      retry: 0,
    },
  },
});

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CookiesProvider>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </CookiesProvider>
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
