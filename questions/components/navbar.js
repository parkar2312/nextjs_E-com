import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  const handleAddToCart = () => {
    router.push("/cart/");
  };
  return (
    <div>
      {" "}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                href={{
                  pathname: "/",
                }}
              >
                <a>E-commerce</a>
              </Link>
            </Typography>
            <Button color="inherit" onClick={handleAddToCart}>
              Cart
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
