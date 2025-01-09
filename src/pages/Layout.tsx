import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import GenreList from "../components/GenreList";

const Layout = () => {
  return (
    <>
      <Box padding={2}>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </Box>
    </>
  );
};

export default Layout;
