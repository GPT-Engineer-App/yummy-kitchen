import { Container, Text, VStack, Heading, Box, Image, SimpleGrid, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { FaUtensils } from "react-icons/fa";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    image: "/images/spaghetti-carbonara.jpg",
    link: "#"
  },
  {
    title: "Chicken Tikka Masala",
    image: "/images/chicken-tikka-masala.jpg",
    link: "#"
  },
  {
    title: "Beef Stroganoff",
    image: "/images/beef-stroganoff.jpg",
    link: "#"
  },
  {
    title: "Vegetable Stir Fry",
    image: "/images/vegetable-stir-fry.jpg",
    link: "#"
  }
];

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Recipe Share
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover and share your favorite recipes with the world!
        </Text>
        <Box as={FaUtensils} size="48px" color="teal.500" />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
          {recipes.map((recipe, index) => (
            <LinkBox key={index} as="article" p="5" borderWidth="1px" rounded="md">
              <Image src={recipe.image} alt={recipe.title} borderRadius="md" />
              <Heading size="md" my="2">
                <LinkOverlay href={recipe.link}>{recipe.title}</LinkOverlay>
              </Heading>
            </LinkBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;