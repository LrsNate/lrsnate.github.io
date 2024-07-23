import React from "react";
import "./App.css";
import Bio from "./sections/Bio";
import { Container, Stack } from "@mui/material";
import WorkExperience from "./sections/WorkExperience";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Stack spacing={16}>
          <Bio />
          <WorkExperience />
        </Stack>
      </Container>
    </>
  );
}

export default App;
