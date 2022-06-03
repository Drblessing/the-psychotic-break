import styles from "../styles/Home.module.css";

import React, { Component, useEffect } from "react";

export default function Merch() {
  useEffect(() => {
    window.location.href = "https://the-psychotic-break.myshopify.com/";
  }, []);
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Hang On, we&apos;re sending you to our merch store!
      </h1>
    </main>
  );
}
