// components/layout.js
import Navbar from "./navbar";
import NavbarColored from "./navbar_colored";
import Footer from "./footer.js";
import { createStyles, Header, Container, Group, Burger } from "@mantine/core";

const links = [
  {
    link: "/",
    label: "About",
  },
  {
    link: "/contact",
    label: "Contact",
  },
  {
    link: "/learn",
    label: "Learn",
  },
  {
    link: "/community",
    label: "Community",
  },
];

export default function Layout({ children }) {
  return (
    <>
      <Navbar links={links} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
