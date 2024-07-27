import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Container, Stack } from "@mui/material";
import Bio from "./sections/Bio";
import WorkExperience from "./sections/WorkExperience";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Stack spacing={16}>
        <Bio />
        <WorkExperience />
      </Stack>
    </Container>
  );
}
