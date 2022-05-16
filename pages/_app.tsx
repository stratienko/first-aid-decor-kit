import { appWithTranslation } from "next-i18next";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppLayout } from "common/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default appWithTranslation(MyApp);
