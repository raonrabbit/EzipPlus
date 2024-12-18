import { Box, Image, Stack, Text, VStack } from "@chakra-ui/react";

export default function TopApartment(){
    return(<Box pt="80px">
        <Stack direction="column">
            <Box display={"flex"} alignItems={"center"} ml={4}>
                <Image src="./images/fire.svg" height="96px"></Image>
                <Text fontSize={"48px"} fontWeight={"semibold"}>핫 매물</Text>
            </Box>
        </Stack>
    </Box>)
}