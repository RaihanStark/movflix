import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { APP_NAME } from "../../constraints";
function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" mr={2}>
          {APP_NAME}
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/watch-list" color="inherit">
          Watch List
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
