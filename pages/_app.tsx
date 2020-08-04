import * as React from "react";
import App from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
import Alert from "react-s-alert";

// Redux...
import { Provider } from "react-redux";
import withRedux, { ReduxWrapperAppProps } from "next-redux-wrapper";
import { makeStore } from "../redux/store";

// CSS...
import reset from "../public/styles/reset";
import grid from "../public/styles/grid";
// Css Fonts
import "../public/styles/IRANSans/Farsi_numerals/webFonts/css/style.css";
import "../public/styles/IRANSans/WebFonts/css/style.css";
// Css LineAwesome
import "../public/fonts/line/css/line-awesome.min.css";
// Css FontIcon
import "../public/fonts/fontello-97f03f85/css/mizkhabar.css";
// Css carousel
import "react-multi-carousel/lib/styles.css";
// Css nprogress
import "nprogress/nprogress.css";
// s-alert
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/jelly.css";

const GlobalStyle = createGlobalStyle`
  ${grid}
  ${reset}
`;

const theme = {
  primary: "green",
};

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

class MyApp extends App<ReduxWrapperAppProps> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ...ctx });
    }

    return { pageProps: { ...pageProps } };
  }

  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }

  componentDidCatch(error, errorInfo) {
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <Alert stack={{ limit: 3 }} />
            <GlobalStyle />
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}

export default withRedux(makeStore, { debug: true })(MyApp);
