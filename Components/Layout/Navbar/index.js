import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid, Link as MUILink, Menu, MenuItem, Popover } from "@mui/material";
import Link from "next/link";
import SVG from "react-inlinesvg";
import Button from "@mui/material/Button";
import * as s from "./styles/navbar.style";

import { logo, profile_icon } from "../../../assets/svgs/pageSvgs";
import Item from "../../Item";

const navItems = ["Product", "Integrations", "Code Privacy", "Pricing"];
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open = Boolean(anchorEl);
  const openIntegration = Boolean(anchorEl2);
  const handleClickProduct = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickIntegration = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };

  return (
    <s.Header>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ paddingRight: "20px" }}>
            <a href="#">
              <SVG src={logo} />
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              paddingLeft: "50px",
              alignItems: "center",
              flexGrow: "1",
            }}
          >
            <Box className="header-link">
              <Button disableRipple onClick={handleClickProduct}>
                Product
              </Button>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Box component="div">
                  <Grid>
                    <Item>
                      <Box>
                        <span>#icon</span>
                        <span>Kodezi Code</span>
                      </Box>
                      <Typography>
                        Try our live web-based IDE with features built in!
                      </Typography>
                    </Item>
                    <Item>
                      <Box>
                        <span>#icon</span>
                        <span>Kodezi cloud</span>
                      </Box>
                      <Typography>
                        Auto-correct your codebase within VS Code and optimize
                        your codebase!
                      </Typography>
                    </Item>
                  </Grid>
                </Box>
              </Popover>
            </Box>
            <Box className="header-link">
              <Button disableRipple onClick={handleClickIntegration}>
                Integrations
              </Button>
              <Popover
                open={openIntegration}
                anchorEl={anchorEl2}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Box>
                  <Grid>
                    <Item>
                      <Box>
                        <span>#icon</span>
                        <span>Web App IDE Beta</span>
                      </Box>
                      <Typography>
                        Try our live web-based IDE with features built in!
                      </Typography>
                    </Item>
                    <Item>
                      <Box>
                        <span>#icon</span>
                        <span>VS Code</span>
                      </Box>
                      <Typography>
                        Auto-correct your codebase within VS Code and optimize
                        your codebase!
                      </Typography>
                    </Item>
                    <Item>
                      <Box>
                        <span>#icon</span>
                        <span>GitHub Soon</span>
                      </Box>
                      <Typography>
                        Auto-correct your codebase within VS Code and optimize
                        your codebase!
                      </Typography>
                    </Item>
                    <Item>
                      <Box>
                        <span>#icon</span>
                        <span>Slack soon</span>
                      </Box>
                      <Typography>
                        Auto-correct your codebase within VS Code and optimize
                        your codebase!
                      </Typography>
                    </Item>
                  </Grid>
                </Box>
              </Popover>
            </Box>
            <Box className="header-link">
              <Link href="#">Code Privacy</Link>
            </Box>
            <Box className="header-link">
              <Link href="#">Pricing</Link>
            </Box>
          </Box>
          <Box
            className="right-header"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography className="text-bg">Kodezi vs Copilot</Typography>
            <Box className="down-box">
              <Button className="download-btn">Download</Button>
            </Box>
            <Box sx={{ paddingLeft: "15px", position: "relative", top: "2px" }}>
              <Link href="#">
                <SVG src={profile_icon} />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </s.Header>
  );
};

export default Navbar;
