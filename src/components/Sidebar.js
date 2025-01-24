import React from "react";
import { Box, Button } from "@mui/material"; // MUI bileşenlerini içe aktar

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "13%", // Sidebar genişliği
        height: "100vh", // Tüm ekran yüksekliği
        backgroundColor: "#333", // Arka plan rengi
        display: "flex",
        flexDirection: "column", // Dikey düzen
        justifyContent: "center", // Ortala
        alignItems: "center", // Ortala
        marginTop: "64px",
        position: "relative", // Konumlandırmayı etkinleştir
      }}
    >
      {/* Sağdaki çizgi */}
      <Box
        sx={{
          position: "absolute",
          top: "28px", // Yukarıdan mesafe
          bottom: "100px", // Aşağıdan mesafe
          right: "0", // Sağda konumlandır
          width: "2px", // Çizgi genişliği
          backgroundColor: "#848181", // Çizgi rengi
        }}
      ></Box>
      
      {/* MUI Button bileşenlerini kullanıyoruz */}
      <Button
        variant="contained"
        sx={{
          width: "80%",
          margin: "20px 0",
          backgroundColor: "#555", // Buton rengi
          "&:hover": { backgroundColor: "#777" }, // Üzerine gelince renk değiştir
        }}
      >
        Ins.
      </Button>
      <Button
        variant="contained"
        sx={{
          width: "80%",
          margin: "20px 0",
          backgroundColor: "#555",
          "&:hover": { backgroundColor: "#777" },
        }}
      >
        History
      </Button>
      <Button
        variant="contained"
        sx={{
          width: "80%",
          margin: "20px 0",
          backgroundColor: "#555",
          "&:hover": { backgroundColor: "#777" },
        }}
      >
        Settings
      </Button>
    </Box>
  );
};

export default Sidebar;
