import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box
            as="footer"
            w="100%"
            bg="#333"
            color="#fff"
            py="4"
            textAlign="center"
        >
            <Box maxW="1200px" mx="auto" px="4">
                <Text fontSize="sm">© {new Date().getFullYear()} Fritz Tecnologia. Todos os direitos reservados.</Text>
            </Box>
        </Box>
    );
};

export default Footer;