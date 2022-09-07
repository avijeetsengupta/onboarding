import { Box, Circle, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { HiCheck } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { getData } from "./app.actions";
import { setColorFour } from "./app.slice";

const Complete: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  useEffect(() => {
    let data = "100%";
    dispatch(getData(data));
    dispatch(setColorFour(true));
  });
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"} mt={"2rem"} flexDir={"column"}>
        <Circle size="4rem" bg="primaryColor" mt={"2rem"} color="white">
          <Box as={HiCheck} boxSize={6} />
        </Circle>
        <Text fontSize={"2rem"} fontWeight={"700"} mt={"2rem"} color={"primaryTextColor"}>
          Congratulations, Eren!
        </Text>
        <Text fontSize={"16px"} fontWeight="400" textAlign="center" color={"secondaryTextColor"}>
          You have completed onboarding, you can start using the Eden!
        </Text>
      </Flex>
      <Flex px={["0", "0", "0", "34rem"]} mt={"1rem"} flexDir={"column"}>
        <Flex
          mt={"1rem"}
          alignItems={"center"}
          justifyContent={"center"}
          background={"primaryColor"}
          fontWeight={"400"}
          height={"2.5rem"}
          cursor={"pointer"}
          borderRadius={"5px"}
          color={"whiteText"}
          onClick={() => history.push("./")}
        >
          Launch Eden
        </Flex>
      </Flex>
    </>
  );
};

export default Complete;
