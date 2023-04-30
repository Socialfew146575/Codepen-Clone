import { useContext } from "react";
    
import React from "react";
import Editor from "./Editor";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 60vh;
`;

export default function Code() {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

  return (
    <>
      <Container>
        <Editor
          heading="HTML"
          icon="/"
          color="#ff3c41"
          value={html}
          onChange={setHtml}
        />
        <Editor
          heading="CSS"
          icon="*"
          color="#0ebeff"
          value={css}
          onChange={setCss}
        />
        <Editor
          heading="JSS"
          icon="( )"
          color="#fcd000"
          value={js}
          onChange={setJs}
        />
   
      </Container>
    </>
  );
}
