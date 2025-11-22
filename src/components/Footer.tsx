"use client";
import {
  Box,
  Text,
  VStack,
  HStack,
  Link,
  Grid,
  GridItem,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      as="footer"
      w="100%"
      bg="#000000ff"
      color="white"
      py="8"
      borderTop="2px solid"
      borderColor="FFF"
    >
      <Box maxW="1200px" mx="auto" px="4">
        {/* Seção Principal */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(4, 1fr)",
          }}
          gap={8}
          mb={6}
        >
          {/* Coluna 1 - Sobre a Empresa */}
          <GridItem>
            <VStack align="start" spacing={4}>
              <Text fontSize="xl" fontWeight="bold" color="blue.300">
                Fritz Tecnologia
              </Text>
              <Text fontSize="sm" color="gray.300" lineHeight="tall">
                Líder em soluções tecnológicas inovadoras. Desenvolvemos
                software de ponta para transformar seu negócio e impulsionar seu
                crescimento digital.
              </Text>
              <HStack spacing={3}>
                <Link href="#" _hover={{ color: "blue.300" }}>
                  <Icon as={FaFacebook} boxSize={5} />
                </Link>
                <Link href="#" _hover={{ color: "blue.300" }}>
                  <Icon as={FaLinkedin} boxSize={5} />
                </Link>
                <Link href="#" _hover={{ color: "blue.300" }}>
                  <Icon as={FaInstagram} boxSize={5} />
                </Link>
                <Link href="#" _hover={{ color: "blue.300" }}>
                  <Icon as={FaTwitter} boxSize={5} />
                </Link>
              </HStack>
            </VStack>
          </GridItem>

          {/* Coluna 2 - Links Rápidos */}
          <GridItem>
            <VStack align="start" spacing={4}>
              <Text fontSize="lg" fontWeight="bold" color="blue.300">
                Links Rápidos
              </Text>
              <VStack align="start" spacing={2}>
                <Link
                  href="/sobre"
                  _hover={{ color: "blue.300" }}
                  fontSize="sm"
                >
                  Sobre Nós
                </Link>
                <Link
                  href="/servicos"
                  _hover={{ color: "blue.300" }}
                  fontSize="sm"
                >
                  Serviços
                </Link>
                <Link
                  href="/portfolio"
                  _hover={{ color: "blue.300" }}
                  fontSize="sm"
                >
                  Portfólio
                </Link>
                <Link href="/blog" _hover={{ color: "blue.300" }} fontSize="sm">
                  Blog
                </Link>
                <Link
                  href="/contato"
                  _hover={{ color: "blue.300" }}
                  fontSize="sm"
                >
                  Contato
                </Link>
              </VStack>
            </VStack>
          </GridItem>

          {/* Coluna 3 - Serviços */}
          <GridItem>
            <VStack align="start" spacing={4}>
              <Text fontSize="lg" fontWeight="bold" color="blue.300">
                Nossos Serviços
              </Text>
              <VStack align="start" spacing={2}>
                <Text fontSize="sm" color="gray.300">
                  Desenvolvimento Web
                </Text>
                <Text fontSize="sm" color="gray.300">
                  Apps Mobile
                </Text>
                <Text fontSize="sm" color="gray.300">
                  Cloud Solutions
                </Text>
                <Text fontSize="sm" color="gray.300">
                  IA & Machine Learning
                </Text>
                <Text fontSize="sm" color="gray.300">
                  Consultoria TI
                </Text>
              </VStack>
            </VStack>
          </GridItem>

          {/* Coluna 4 - Contato */}
          <GridItem>
            <VStack align="start" spacing={4}>
              <Text fontSize="lg" fontWeight="bold" color="blue.300">
                Contato
              </Text>
              <VStack align="start" spacing={3}>
                <HStack spacing={3}>
                  <Icon as={FaMapMarkerAlt} color="blue.300" boxSize={4} />
                  <Text fontSize="sm" color="gray.300">
                    Rua das Inovações, 123
                    <br />
                    São Paulo, SP - 01234-567
                  </Text>
                </HStack>
                <HStack spacing={3}>
                  <Icon as={FaPhone} color="blue.300" boxSize={4} />
                  <Text fontSize="sm" color="gray.300">
                    (11) 9999-8888
                  </Text>
                </HStack>
                <HStack spacing={3}>
                  <Icon as={FaEnvelope} color="blue.300" boxSize={4} />
                  <Text fontSize="sm" color="gray.300">
                    contato@fritz.com.br
                  </Text>
                </HStack>
                <HStack spacing={3}>
                  <Icon as={FaClock} color="blue.300" boxSize={4} />
                  <Text fontSize="sm" color="gray.300">
                    Seg - Sex: 9h às 18h
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          </GridItem>
        </Grid>

        {/* Linha divisória alternativa */}
        <Box height="1px" bg="gray.600" mb={6} mx="auto" />

        {/* Seção Inferior */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr auto",
          }}
          gap={4}
          alignItems="center"
        >
          <GridItem>
            <Text fontSize="sm" color="gray.400">
              © {new Date().getFullYear()} Fritz Tecnologia. Todos os direitos
              reservados.
            </Text>
          </GridItem>

          <GridItem>
            <HStack spacing={6}>
              <Link
                href="/politica-privacidade"
                _hover={{ color: "blue.300" }}
                fontSize="sm"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-uso"
                _hover={{ color: "blue.300" }}
                fontSize="sm"
              >
                Termos de Uso
              </Link>
              <Link
                href="/cookies"
                _hover={{ color: "blue.300" }}
                fontSize="sm"
              >
                Cookies
              </Link>
            </HStack>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
