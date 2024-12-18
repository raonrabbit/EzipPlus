import { Box } from "@chakra-ui/react";
import Banner from "../components/Main/Banner";
import TopApartment from "../components/Main/TopApartment";

export default function Main() {
  return (
    <Box width={["100%", "100%", "960px", "1280px", "2048px"]} marginX="auto">
      <Banner></Banner>
      <TopApartment></TopApartment>
    </Box>
  );
}
