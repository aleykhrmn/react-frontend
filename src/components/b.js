import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import {
  Box,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function Carousel() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      p={2}
      sx={{
        backgroundColor: "#333", // Arka plan rengini değiştirdik
        height: "100vh", // Sayfa yüksekliğini ekran yüksekliğiyle sınırladık
        overflow: "hidden", // Kaydırma çubuğunu engelledik
        color: "#fff", // Metin rengini beyaza ayarladık
      }}
    >
      {/* Sol Kısım */}
      <Box
        flex="0 0 40%" // Sol kısmı %40 yapmak için flex değerini ayarladık
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        mr={2}
        ml={1}
        marginTop={2}
        sx={{ overflow: "hidden" }} // Yatay taşmayı engelledik
      >
        {/* Logo */}
        <Box mb={3}>
          <img
            src="/images/a-plas-logo.png"
            alt="A-Plas Logo"
            style={{ width: "300px", height: "auto" }}
          />
        </Box>

        {/* Tablo */}
        <Box
          sx={{
            overflowX: "auto",
            overflowY: "auto",
            border: "2px solid #ddd",
            borderRadius: "0px",
            backgroundColor: "#f9f9f9",
            maxHeight: "220px",
            width: "100%",
          }}
          mb={3}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Başlık 1</TableCell>
                <TableCell>Başlık 2</TableCell>
                <TableCell>Başlık 3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array(20)
                .fill()
                .map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>Veri {index + 1}</TableCell>
                    <TableCell>Veri {index + 1}</TableCell>
                    <TableCell>Veri {index + 1}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>

        {/* Tablo Altında Kart */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "250px",
            backgroundColor: "#f9f9f9",
            border: "2px solid #ddd",
            borderRadius: "0px",
          }}
        >
          <img
            src="/images/aplas.png"
            alt="Alt Kart Resim"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Box>

      {/* Sağ Kısım */}
      <Box
        flex="0 0 58%" // Sağ kısmın genişliğini %50 yapmak için flex değerini ayarladık
        display="flex"
        flexDirection="column"
        marginTop={2}
        sx={{
          overflow: "hidden", // Sağ kısmın yatay taşmasını engelledik
          height: "100vh", // Sayfa yüksekliğini ekranla sınırladık
        }}
      >
        {/* Sağ Üst Kart */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#2eb21a",
            color: "#000",
            height: "342px",
            border: "5px solid #2eb21a",
            borderRadius: "0px",
            textAlign: "center",
            mb: 3,
          }}
        >
          <Typography variant="h2" fontWeight="bold">
            OK
          </Typography>
          <img
            src="/images/aplas.png"
            alt="Kart Resim"
            style={{
              width: "100%",
              height: "80%", // Adjust both width and height
              objectFit: "cover", // Ensures the image is properly displayed
            }}
          />
        </Box>

        <Box
          sx={{
            width: "100%", // Kutunun genişliği
            height: "33.5%", // Yükseklik otomatik (içerik kadar)
            margin: "0 auto", // Ortaya hizalama
            backgroundColor: "#848181", // Arka plan rengi
            borderRadius: "0px", // Köşelerin yuvarlatılması
          }}
        >
          <Box
            style={{
              width: "90%",
              height: "500px",
              margin: "auto",
            }}
          >
            <Slider
              dots={false}
              infinite={false}
              speed={500}
              slidesToShow={3}
              slidesToScroll={3}
              autoplay={false}
              style={{ width: "100%", height: "50%", padding: "5px", }}
            >
              {/* İlk Fotoğraf */}
              <div style={{ height: "100%", padding: "0 10px" }}>
              <img
                  src="/images/aplas.png"
                  alt="Fotoğraf 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0px",
                    padding: "5px",
                  }}
                />
              </div>

              {/* İkinci Fotoğraf */}
              <div style={{ padding: "0 10px" }}>
                <img
                  src="/images/aplas.png"
                  alt="Fotoğraf 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0px",
                    padding: "5px"
                  }}
                />
              </div>

              {/* Üçüncü Fotoğraf */}
              <div style={{ padding: "0 10px" }}>
              <img
                  src="/images/aplas.png"
                  alt="Fotoğraf 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0px",
                    padding: "5px"
                  }}
                />
              </div>

              {/* Dördüncü Fotoğraf */}
              <div style={{ padding: "0 10px" }}>
              <img
                  src="/images/aplas.png"
                  alt="Fotoğraf 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0px",
                    padding: "5px"
                  }}
                />
              </div>

              {/* Beşinci Fotoğraf */}
              <div style={{ padding: "0 10px" }}>
              <img
                  src="/images/aplas.png"
                  alt="Fotoğraf 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0px",
                    padding: "5px"
                  }}
                />
              </div>

              {/* Altıncı Fotoğraf */}
              <div style={{ padding: "0 10px", }}>
              <img
                  src="/images/aplas.png"
                  alt="Fotoğraf 2"
                  style={{
                    width: "100%",
                    height: "100%%",
                    objectFit: "cover",
                    borderRadius: "0px",
                    padding: "5px"
                  }}
                />
              </div>
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Carousel;
