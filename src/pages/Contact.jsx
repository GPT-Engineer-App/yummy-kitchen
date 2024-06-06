import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Heading>Contact Us</Heading>
        <Text fontSize="lg">Email: info@recipeshare.com</Text>
        <Text fontSize="lg">Phone: (123) 456-7890</Text>
      </VStack>
    </Box>
  );
};

export default Contact;