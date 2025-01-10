import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import GenreList from "../components/GenreList";

const Layout = () => {
  return (
    <>
      <Box padding={2}>
        <NavBar></NavBar>
        <Box padding={3}>
          <Outlet></Outlet>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
