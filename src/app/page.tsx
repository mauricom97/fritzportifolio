import Navbar from "@/components/Navbar";
import Solutions from "@/sections/Solutions";
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
    </Box>
  );
}
