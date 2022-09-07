import { Flex, Input, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { getData } from "./app.actions";
import { setColorTwo } from "./app.slice";

const WorkSpace: React.FC = () => {
  const history = useHistory();

  const dispatch = useAppDispatch();
  useEffect(() => {
    let data = "50%";
    dispatch(getData(data));
    dispatch(setColorTwo(true));
  });
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"} mt={"2rem"} flexDir={"column"}>
        <Text fontSize={"2rem"} fontWeight={"700"} color={"primaryTextColor"}>
          Let's set up a home for all your work
        </Text>
        <Text fontSize={"16px"} mt="1rem" fontWeight="400" textAlign="center" color={"secondaryTextColor"}>
          you can always create another workspace later.
        </Text>
      </Flex>
      <Flex px={["0", "0", "0", "34rem"]} mt={"1rem"} flexDir={"column"}>
        <Text mb="8px" color={"blackText"} fontWeight="500">
          {" "}
          Workspace Name
        </Text>
        <Input placeholder="Eden" size="md" />
        <Text color={"blackText"} fontWeight="500" mt={"1rem"} mb="8px">
          Workspace url
        </Text>
        <InputGroup size="md">
          <InputLeftAddon children="www.eden.com/" />
          <Input placeholder="Example" fontWeight={"400"} />
        </InputGroup>
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
          onClick={() => history.push("./planning")}
        >
          Create workspaces
        </Flex>
      </Flex>
    </>
  );
};

export default WorkSpace;
