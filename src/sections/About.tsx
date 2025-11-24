import { Avatar, Box, Blockquote, Float, HStack, Span, Text } from "@chakra-ui/react"


const About = () => {
    return (
        <Box
            data-state="open"
            _open={{
                animationName: "fade-in, scale-in",
                animationDuration: "300ms",
            }}
            maxWidth={"900px"}
            position={"relative"}
            margin={"0 auto"}
            padding={"0 16px 64px"}

        >
            <Text fontSize="4xl" fontWeight="bold" textAlign="center" marginTop="16" marginBottom="8">
                Sobre Nós
            </Text>

            <Blockquote.Root marginBottom={"10"}>
                <Blockquote.Content cite="Uzumaki Naruto">
                    ...
                </Blockquote.Content>
                <Blockquote.Caption>
                    — <cite>...</cite>
                </Blockquote.Caption>
            </Blockquote.Root>


            <Blockquote.Root bg="bg.subtle" padding="8" margin="16px auto" borderRadius="md" position="relative">
                <Float placement="bottom-end" offset="10">
                    <Blockquote.Icon opacity="0.4" boxSize="10" rotate="180deg" />
                </Float>
                <Blockquote.Content cite="Uzumaki Naruto">
                    Temos como objetivo ajudar empresas performar resultados com ferramentas digitais, com isso apostamos em tecnologias modernas e práticas ágeis para entregar soluções de alta qualidade.
                </Blockquote.Content>
                <Blockquote.Caption>
                    <cite>
                        <HStack mt="2" gap="3">
                            <Avatar.Root size="sm">
                                <Avatar.Fallback name="Emily Jones" />
                                <Avatar.Image src="/perfil-fritz.png" />
                            </Avatar.Root>
                            <Span fontWeight="medium">Mauricio Nunes da Silva | Engenheiro de Software | CTO</Span>
                        </HStack>
                    </cite>
                </Blockquote.Caption>
            </Blockquote.Root>

        </Box>
    )
}

export default About;