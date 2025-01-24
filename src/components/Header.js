import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { styled } from "@mui/system"; // Özelleştirilmiş stiller için

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#333", // Header arka plan rengi
        zIndex: 10, // Sidebar'ın üstünde görünmesi için
        boxShadow: "none", // Gölgeyi kaldır
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '1.5%', // Başlangıç noktasını kısaltmak için
          right: '1.5%', // Bitiş noktasını kısaltmak için
          bottom: 0,
          borderBottom: '1px solid #848181', // Alt çizgi
        },
      }}
    >
      <Toolbar
        sx={{
          height: "64px",
          display: "flex",
          justifyContent: "space-between", // İçeriği sola ve sağa hizala
          alignItems: "center", // Dikeyde ortala
          padding: "0 20px", // Yatay boşluk
        }}
      >
        {/* Başlık */}
        <Typography
          variant="h6"
          sx={{
            fontSize: "1rem", // Başlık font boyutu
            fontWeight: "normal", // İnce yazı stili
          }}
        >
          Democratised AI for Industrial Vision
        </Typography>

        {/* Sağdaki içerik */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center", // İçeriği dikeyde ortala
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontStyle: "italic", // İtalik yazı stili
              marginRight: "10px", // Logo ile boşluk
            }}
          >
            _powered by
          </Typography>
          <Box
            component="img"
            src="/images/inovako.png"
            alt="Inovako Logo"
            sx={{
              width: "130px", // Logo genişliği
              height: "auto", // Orantılı yükseklik
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
