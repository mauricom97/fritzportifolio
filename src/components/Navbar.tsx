import { Avatar, HStack, Box, Text } from "@chakra-ui/react";

// Altura fixa da navbar (usar também no layout para espaçamento)
const NAVBAR_HEIGHT = "80px";

const Navbar = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      w="100%"
      h={NAVBAR_HEIGHT}
      bg="#000"
      zIndex="overlay"
      display="flex"
      alignItems="center"
      gap="4"
      px="4"
      boxShadow="sm"
    >
      <HStack gap="3">
        <Avatar.Root size="2xl">
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="/perfil-fritz.png" />
        </Avatar.Root>
      </HStack>

      <Text textStyle="3xl">Fritz Tecnologia</Text>
    </Box>
  );
};

export { NAVBAR_HEIGHT };
export default Navbar;
