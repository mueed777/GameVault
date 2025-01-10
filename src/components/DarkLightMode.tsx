import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const DarkLightMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
      colorScheme={"green"}
      whiteSpace="nowrap"
    >
      {colorMode === "light" ? "Dark" : "Light"}
    </Switch>
  );
};

export default DarkLightMode;
