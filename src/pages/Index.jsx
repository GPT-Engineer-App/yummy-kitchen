import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to RecipeShare</Heading>
        <Text fontSize="lg" textAlign="center">Discover and share amazing recipes from around the world. Join our community of food enthusiasts!</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/recipe-hero.jpg" alt="Delicious food" borderRadius="md" />
        </Box>
        <Button as={Link} to="/recipes" colorScheme="teal" size="lg" mt={6}>Explore Recipes</Button>
      </VStack>
    </Container>
  );
};

export default Index;