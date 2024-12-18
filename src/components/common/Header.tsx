import { Box, Button, IconButton, Image, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const Icon = useColorModeValue(FaMoon, FaSun);
  const logo = useColorModeValue("./images/logo-light.svg", "./images/logo-dark.svg");

  return (
    <Box w={"100vw"} position="fixed" top="0" left="0" right="0" height="88px">
      <Stack paddingY={5} marginX={"auto"} justifyContent={"space-between"} direction={"row"}>
        <Link to={"/"}>
          <Box display={"flex"} pl={8}>
              <Image h={12} src={logo}></Image>
          </Box>
        </Link>
        <Box display={"flex"} pr={8} gap={2}>
          <IconButton onClick={toggleColorMode} variant={"ghost"} aria-label="Toggle Dark Mode" icon={<Icon />}/>
          <Button>
            로그인
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
