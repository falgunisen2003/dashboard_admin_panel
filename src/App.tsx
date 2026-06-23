// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import { CssBaseline, ThemeProvider } from "@mui/material";

// import Topbar from "./scencs/global/Topbar";
// import Sidebar from "./scencs/global/Sidebar";
// import Dashboard from "./scencs/dashboard";
// import Team from "./scencs/team";
// import Invoices from "./scencs/invoices";
// import Contacts from "./scencs/contacts";
// import Bar from "./scencs/bar";
// import Form from "./scencs/form";
// import Line from "./scencs/line";
// import Pie from "./scencs/pie";
// import FAQ from "./scencs/faq";
// import Geography from "./scencs/geography";
// import Calendar from "./scencs/calendar/calendar";

// import { ColorModeContext, useMode } from "./theme";

// const App: React.FC = () => {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState<boolean>(true);

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
//           {/* cast props to any to satisfy TS without changing other files */}
//           <Sidebar {...({ isSidebar } as any)} />
//           <main className="content">
//             <Topbar {...({ setIsSidebar } as any)} />
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/team" element={<Team />} />
//               <Route path="/contacts" element={<Contacts />} />
//               <Route path="/invoices" element={<Invoices />} />
//               <Route path="/form" element={<Form />} />
//               <Route path="/bar" element={<Bar />} />
//               <Route path="/pie" element={<Pie />} />
//               <Route path="/line" element={<Line />} />
//               <Route path="/faq" element={<FAQ />} />
//               <Route path="/calendar" element={<Calendar />} />
//               <Route path="/geography" element={<Geography />} />
//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// };

// export default App;









import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Topbar from "./scencs/global/Topbar";
import Sidebar from "./scencs/global/Sidebar";
import Dashboard from "./scencs/dashboard";
import Team from "./scencs/team";
import Invoices from "./scencs/invoices";
import Contacts from "./scencs/contacts";
import Bar from "./scencs/bar";
import Form from "./scencs/form";
import Line from "./scencs/line";
import Pie from "./scencs/pie";
import FAQ from "./scencs/faq";
import Geography from "./scencs/geography";
import Calendar from "./scencs/calendar/calendar";

import { ColorModeContext, useMode } from "./theme";

const App: React.FC = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState<boolean>(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* cast props to any to satisfy TS without changing other files */}
          <Sidebar {...({ isSidebar } as any)} />
          <main className="content">
            <Topbar {...({ setIsSidebar } as any)} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
