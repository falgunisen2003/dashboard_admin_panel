import { FC, ReactNode } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

interface StatBoxProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  progress: number;
  increase: string;
}

const StatBox: FC<StatBoxProps> = ({
  title,
  subtitle,
  icon,
  progress,
  increase,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ width: "100%", m: "0 30px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{}}>
          {icon}
          <Typography
            variant="h4"
            sx={{ color: colors.grey[100], fontWeight: "bold" }}
          >
            {title}
          </Typography>
        </Box>

        <Box sx={{}}>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: "2px" }}>
        <Typography
          variant="h5"
          sx={{ color: colors.greenAccent[500] }}
        >
          {subtitle}
        </Typography>

        <Typography
          variant="h5"
          sx={{ color: colors.greenAccent[600], fontStyle: "italic" }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;