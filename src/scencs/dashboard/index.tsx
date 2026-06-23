// import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
// import { tokens } from "../../theme";
// import { mockTransactions } from "../../data/mockdata";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import Header from "../../components/Header";
// import LineChart from "../../components/LineChart";
// import GeographyChart from "../../components/GeographyChart";
// import BarChart from "../../components/Barchart";
// import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";

// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <Box sx={{ m: "20px" }}>
//       {/* HEADER */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

//         <Box>
//           <Button
//             sx={{
//               backgroundColor: colors.blueAccent[700],
//               color: colors.grey[100],
//               fontSize: "14px",
//               fontWeight: "bold",
//               padding: "10px 20px",
//             }}
//           >
//             <DownloadOutlinedIcon sx={{ mr: "10px" }} />
//             Download Reports
//           </Button>
//         </Box>
//       </Box>

//       {/* GRID & CHARTS */}
//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: "repeat(12, 1fr)",
//           gridAutoRows: "140px",
//           gap: "20px",
//         }}
//       >
//         {/* ROW 1 */}
//         <Box
//           sx={{
//             gridColumn: "span 3",
//             backgroundColor: colors.primary[400],
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <StatBox
//             title="12,361"
//             subtitle="Emails Sent"
//             progress={0.75}
//             increase="+14%"
//             icon={
//               <EmailIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>

//         <Box
//           sx={{
//             gridColumn: "span 3",
//             backgroundColor: colors.primary[400],
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <StatBox
//             title="431,225"
//             subtitle="Sales Obtained"
//             progress={0.5}
//             increase="+21%"
//             icon={
//               <PointOfSaleIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>

//         <Box
//           sx={{
//             gridColumn: "span 3",
//             backgroundColor: colors.primary[400],
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <StatBox
//             title="32,441"
//             subtitle="New Clients"
//             progress={0.3}
//             increase="+5%"
//             icon={
//               <PersonAddIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>

//         <Box
//           sx={{
//             gridColumn: "span 3",
//             backgroundColor: colors.primary[400],
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <StatBox
//             title="1,325,134"
//             subtitle="Traffic Received"
//             progress={0.8}
//             increase="+43%"
//             icon={
//               <TrafficIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>

//         {/* ROW 2 */}
//         <Box
//           sx={{
//             gridColumn: "span 8",
//             gridRow: "span 2",
//             backgroundColor: colors.primary[400],
//           }}
//         >
//           <Box
//             sx={{
//               mt: "25px",
//               p: "0 30px",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <Box>
//               <Typography
//                 variant="h5"
//                 color={colors.grey[100]}
//                 sx={{ fontWeight: 600 }}
//               >
//                 Revenue Generated
//               </Typography>

//               <Typography
//                 variant="h3"
//                 color={colors.greenAccent[500]}
//                 sx={{ fontWeight: "bold" }}
//               >
//                 $59,342.32
//               </Typography>
//             </Box>

//             <Box>
//               <IconButton>
//                 <DownloadOutlinedIcon
//                   sx={{
//                     fontSize: "26px",
//                     color: colors.greenAccent[500],
//                   }}
//                 />
//               </IconButton>
//             </Box>
//           </Box>

//           <Box sx={{ height: "250px", m: "-20px 0 0 0" }}>
//             <LineChart isDashboard={true} />
//           </Box>
//         </Box>

//         <Box
//           sx={{
//             gridColumn: "span 4",
//             gridRow: "span 2",
//             backgroundColor: colors.primary[400],
//             overflow: "auto",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               borderBottom: `4px solid ${colors.primary[500]}`,
//               p: "15px",
//             }}
//           >
//             <Typography
//               color={colors.grey[100]}
//               variant="h5"
//               sx={{ fontWeight: 600 }}
//             >
//               Recent Transactions
//             </Typography>
//           </Box>

//           {mockTransactions.map((transaction, i) => (
//             <Box
//               key={`${transaction.txId}-${i}`}
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 borderBottom: `4px solid ${colors.primary[500]}`,
//                 p: "15px",
//               }}
//             >
//               <Box>
//                 <Typography
//                   color={colors.greenAccent[500]}
//                   variant="h5"
//                   sx={{ fontWeight: 600 }}
//                 >
//                   {transaction.txId}
//                 </Typography>

//                 <Typography color={colors.grey[100]}>
//                   {transaction.user}
//                 </Typography>
//               </Box>

//               <Box color={colors.grey[100]}>{transaction.date}</Box>

//               <Box
//                 sx={{
//                   backgroundColor: colors.greenAccent[500],
//                   p: "5px 10px",
//                   borderRadius: "4px",
//                 }}
//               >
//                 ${transaction.cost}
//               </Box>
//             </Box>
//           ))}
//         </Box>

//         {/* ROW 3 */}
//         <Box
//           sx={{
//             gridColumn: "span 4",
//             gridRow: "span 2",
//             backgroundColor: colors.primary[400],
//             p: "30px",
//           }}
//         >
//           <Typography variant="h5" sx={{ fontWeight: 600 }}>
//             Campaign
//           </Typography>

//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               mt: "25px",
//             }}
//           >
//             <ProgressCircle size={125} />

//             <Typography
//               variant="h5"
//               color={colors.greenAccent[500]}
//               sx={{ mt: "15px" }}
//             >
//               $48,352 revenue generated
//             </Typography>

