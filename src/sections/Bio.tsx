import React from "react";
import profilePicture from "./lafouaa.jpg";
import { Avatar, Grid, Link, Stack, Typography } from "@mui/material";

const Biography = () => (
  <Stack spacing={2}>
    <Typography variant="h4" gutterBottom>
      Bonjour 👋
    </Typography>
    <Typography variant="body1">
      I&apos;m Antoine, and I&apos;m a Paris🇫🇷-based software engineer with 8
      years of experience. I have been a senior software engineer leading the
      Shipping &amp; Logistics team at{" "}
      <Link href="https://www.backmarket.com">Back Market</Link> for 4 years.
    </Typography>
    <Typography variant="body1">
      I previously worked as an SDE at Amazon, where I first started on the
      now-called Amazonian Experience &amp; Technology (AET) team building
      employee-facing HR tooling to make Amazon employees more autonomous in
      their HR procedures. I then joined Amazon S3&apos;s storage data plane
      team, working on S3&apos;s sharding and replication feature.
    </Typography>
    <Typography variant="body1">
      The stack I currently work on is centered around Python with a Django
      monolith and FastAPI microservices, all talking to various PostgreSQL
      databases, alongside a Redis cache and a RabbitMQ mesage broker. At Amazon
      I worked more on Java technologies, and using AWS data stores such as S3
      and DynamoDB.
    </Typography>
  </Stack>
);

export default function Bio() {
  return (
    <Grid container spacing={2}>
      <Grid item md={3}>
        <Avatar
          src={profilePicture}
          alt="Antoine profile picture"
          sx={{ width: 160, height: 160 }}
        />
      </Grid>
      <Grid item md={9}>
        <Biography />
      </Grid>
    </Grid>
  );
}
