import Link from "next/link";
import { Button } from "@mantine/core";

const links = [
  {
    link: "/about",
    label: "Features",
  },
  {
    link: "/pricing",
    label: "Pricing",
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

export default function Demo() {
  const items = links.map((link) => (
    <Link href={link.link} passHref>
      <a component="a" href={link.link}>
        {link.label}
      </a>
    </Link>
  ));
  return (
    <>
      {items}
      <Link href="/api/hello" passHref>
        <Button component="a">Next link button</Button>
      </Link>
    </>
  );
}
