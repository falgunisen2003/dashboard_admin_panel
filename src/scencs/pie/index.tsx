import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/pieChart";

const Pie: React.FC = () => {
  return (
    <Box sx={{ m: "20px" }}>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box sx={{ height: "75vh" }}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;