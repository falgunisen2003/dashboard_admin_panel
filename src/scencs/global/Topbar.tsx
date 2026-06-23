import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

interface TopbarProps {
  setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({ setIsSidebar }: TopbarProps): React.JSX.Element => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  
  // Check if the screen size is mobile (sm down)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box 
      sx={{ 
        display: "flex", 
        justifyContent: "space-between", 
        p: isMobile ? 1 : 2, // Less padding on mobile
        gap: 1 
      }}
    >
      {/* SEARCH BAR */}
      <Box
        sx={{ 
          display: "flex", 
          backgroundColor: colors.primary[400], 
          borderRadius: "3px",
          flex: isMobile ? "0 1 auto" : "unset" // Prevents breaking on tight screens
        }}
      >
        <InputBase
          sx={{ ml: isMobile ? 1 : 2, flex: 1 }}
          placeholder={isMobile ? "" : "Search"} // Hide text placeholder on mobile
        />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box sx={{ display: "flex", gap: isMobile ? 0.5 : 1 }}>
        <IconButton onClick={colorMode.toggleColorMode} size={isMobile ? "small" : "medium"}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        
        <IconButton size={isMobile ? "small" : "medium"}>
          <NotificationsOutlinedIcon />
        </IconButton>

        {/* Hide non-essential buttons on super small screens to save space */}
        {!isMobile && (
          <>
            <IconButton size="medium">
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton size="medium">
              <PersonOutlinedIcon />
            </IconButton>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Topbar;