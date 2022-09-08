import { Box } from "@mui/material";
import React from "react";

const Item = (props) => {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "##121929" : "#121929",
        borderRadius: "8px",
        m: 1,
        padding: "30px",
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
};

export default Item;
