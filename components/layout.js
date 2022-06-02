// components/layout.js
import Navbar from "./navbar";
import Footer from "./footer.js";
import { createStyles, Header, Container, Group, Burger } from "@mantine/core";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
