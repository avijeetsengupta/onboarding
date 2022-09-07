import { Flex, Input, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { getData } from "./app.actions";
import { setColorFour, setColorThree, setColorTwo } from "./app.slice";

const WelcomeForm: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    let data = "20%";
    dispatch(getData(data));
    dispatch(setColorTwo(false));
    dispatch(setColorThree(false));
    dispatch(setColorFour(false));
  });

  const history = useHistory();
  const handleChange = () => {
    history.push("./workSpace");
  };
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"} mt={"2rem"} flexDir={"column"}>
        <Text fontSize={"2rem"} fontWeight={"700"} color={"primaryTextColor"}>
          Welcome! First things first...
        </Text>
        <Text fontSize={"16px"} mt="1rem" fontWeight="400" textAlign="center" color={"secondaryTextColor"}>
          you can always change them later
        </Text>
      </Flex>
      <Flex px={["0", "0", "0", "34rem"]} mt={"1rem"} flexDir={"column"}>
        <Text mb="8px" color={"blackText"} fontWeight="500">
          Full Name
        </Text>
        <Input placeholder="Steve jobs" size="md" />
        <Text mt={"1rem"} color={"blackText"} fontWeight="500" mb="8px">
          Display Name
        </Text>
        <Input placeholder="Steve" size="md" isInvalid={false} errorBorderColor="crimson" />
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
          onClick={handleChange}
        >
          Create workspace
        </Flex>
      </Flex>
    </>
  );
};

export default WelcomeForm;
