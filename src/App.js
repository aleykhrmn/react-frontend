import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          height: "100vh", // Sayfanın yüksekliğini ekran yüksekliğiyle sınırlıyoruz
          overflow: "hidden", // Kaydırma çubuğunu kaldırıyoruz
        }}
      >
        <Sidebar />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            paddingTop: "64px",
            overflowY: "auto", // İçeriğin kaymasını sağlar, ancak dışarıdan kaydırma çubuğunu engeller
          }}
        >
          <Header />
          <Content />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
