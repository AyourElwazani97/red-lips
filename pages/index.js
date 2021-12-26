import Head from "next/head";
import Hero from "../components/hero/Hero";
import Story from "../components/OurStory/Story";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Red Lips</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero styles={styles} />
      <Story styles={styles} />
    </div>
  );
}
