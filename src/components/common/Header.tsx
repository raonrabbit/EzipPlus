import { Box, Image, Stack, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box bg="white" position="fixed" top="0" left="0" right="0" height="88px">
      <Stack paddingY={5} marginX={"auto"} justifyContent={"space-between"}>
        <Link to={"/"}>
          <Box display={"flex"} pl={8}>
            <Box>
              <Image h={12} src={"./images/symbol.svg"}></Image>
            </Box>
            <Box pl={4}>
              <Image h={12} src={"./images/logo.svg"}></Image>
            </Box>
          </Box>
        </Link>
        <Box display={"flex"}></Box>
      </Stack>
    </Box>
  );
}
