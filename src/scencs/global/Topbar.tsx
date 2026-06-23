// import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
// import { useContext } from "react";
// import { ColorModeContext, tokens } from "../../theme";
// import InputBase from "@mui/material/InputBase";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/icons-material/Search";

// interface TopbarProps {
//   setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const Topbar = ({ setIsSidebar }: TopbarProps): React.JSX.Element => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const colorMode = useContext(ColorModeContext);
  
//   // Check if the screen size is mobile (sm down)
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box 
//       sx={{ 
//         display: "flex", 
//         justifyContent: "space-between", 
//         p: isMobile ? 1 : 2, // Less padding on mobile
//         gap: 1 
//       }}
//     >
//       {/* SEARCH BAR */}
//       <Box
//         sx={{ 
//           display: "flex", 
//           backgroundColor: colors.primary[400], 
//           borderRadius: "3px",
//           flex: isMobile ? "0 1 auto" : "unset" // Prevents breaking on tight screens
//         }}
//       >
//         <InputBase
//           sx={{ ml: isMobile ? 1 : 2, flex: 1 }}
//           placeholder={isMobile ? "" : "Search"} // Hide text placeholder on mobile
//         />
//         <IconButton type="button" sx={{ p: 1 }}>
//           <SearchIcon />
//         </IconButton>
//       </Box>

//       {/* ICONS */}
//       <Box sx={{ display: "flex", gap: isMobile ? 0.5 : 1 }}>
//         <IconButton onClick={colorMode.toggleColorMode} size={isMobile ? "small" : "medium"}>
//           {theme.palette.mode === "dark" ? (
//             <DarkModeOutlinedIcon />
//           ) : (
//             <LightModeOutlinedIcon />
//           )}
//         </IconButton>
        
//         <IconButton size={isMobile ? "small" : "medium"}>
//           <NotificationsOutlinedIcon />
//         </IconButton>

//         {/* Hide non-essential buttons on super small screens to save space */}
//         {!isMobile && (
//           <>
//             <IconButton size="medium">
//               <SettingsOutlinedIcon />
//             </IconButton>
//             <IconButton size="medium">
//               <PersonOutlinedIcon />
//             </IconButton>
//           </>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default Topbar;





import { Box, IconButton, useTheme, useMediaQuery, Menu, MenuItem, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
/* ✅ useNavigate ইম্পোর্ট করা হলো যাতে বাটনে ক্লিক করলে অন্য পেজে যাওয়া যায় */
import { useNavigate } from "react-router-dom"; 
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
  const navigate = useNavigate(); // ✅ Navigation এর জন্য ইনিশিয়ালাইজ করা হলো
  
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // State handles
  const [notiAnchor, setNotiAnchor] = useState<null | HTMLElement>(null);
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);

  const handleNotiClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setNotiAnchor(event.currentTarget);
  };
  const handleNotiClose = () => {
    setNotiAnchor(null);
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfileAnchor(event.currentTarget);
  };
  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  return (
    <Box 
      sx={{ 
        display: "flex", 
        justifyContent: "space-between", 
        p: isSmallMobile ? 1 : 2, 
        alignItems: "center",
        width: "100%",
        pr: isSmallMobile ? "10px" : "20px" 
      }}
    >
      {/* SEARCH BAR */}
      <Box
        sx={{ 
          display: "flex", 
          backgroundColor: colors.primary[400], 
          borderRadius: "3px",
          maxWidth: isSmallMobile ? "120px" : "250px",
          flex: 1
        }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          placeholder={isSmallMobile ? "" : "Search"} 
        />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box 
        sx={{ 
          display: "flex", 
          gap: isSmallMobile ? "2px" : isTabletOrMobile ? "5px" : "10px" 
        }}
      >
        <IconButton onClick={colorMode.toggleColorMode} size={isTabletOrMobile ? "small" : "medium"}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        
        {/* NOTIFICATION BUTTON */}
        <IconButton onClick={handleNotiClick} size={isTabletOrMobile ? "small" : "medium"}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={notiAnchor}
          open={Boolean(notiAnchor)}
          onClose={handleNotiClose}
          disableScrollLock={true}
        >
          {/* ✅ FIX: মেনু আইটেমে ক্লিক করলে এখন আপনার প্রজেক্টের নির্দিষ্ট পেজে নিয়ে যাবে */}
          <MenuItem onClick={() => { handleNotiClose(); navigate("/team"); }}>
            <Typography variant="body2">New user registered (View Team)</Typography>
          </MenuItem>
          <MenuItem onClick={() => { handleNotiClose(); navigate("/invoices"); }}>
            <Typography variant="body2">Report generated (View Invoices)</Typography>
          </MenuItem>
          <MenuItem onClick={() => { handleNotiClose(); navigate("/faq"); }}>
            <Typography variant="body2">Server restarted successfully (Go to FAQ)</Typography>
          </MenuItem>
        </Menu>

        {/* SETTINGS BUTTON */}
        <IconButton onClick={() => navigate("/form")} size={isTabletOrMobile ? "small" : "medium"}>
          <SettingsOutlinedIcon />
        </IconButton>

        {/* PROFILE BUTTON */}
        <IconButton onClick={handleProfileClick} size={isTabletOrMobile ? "small" : "medium"}>
          <PersonOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={profileAnchor}
          open={Boolean(profileAnchor)}
          onClose={handleProfileClose}
          disableScrollLock={true}
        >
          {/* ✅ FIX: প্রোফাইল মেনুর আইটেমগুলোতে ক্লিক রাউটিং যুক্ত করা হলো */}
          <MenuItem onClick={() => { handleProfileClose(); navigate("/form"); }}>My Profile (Form)</MenuItem>
          <MenuItem onClick={() => { handleProfileClose(); navigate("/calendar"); }}>My Calendar</MenuItem>
          <MenuItem onClick={() => { handleProfileClose(); navigate("/"); }} sx={{ color: "red" }}>Logout to Dash</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;