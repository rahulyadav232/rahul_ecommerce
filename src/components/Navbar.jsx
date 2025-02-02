import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Input,
} from "@mui/material";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerComponent from "./Drawer";

const Navbar = ({ onSearch }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Pass the search query to the parent component
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar component={"nav"} position="static">
        <Toolbar>
          <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
            <Link
              component={RouterLink}
              to={"/"}
              color={"#fff"}
              underline="none"
            >
              Rahul Yadav E-comm Website
            </Link>
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
              sx={{
                marginLeft: 2,
                backgroundColor: "white",
                color: "black", 
                border: "3px solid black",
                borderRadius: "5px", 
                "&::placeholder": {
                  color: "black", 
                  opacity: 1,
                },
                "& .MuiInputBase-input": {
                  padding: "6px 8px",
                },
              }}
            />
          </Typography>

          {isMatch ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { md: "none", xs: "block" } }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
              <DrawerComponent
                isDrawerOpen={isDrawerOpen}
                toggleDrawer={toggleDrawer}
              />
            </IconButton>
          ) : (
            <Box
              sx={{ display: { xs: "none", sm: "block" } }}
              component={"div"}
            >
              <Link component={RouterLink} to={"/"} underline={"none"}>
                <Button sx={{ color: "#fff" }}>Home</Button>
              </Link>
              <Link component={RouterLink} to={"/login"} underline={"none"}>
                <Button sx={{ color: "#fff" }}>Signin</Button>
              </Link>
              <Link component={RouterLink} to={"/cart"} underline="none">
                <Button sx={{ color: "#fff" }} endIcon={<ShoppingCartIcon />}>
                  Cart
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
