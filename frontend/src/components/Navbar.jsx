import React from "react";
import { AppBar, Toolbar, IconButton, InputBase, Box, Typography } from "@mui/material";
import { Search, ShoppingCart, Person, Login } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#2D9CDB" }} className="shadow-md p-3 mt-4">
      <Toolbar className="flex flex-col md:flex-row justify-between items-center w-full gap-2">
        
        {/* First Row - Logo & Icons */}
        <Box className="flex justify-between items-center w-full md:w-auto">
          {/* Logo */}
          <Link to={"/"}>
          <Typography variant="h6" className="font-bold text-white">LaptopStore</Typography>
          </Link>

          {/* Icons - Shown only on small screens */}
          <Box className="flex items-center gap-2 md:hidden">
            <a href="../auth/Signup.jsx">
            <IconButton color="inherit"><Login /></IconButton>
            </a>
            <IconButton color="inherit"><Person /></IconButton>
            <IconButton color="inherit"><ShoppingCart /></IconButton>
          </Box>
        </Box>

        {/* Second Row - Search Bar (Full Width on Small Screens, Centered on Larger Screens) */}
        <Box className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <InputBase
            placeholder="Search for laptops..."
            className="w-full p-2 pl-10 pr-10 rounded-full bg-white text-black focus:outline-none"
          />
        </Box>

        {/* Icons - Shown only on larger screens */}
        <Box className="hidden md:flex items-center gap-4">
        
        <Link to="/login">
  <IconButton className="text-white">
    <Login className="text-white" />
    <span className="ml-1 text-lg text-white">Login</span>
  </IconButton>
</Link>

<Link to="/signup">
  <IconButton className="text-white">
    <Person className="text-white" />
    <span className="ml-1 text-lg text-white">Signup</span>
  </IconButton>
</Link>

          <Link to="/cart">
          <IconButton className="text-white">
            <ShoppingCart  className="text-white" /><span className="ml-1 text-lg text-white">Carts</span></IconButton>
          </Link>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
