import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Box>
          <Link to="/" style={{ margin: "0 10px", color: "white" }}>Home</Link>
          <Link to="/about" style={{ margin: "0 10px", color: "white" }}>About</Link>
        </Box>
      </Flex>
      <Flex direction="column" justify="center" align="center" height="calc(100vh - 64px)">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>Start building your amazing app here.</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;