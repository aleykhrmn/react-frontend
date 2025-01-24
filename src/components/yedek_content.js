import React, { useRef } from "react";
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

function Content() {
  const scrollContainerRef = useRef(null);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 150,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -150,
        behavior: "smooth",
      });
    }
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
            border: "2px solid #ccc",
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

        {/* Scroll Alanı */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#d0e7ff",
            borderRadius: "0px",
            p: 2,
            height: "250px",
            position: "relative",
            overflowX: "hidden", // Yatay taşmayı engelledik
          }}
        >
          {/* Left Scroll Button */}
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
            onClick={handleScrollLeft}
          >
            &lt;
          </Button>

          {/* Scroll Area */}
          <Box
            sx={{
              display: "flex",
              overflow: "hidden", // Prevent horizontal overflow
              width: "100%",
              gap: 2,
              px: 2,
            }}
            ref={scrollContainerRef}
          >
            {Array(5) // Here, replace this with your content, such as card elements
              .fill()
              .map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: "0 0 auto",
                    width: "175px", // Adjust width as per your requirement
                    height: "200px", // Adjust height as per your requirement
                    borderRadius: "8px",
                    overflow: "hidden",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add a subtle shadow to enhance the UI
                  }}
                >
                  {/* Customize the content for each item */}
                  <Typography variant="h6" sx={{ padding: 1 }}>
                    Item {index + 1}
                  </Typography>
                  <img
                    src="/images/aplas.png"
                    alt={`Item ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "auto", // Keep the image aspect ratio intact
                      objectFit: "cover", // Ensure the image covers the area without distortion
                    }}
                  />
                </Box>
              ))}
          </Box>

          {/* Right Scroll Button */}
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
            onClick={handleScrollRight}
          >
            &gt;
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Content;
