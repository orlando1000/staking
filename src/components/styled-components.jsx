import { Button, styled, Box, Input } from "@mui/material";

export const CButton = styled(Button)({
  background:
    "linear-gradient(90deg, #FA5E06 3.86%, rgba(255, 186, 10, 0.99) 100%)",
  borderRadius: 10,
  color: "white",
  textTransform: "none",
});

export const CButtonOutlined = styled(Button)(({ theme }) => ({
  borderColor:
    "linear-gradient(90deg, #FA5E06 3.86%, rgba(255, 186, 10, 0.99) 100%)",
  borderRadius: 10,
  color: theme.palette.common.orange,
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.common.orange}`,
}));

export const Row = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const Column = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export const CInput = styled(Input)(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: theme.palette.common.yellow,
  padding: "5px 10px",
  backgroundColor: "#221902", //theme.palette.primary.main,
  borderRadius: 5,
}));
