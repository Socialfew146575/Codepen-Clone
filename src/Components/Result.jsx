import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataProvider";

export default function Result() {

 
  
 

  const { html, css, js } = useContext(DataContext);
  const [src, setSrc] = useState("");
  const srcCode = `
    
    <html>
    <body> 
    ${html}
    </body> 
    <style>
    ${css}
    </style>
<script>
${js}
</script>
    </html>
    `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
     
    }, 1000);


    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Box style={{height:"31vh"}}>
      <iframe
        srcDoc={src}
        title="Output"
        sandbox="allow-scripts"
        width={"100%"}
        height={"100%"}
        frameborder="0"
      />
    </Box>
  );
}
