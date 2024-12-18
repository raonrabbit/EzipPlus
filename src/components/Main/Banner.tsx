import { Box, Flex, Image, Text} from "@chakra-ui/react";

export default function Banner(){
    return(
        <Flex direction={"row"} marginX={"auto"} justifyContent={"center"} pl={8}>
            <Box flex="4" pr={4}>
                <Image src="/images/banner.png" width="100%" borderRadius={"36px"}/>
            </Box>
            <Box flex="1">
                <Flex direction="column" height="100%" gap={4}>
                    <Box flex="1" borderRadius={"16px"} background={"mainOrange"} textAlign={"center"}>
                        <Text pt={4} color={"white"} fontSize={"28px"} fontWeight={"semibold"}>누적 거래량</Text>
                    </Box>
                    <Box flex="1" borderRadius={"16px"} background={"mainBlack"} justifyContent="{center}" alignItems={"center"}>
                        <Text mt={8} color={"white"} fontSize={"32px"} textAlign={"center"}>뀨?</Text>
                    </Box>
                    <Box flex="1" borderRadius={"16px"} background={"mainBlack"}>
                    <Text mt={8} color={"white"} fontSize={"32px"} textAlign={"center"}>뀨뀨?</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}