import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const NavListDrawer = ({ navLin, setOpen }) => {
  return (
    <div>
      <Box sx={{ width: 300 }}>
        <nav>
          <List>
            {navLin.map((link) => (
              <ListItem key={link.title}>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemButton
                  component={link.title == "Proyecto" ? NavLink : HashLink}
                  to={link.path}
                  onClick={() => setOpen(false)}
                >
                  {link.title}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
        <Divider />
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <List
            sx={{
              flexGrow: 1,
              display: "flex",
              position: "absolute",
              top: "100%",
              alignItems: "center",
            }}
          >
            <ListItem
              disablePadding
              sx={{
                bgcolor: "inherit",
                borderRadius: "5px",
                height: "30px",
                margin: 0,
              }}
            >
              <ListItemButton
                component="a"
                href="https://github.com/MatiasDeiCastelliFL?tab=repositories"
                target="_blank"
              >
                <GitHubIcon sx={{ fontSize: 40 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="https://www.linkedin.com/in/matias-marcelo-dei-castelli-59b811222/"
                target="_blank"
              >
                <LinkedInIcon sx={{ fontSize: 40 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="https://www.instagram.com/matiasdeicastelli/"
                target="_blank"
              >
                <InstagramIcon sx={{ fontSize: 40 }} />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </div>
  );
};

export default NavListDrawer;
