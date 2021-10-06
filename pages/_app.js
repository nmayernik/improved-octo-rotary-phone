import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Nick Mayernik</title>
        <meta
          name="Description"
          content="UX Researcher and recent graduate of Lafayette College."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
