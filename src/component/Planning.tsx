import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { RiUserFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { getData } from "./app.actions";
import { useAppDispatch } from "../redux/hooks";
import { setColorThree } from "./app.slice";

const Planning: React.FC = () => {
  const history = useHistory();
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    let data = "83%";
    dispatch(getData(data));
    dispatch(setColorThree(true));
  });
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"} mt={"2rem"} flexDir={"column"}>
        <Text fontSize={"2rem"} fontWeight={"700"} color={"primaryTextColor"}>
          How are you planning to use Eden?
        </Text>
        <Text fontSize={"16px"} mt="1rem" fontWeight="400" textAlign="center" color={"secondaryTextColor"}>
          we'll streamline your setup experince accordingly.
        </Text>
      </Flex>
      <Flex px={["0", "0", "0", "35rem"]} mt={"1rem"} flexDir={"column"}>
        <Flex>
          <Flex
            pt={"2rem"}
            pl={"1.6rem"}
            width={"12rem"}
            height={"13rem"}
            borderRadius={"5px"}
            border={!active ? "2px solid #664de5" : "2px solid #e9e6e6"}
            cursor="pointer"
            onClick={() => setActive(!active)}
          >
            <Flex flexDir={"column"}>
              <Box as={RiUserFill} boxSize={6} color={!active ? "primaryColor" : "#364259"} />
              <Text mt={"1rem"} color={"#252e41"} fontWeight={"700"}>
                For myself
              </Text>
              <Text mt={"1rem"} fontWeight={"500"} color={"secondaryTextColor"}>
                Write better. Think more clearly. stay organized
              </Text>
            </Flex>
          </Flex>

          <Flex
            pt={"2rem"}
            pl={"1.6rem"}
            width={"12rem"}
            height={"13rem"}
            borderRadius={"5px"}
            border={active ? "2px solid #664de5" : "2px solid #e9e6e6"}
            ml="2rem"
            cursor="pointer"
            onClick={() => setActive(!active)}
          >
            <Flex flexDir={"column"}>
              <Box as={HiUserGroup} boxSize={6} color={active ? "primaryColor" : "#364259"} />
              <Text mt={"1rem"} color={"#252e41"} fontWeight={"700"}>
                With my team
              </Text>
              <Text mt={"1rem"} fontWeight={"500"} color={"secondaryTextColor"}>
                Wikis, docs, tasks & projects. all in one place.
              </Text>
            </Flex>
          </Flex>
        </Flex>
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
          onClick={() => history.push("./complete")}
        >
          Create workspaces
        </Flex>
      </Flex>
    </>
  );
};

export default Planning;
