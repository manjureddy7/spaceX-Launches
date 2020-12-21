import Head from "next/head";
import App from "../src/components/App";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SpaceX launch programs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This site talks about all the program launches of spaceX"
        ></meta>
      </Head>
      <App />
    </div>
  );
}
