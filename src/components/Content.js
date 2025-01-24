import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
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
  const [imagePaths, setImagePaths] = useState([]);

  const handleFolderSelect = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*"; // Sadece resim dosyalarını kabul et
    input.multiple = true;
    input.directory = true; 
    input.webkitdirectory = true;
  
    input.onchange = () => {
      const files = Array.from(input.files);
      
      // Sadece resim dosyalarını seç
      const imageFiles = files.filter((file) => file.type.startsWith("image/"));
  
      if (imageFiles.length === 0) {
        alert("Lütfen geçerli bir resim dosyası seçin.");
        return; // Eğer hiç resim dosyası seçilmediyse, işlem yapma
      }
  
      const paths = imageFiles.map((file) => URL.createObjectURL(file)); // Resim dosyaları için Object URL oluştur
      setImagePaths(paths); // State'e resim yollarını set et
    };
  
    input.click();
  };
  
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
        <Box display="flex" alignItems="center" mb={3}>
          {/* Logo */}
          <Box mr={2}>
            {" "}
            {/* Sağ tarafında bir boşluk ekleyelim */}
            <img
              src="/images/a-plas-logo.png"
              alt="A-Plas Logo"
              style={{ width: "300px", height: "auto" }}
            />
          </Box>

          {/* Buton */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#555", // Gri renk
              marginLeft: 7,
            }}
            onClick={handleFolderSelect}
          >
            Select Folder
          </Button>
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
            width: "100%",
            height: "33.5%",
            margin: "0 auto",
            backgroundColor: "#848181",
            borderRadius: "0px",
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
              style={{ width: "100%", height: "50%", padding: "10px" }}
            >
              {imagePaths.length > 0 ? (
                imagePaths.map((path, index) => (
                  <div key={index} style={{ padding: "15px" }}>
                    <img
                      src={path}
                      alt={`Fotoğraf ${index + 1}`}
                      style={{
                        aspectRatio: "1/1",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "0px",
                        padding: "5px",
                      }}
                    />
                  </div>
                ))
              ) : (
                <div>
                  <Box
                    sx={{
                      width: "100%", // Full width of its container
                      height: "100%", // Full height of the container
                      display: "flex", // Flexbox container
                      margin: "100px 50px"
                    }}
                  >
                    <Typography variant="h6" color="white">
                      No images selected
                    </Typography>
                  </Box>
                </div>
              )}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Carousel;
