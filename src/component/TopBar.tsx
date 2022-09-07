import { Circle, Flex, Image } from "@chakra-ui/react";
import React from "react";
import eden from "../assets/eden.png";
import { useAppSelector } from "../redux/hooks";
import { RootSate } from "../redux/store";

const TopBar: React.FC = () => {
  const score = useAppSelector((state: RootSate) => state.app.data);
  const colorTwo = useAppSelector((state: RootSate) => state.app.colorTwo);
  const colorThree = useAppSelector((state: RootSate) => state.app.colorThree);
  const colorFour = useAppSelector((state: RootSate) => state.app.colorFour);
  return (
    <>
      <Flex alignItems={"center"} position={"relative"} flexDir={"column"} justifyContent={"center"} mt={"3rem"}>
        <Image src={eden} />
        <Flex gap={"4rem"} mt={"2rem"} alignItems={"center"}>
          <Circle size="40px" bg="primaryColor" color="white">
            1
          </Circle>
          <Circle size="40px" bg={colorTwo ? "primaryColor" : "borderColor"} color={colorTwo ? "white" : "black"}>
            2
          </Circle>
          <Circle size="40px" bg={colorThree ? "primaryColor" : "borderColor"} color={colorThree ? "white" : "black"}>
            3
          </Circle>
          <Circle size="40px" bg={colorFour ? "primaryColor" : "borderColor"} color={colorFour ? "white" : "black"}>
            4
          </Circle>
        </Flex>
        <Flex
          width={"20rem"}
          position={"absolute"}
          height={"2px"}
          background={"borderColor"}
          bottom={"18px"}
          zIndex={"-1"}
        >
          <Flex background={"primaryColor"} width={score}></Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default TopBar;