//             <Typography>Includes extra misc expenditures and costs</Typography>
//           </Box>
//         </Box>

//         <Box
//           sx={{
//             gridColumn: "span 4",
//             gridRow: "span 2",
//             backgroundColor: colors.primary[400],
//           }}
//         >
//           <Typography
//             variant="h5"
//             sx={{ fontWeight: 600, padding: "30px 30px 0 30px" }}
//           >
//             Sales Quantity
//           </Typography>

//           <Box sx={{ height: "250px", mt: "-20px" }}>
//             <BarChart isDashboard={true} />
//           </Box>
//         </Box>

//         <Box
//           sx={{
//             gridColumn: "span 4",
//             gridRow: "span 2",
//             backgroundColor: colors.primary[400],
//             padding: "30px",
//           }}
//         >
//           <Typography
//             variant="h5"
//             sx={{ fontWeight: 600, marginBottom: "15px" }}
//           >
//             Geography Based Traffic
//           </Typography>

//           <Box sx={{ height: "200px" }}>
//             <GeographyChart isDashboard={true} />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;

import { Box, Button, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockdata";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/Barchart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = (): React.JSX.Element => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const isSmMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdTablet = useMediaQuery(theme.breakpoints.down("md"));

  /* ✅ FIX: রিপোর্ট ডাউনলোড করার ফাংশন */
  const handleDownloadReports = () => {
    if (!mockTransactions || mockTransactions.length === 0) return;

    // CSV ফাইলের হেডার তৈরি
    const headers = ["Transaction ID", "User Name", "Date", "Cost ($)"];
    
    // ডাটাগুলোকে CSV ফরম্যাটে রূপান্তর
    const rows = mockTransactions.map(t => [
      t.txId,
      t.user,
      t.date,
      t.cost
    ]);

    // হেডার এবং রো একসাথে জোড়া দেওয়া
    const csvContent = [headers, ...rows]
      .map(e => e.map(val => `"${val}"`).join(","))
      .join("\n");

    // ফাইল ডাউনলোড করার ব্রাউজার প্রসেস
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "dashboard_transactions_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={{ m: "20px" }}>
      {/* HEADER SECTION */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isSmMobile ? "flex-start" : "center",
          gap: isSmMobile ? "15px" : "0px",
          mb: "20px"
        }}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box sx={{ width: isSmMobile ? "100%" : "auto" }}>
          <Button
            /* ✅ FIX: বাটনের সাথে ফাংশনটি যুক্ত করা হলো */
            onClick={handleDownloadReports}
            sx={{
              backgroundColor: colors.blueAccent[500],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              width: isSmMobile ? "100%" : "auto",
              "&:hover": {
                backgroundColor: colors.blueAccent[600],
              }
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: "140px",
          gap: "20px",
        }}
      >
        {/* ROW 1: STAT BOXES */}
        <Box
          sx={{
            gridColumn: isSmMobile ? "span 12" : isMdTablet ? "span 6" : "span 3",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress={0.75}
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[500], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          sx={{
            gridColumn: isSmMobile ? "span 12" : isMdTablet ? "span 6" : "span 3",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress={0.5}
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[500], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          sx={{
            gridColumn: isSmMobile ? "span 12" : isMdTablet ? "span 6" : "span 3",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress={0.3}
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[500], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          sx={{
            gridColumn: isSmMobile ? "span 12" : isMdTablet ? "span 6" : "span 3",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress={0.8}
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[500], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2: MAIN REVENUE VISUALIZATIONS */}
        <Box
          sx={{
            gridColumn: isMdTablet ? "span 12" : "span 8",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
          }}
        >
          <Box
            sx={{
              mt: "25px",
              p: "0 30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                color={colors.grey[100]}
                sx={{ fontWeight: 600 }}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                color={colors.greenAccent[500]}
                sx={{ fontWeight: "bold" }}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              {/* ✅ OPTIONAL FIX: এখানে আইকন বাটনে ক্লিক করলেও ডাউনলোড হবে */}
              <IconButton onClick={handleDownloadReports}>
                <DownloadOutlinedIcon
                  sx={{
                    fontSize: "26px",
                    color: colors.greenAccent[500],
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ height: "250px", m: "-20px 0 0 0" }}>
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* TRANSACTIONS SECTION */}
        <Box
          sx={{
            gridColumn: isMdTablet ? "span 12" : "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: `4px solid ${colors.primary[500]}`,
              p: "15px",
            }}
          >
            <Typography
              color={colors.grey[100]}
              variant="h5"
              sx={{ fontWeight: 600 }}
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: `4px solid ${colors.primary[500]}`,
                p: "15px",
              }}
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  sx={{ fontWeight: 600 }}
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  color: colors.primary[500],
                  fontWeight: "bold",
                  p: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3: SUMMARY SECTIONS */}
        <Box
          sx={{
            gridColumn: isMdTablet ? "span 12" : "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            p: "30px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Campaign
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: "25px",
            }}
          >
            <ProgressCircle size={125} />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              Includes extra misc expenditures and costs
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            gridColumn: isMdTablet ? "span 12" : "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box sx={{ height: "250px", mt: "-20px" }}>
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          sx={{
            gridColumn: isMdTablet ? "span 12" : "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            padding: "30px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box sx={{ height: "200px" }}>
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;