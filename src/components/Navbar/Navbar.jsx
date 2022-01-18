import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { APP_NAME } from "../../constraints";
function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {APP_NAME}
        </Typography>
        <Button color="inherit">Watch List</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
