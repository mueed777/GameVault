import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const DarkLightMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack paddingRight={"15px"}>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme={"green"}
      >
        {colorMode === "light" ? "Dark" : "Light"} mode
      </Switch>
    </HStack>
  );
};

export default DarkLightMode;
