import { Grid, SimpleGrid, Container } from "@mantine/core";
import Head from "next/head";
// import Image from "next/image";
import { Text } from "@mantine/core";

import { Image } from "@mantine/core";
import Link from "next/link";

import styles from "../styles/Home.module.css";

function ProfilePic({ name, about, src }) {
  return (
    <div>
      <Image
        priority
        align="center"
        src={src}
        height={1080 / 2}
        width={811 / 2}
        alt="Madey"
      />
      <Text
        align="center"
        variant="gradient"
        gradient={{ from: "blue", to: "yellow", deg: 100 }}
        size="xl"
        weight={700}
        style={{ fontFamily: "Greycliff CF, sans-serif" }}
      >
        <h1>{name}</h1>
      </Text>
      <Text color="#1971C2" align="center" size="md">
        <h3>{about}</h3>
      </Text>
    </div>
  );
}

export default function Home() {
  const aboutMadey = `Rising senior at the University of California, Berkeley`;
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <title>The Psychotic Break</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome breakers to{" "}
          <a href="https://open.spotify.com/show/5jCQqIioRyHZ45jalq74rd">
            The Psychotic Break!
          </a>
          <br></br>
          <br></br>
          <Image
            src="/logo.png"
            alt="Podcast Logo"
            align="center"
            width={626 / 1.2}
            height={626 / 1.2}
          />
          <br></br>
        </h1>
        <Container size={1200}>
          <SimpleGrid cols={2} spacing="sm">
            <div>
              <ProfilePic
                name="Madey Quinn"
                about={aboutMadey}
                src="/madey_rounded.png"
              />
            </div>
            <div>
              <ProfilePic
                name="Kimi Eng"
                about="Part-time Canadian"
                src="/kimi_rounded.png"
              />
            </div>
          </SimpleGrid>
        </Container>

        {/* <p className={styles.description}>Get started with </p> */}

        <div className={styles.grid}>
          <Link href="/contact">
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Contact Us &rarr;</h2>
              <p>
                Schedule an in-depth consultation for counseling! Not medical
                advice.{" "}
              </p>
            </a>
          </Link>
          <Link href="/learn" passHref>
            <a className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>
                Apply psychology to be happier and more fulfilled in your daily
                life!
              </p>
            </a>
          </Link>
          <Link href="/community" passHref>
            <a className={styles.card}>
              <h2>Community &rarr;</h2>
              <p>
                Interact with all the listeners & psychotic breakers in our
                discord and other platforms.
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
