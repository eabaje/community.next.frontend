//import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Html, Head, Main, NextScript } from "next/document";

import React from "react";
export default class MyDocument extends Document {
  render() {
    return (
      <>
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="description" content="" />
            <meta name="keywords" content="" />
            <meta name="author" content="Phoenixcoded" />

            {/*Favicon icon */}
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="http://localhost:3000/assets/style.css"
            />
            <link rel="stylesheet" href="/assets/css/style.css" />

            <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/assets/css/animate.min.css" />
            <link rel="stylesheet" href="/assets/css/remixicon.css" />
            <link rel="stylesheet" href="/assets/css/flaticon.css" />
            <link rel="stylesheet" href="/assets/css/jquery-ui.min.css" />
            <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
            <link rel="stylesheet" href="/assets/css/simplebar.min.css" />
            <link rel="stylesheet" href="/assets/css/metismenu.min.css" />
            <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
            <link
              rel="stylesheet"
              href="/assets/css/owl.theme.default.min.css"
            />
            <link rel="stylesheet" href="/assets/css/style.css" />
            <link rel="stylesheet" href="/assets/css/responsive.css" />
            <link
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/css/fontawesome.min.css"
              integrity="sha384-z4tVnCr80ZcL0iufVdGQSUzNvJsKjEtqYZjiQrrYKlpGow+btDHDfQWkFjoaz/Zr"
              crossOrigin="anonymous"
            ></link>
            <link
              type="text/css"
              href="/assets/css/fontawesome/font-awesome.min.css"
              rel="stylesheet"
            />
            <link
              type="text/css"
              href="/assets/css/fontawesome-6.2.0/css/all.css"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css"
            />
            {/* <link rel="stylesheet" href="/assets/css/base.css" /> */}
          </Head>
          <body>
            <Main />
            <NextScript />

            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> */}
            <script src="/assets/js/jquery.min.js"></script>
            <script src="/assets/js/bootstrap.bundle.min.js"></script>
            <script src="/assets/js/jquery.magnific-popup.min.js"></script>
            <script src="/assets/js/jquery-ui.min.js"></script>
            <script src="/assets/js/simplebar.min.js"></script>
            <script src="/assets/js/metismenu.min.js"></script>
            <script src="/assets/js/owl.carousel.min.js"></script>
            <script src="/assets/js/wow.min.js"></script>
            <script src="/assets/js/main.js"></script>
          </body>
        </Html>
      </>
    );
  }
}
// MyDocument.getInitialProps = async (ctx) => {
//   const sheets = new ServerStyleSheets();
//   const originalRenderPage = ctx.renderPage;
//   ctx.renderPage = () => {
//     return originalRenderPage({
//       enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
//     });
//   };
//   const initialProps = await Document.getInitialProps(ctx);
//   return {
//     ...initialProps,
//     styles: [
//       ...React.Children.toArray(initialProps.styles),
//       sheets.getStyleElement(),
//     ],
//   };
// };
