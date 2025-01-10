import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box padding={2}>
      <NavBar></NavBar>
      <Box padding={5}>
        <Heading>Ops...</Heading>
        <HStack>
          <Text>
            {isRouteErrorResponse(error)
              ? "This page does not exist"
              : "An unexpected error occured. Try refreshing the page!"}
          </Text>
          <Button
            size="xs"
            fontWeight="bold"
            colorScheme="red"
            onClick={() => (window.location.href = "/")}
          >
            Refresh
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ErrorPage;
