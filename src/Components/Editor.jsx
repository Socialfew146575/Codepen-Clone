import React from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import "../App.css";

import styled from "@emotion/styled";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";

import { Controlled as ControlledEditor } from "react-codemirror2";

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  color: #aaaebc;
  background: #060606;
  font-weight: 700;
`;
const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
  transition: 1s ease-in-out;
`;

export default function Editor({ heading, icon, color, value, onChange }) {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              display: "flex",
              borderRadius: 5,
              marginRight: 5,
              placeContent: "center",
              paddingBottom: 2,
              color: "#000",
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
       {open? <CloseFullscreenIcon
      
          fontSize="small"
          style={{ alignSelf: "center", cursor: "pointer" }}
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        />:
        <OpenInFullIcon
       
          fontSize="small"
          style={{ alignSelf: "center", cursor: "pointer" }}
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        />}
      </Header>
      <ControlledEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: "material",
          lineNumbers: true,
        }}
      />
    </Container>
  );
}
