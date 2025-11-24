import Navbar from "@/components/Navbar";
import Solutions from "@/sections/Solutions";
import About from "@/sections/About";
import { Box } from "@chakra-ui/react";
export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Navbar />
      <Solutions />
      <About />
    </Box>
  );
}
