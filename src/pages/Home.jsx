import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Heading>Welcome to Recipe Share</Heading>
        <Text fontSize="lg">Discover and share amazing recipes with our community.</Text>
      </VStack>
    </Box>
  );
};

export default Home;