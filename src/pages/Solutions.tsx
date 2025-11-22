import {
  Heading,
  Badge,
  Box,
  Button,
  Card,
  HStack,
  Image,
  Center,
} from "@chakra-ui/react";

const Solutions = () => (
  <>
    <Center>
      <Heading m="8" size="4xl">
        Nossas Soluções
      </Heading>
    </Center>
    <Box
      display="flex"
      gap="4"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      padding="4"
    >
      {/* Cada card ocupa pelo menos 320px e cresce para preencher o espaço */}
      <Card.Root
        flexDirection="row"
        overflow="hidden"
        flex="1 1 320px"
        minW="280px"
        maxW="xl"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", md: "200px" }}
          src="/imagem-controle-pratico.jpg"
          alt="Caffe Latte"
          display={{ base: "none", md: "block" }}
        />
        <Box>
          <Card.Body>
            <Card.Title mb="2">Controle Pratico</Card.Title>
            <Card.Description>
              Solução feita para facilitar a gestão financeira da sua empresa.
            </Card.Description>
            <HStack mt="4">
              <Badge>Automação</Badge>
              <Badge>Praticidade</Badge>
            </HStack>
          </Card.Body>
          <Card.Footer>
            <Button>Ir para solução</Button>
          </Card.Footer>
        </Box>
      </Card.Root>

      <Card.Root
        flexDirection="row"
        overflow="hidden"
        flex="1 1 320px"
        minW="280px"
        maxW="xl"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", md: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
          display={{ base: "none", md: "block" }}
        />
        <Box>
          <Card.Body>
            <Card.Title mb="2">QRCoffe</Card.Title>
            <Card.Description>
              Ferramenta para gerenciamento de pedidos da sua cafeteria e
              restaurantes.
            </Card.Description>
            <HStack mt="4">
              <Badge>Automação</Badge>
              <Badge>Praticidade</Badge>
            </HStack>
          </Card.Body>
          <Card.Footer>
            <Button>Ir para solução</Button>
          </Card.Footer>
        </Box>
      </Card.Root>
    </Box>
  </>
);

export default Solutions;
