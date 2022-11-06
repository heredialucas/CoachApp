import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coach App</title>
        <meta name="description" content="Coach App" />
      </Head>
      <h1>Hello from the home!</h1>
      <Link href="../create/plain">Go to plain</Link>
      <br />
      <br />
      <Link href="../create/rutine">Go to rutine</Link>
      <br />
      <br />
      <Link href="../create/exercise">Go to exercise</Link>
      <br />
      <br />
    </div>
  );
};

export default Home;
