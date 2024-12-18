import { Box } from "@chakra-ui/react";
import Header from "./common/Header";
import { Outlet } from "react-router-dom";

export default function Root() {
  return(
  <Box>
    <Header></Header>
    <Box pt="88px" pl={8} pr={8}>
      <Outlet></Outlet>
    </Box>
  </Box>);
}
