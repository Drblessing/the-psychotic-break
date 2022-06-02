import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Community() {
  console.log(styles.title);
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Community Coming Soon!</h1>
      </main>
    </div>
  );
}
