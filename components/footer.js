import React from "react";
import { createStyles, Container, Group, ActionIcon } from "@mantine/core";
import {
  BrandTwitter,
  BrandYoutube,
  BrandInstagram,
  BrandApple,
  brandSpotify,
  BrandSpotify,
} from "tabler-icons-react";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image src="/logo.png" alt="Podcast Logo" width={50} height={50} />
        <Group spacing={0} className={classes.links} position="right" noWrap>
          Listen Here!
          <ActionIcon
            size="lg"
            component="a"
            href="https://www.instagram.com/thepsychoticbreak.pod/"
          >
            <BrandInstagram size={18} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            href="https://open.spotify.com/show/5jCQqIioRyHZ45jalq74rd"
          >
            <BrandSpotify size={18} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            href="https://podcasts.apple.com/us/podcast/the-psychotic-break/id1565616045"
          >
            <BrandApple size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
