import { Box, SimpleGrid, Image, Text, Heading } from "@chakra-ui/react";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Chicken Curry",
    description: "A flavorful and spicy chicken curry made with a blend of spices and coconut milk.",
    image: "https://via.placeholder.com/150"
  },
  // Add more recipes as needed
];

const Recipes = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Recipes</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {recipes.map((recipe, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={recipe.image} alt={recipe.title} />
            <Box p={4}>
              <Heading size="md">{recipe.title}</Heading>
              <Text mt={2}>{recipe.description}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Recipes;