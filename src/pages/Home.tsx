import React from "react";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Bonjour 👋
      </Typography>
      <Typography variant="body1">
        I&apos;m Antoine, and I&apos;ve been a software engineer for 8 years.
      </Typography>
    </Container>
  );
}
