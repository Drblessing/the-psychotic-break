// components/layout.js
import Navbar from "./navbar";
import ResponsiveNavbar from "./header.js";
import Footer from "./footer.js";
import { createStyles, Header, Container, Group, Burger } from "@mantine/core";

const links = [
  {
    link: "/",
    label: "About",
  },
  {
    link: "/merchandise",
    label: "Merch",
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
      <ResponsiveNavbar links={links} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
