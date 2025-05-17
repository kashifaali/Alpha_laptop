import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, InputBase, Box, Typography } from "@mui/material";
import { Search, ShoppingCart, Person, Login, Logout } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("userLoggedIn");
    setIsLoggedIn(!!loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2D9CDB" }} className="shadow-md p-3 mt-4">
      <Toolbar className="flex flex-col md:flex-row justify-between items-center w-full gap-2">
        
        {/* First Row - Logo & Icons */}
        <Box className="flex justify-between items-center w-full md:w-auto">
          {/* Logo */}
          <Link to={"/"}>
            <Typography variant="h6" className="font-bold text-white">LaptopStore</Typography>
          </Link>

          {/* Icons - Small screen only */}
          <Box className="flex items-center gap-2 md:hidden">
            {!isLoggedIn ? (
              <>
                <Link to="/login">
                  <IconButton color="inherit"><Login /></IconButton>
                </Link>
                <Link to="/signup">
                  <IconButton color="inherit"><Person /></IconButton>
                </Link>
              </>
            ) : (
              <IconButton color="inherit" onClick={handleLogout}><Logout /></IconButton>
            )}
            <Link to="/cart">
              <IconButton color="inherit"><ShoppingCart /></IconButton>
            </Link>
          </Box>
        </Box>

        {/* Search Bar */}
        <Box className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <InputBase
            placeholder="Search for laptops..."
            className="w-full p-2 pl-10 pr-10 rounded-full bg-white text-black focus:outline-none"
          />
        </Box>

        {/* Icons - Larger screens */}
        <Box className="hidden md:flex items-center gap-4">
          {!isLoggedIn ? (
            <>
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
            </>
          ) : (
            <IconButton className="text-white" onClick={handleLogout}>
              <Logout className="text-white" />
              <span className="ml-1 text-lg text-white">Logout</span>
            </IconButton>
          )}

          <Link to="/cart">
            <IconButton className="text-white">
              <ShoppingCart className="text-white" />
              <span className="ml-1 text-lg text-white">Carts</span>
            </IconButton>
          </Link>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
