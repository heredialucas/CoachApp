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
      <h1>Hello from the rutine!</h1>
      <Link href="../home/home">Go to home!</Link>
    </div>
  );
};

export default Home;
