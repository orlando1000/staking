import React from "react";
import { Typography, useTheme } from "@mui/material";
import { Row } from "./styled-components";

export default function LanguageValue({rootStyle = {},property = "property",value = "value"}) {
  const theme = useTheme();
  return (
    <>
      <Row
        alignItems={"center"}
        justifyContent={"space-between"}
        style={{
          ...rootStyle,
          padding: "7px",
          borderRadius: 5,
          background: `linear-gradient(to right, ${theme.palette.secondary.main} , ${theme.palette.primary.main})`,
        }}
        // bgcolor="secondary.main"
      >
        <Typography variant="body2" color="common.yellow">
          {property}
        </Typography>
        <Typography variant="body2" color="common.yellow">
          {value}
        </Typography>
      </Row>
    </>
  );
}
