import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Welcome to Khazana Restaurant, where culinary excellence meets exceptional dining experiences. Nestled in the heart of Delhi, our restaurant is renowned for its delectable cuisine, inviting ambiance, and unparalleled service. With a passion for culinary innovation, our talented chefs meticulously craft each dish using the finest locally sourced ingredients, ensuring a harmonious fusion of flavors that will tantalize your taste buds. From mouthwatering appetizers to sumptuous main courses and irresistible desserts, our diverse menu caters to every palate, offering a delightful array of options for both meat lovers and vegetarians alike. Complemented by an extensive selection of premium wines and signature cocktails, dining at Khazana Restaurant promises to be a feast for the senses. Whether you're celebrating a special occasion, enjoying a romantic dinner for two, or simply seeking a memorable culinary experience, we invite you to join us and indulge in a gastronomic journey like no other. Discover the art of exquisite dining at Khazana Restaurant and let us create unforgettable moments that will leave you longing for more.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
