import { FC } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ mb: "30px" }}>
      <Typography
        component="h2"
        variant="h2"
        color={colors.grey[100]}
        sx={{ m: "0 0 5px 0", fontWeight: "bold" }}
      >
        {title}
      </Typography>

      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
