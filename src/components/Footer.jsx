import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="brand.800" color="white" py={4} textAlign="center">
      <Text>Contact us: info@recipeshare.com</Text>
      <Text>&copy; 2023 Recipe Share. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;