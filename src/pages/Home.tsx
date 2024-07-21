import React from "react";
import { Container, Link, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Stack spacing={2}>
        <Typography variant="h3" gutterBottom>
          Bonjour 👋
        </Typography>
        <Typography variant="body1">
          I&apos;m Antoine, and I&apos;m a Paris 🇫🇷-based software engineer with
          8 years of experience. I have been a senior software engineer leading
          the Shipping &amp; Logistics team at{" "}
          <Link href="https://www.backmarket.com">Back Market</Link> for 4
          years, with a Python-centered stack.
        </Typography>
        <Typography variant="body1">
          I previously worked as an SDE at Amazon, where I first started on the
          now-called People eXperience team building employee-facing HR tooling
          to make Amazon employees more autonomous in their HR procedures. I
          then joined Amazon S3&apos;s storage data plane team, working on
          S3&apos;s sharding and replication feature.
        </Typography>
      </Stack>
    </Container>
  );
}
